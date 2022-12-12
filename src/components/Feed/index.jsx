import { useState, useEffect } from "react";
import { RenderIf } from "@/components/render-if";
import { FeedModal } from "./subcomponents/FeedModal";
import { FeedPhotos } from "./subcomponents/FeedPhotos";

export function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(function () {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.8 && !wait) {
          setPages(pages => [...pages, pages.length + 1]);
          wait = true; 
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return function () {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    }
  }, []);

  return (
    <>
      <RenderIf condition={modalPhoto}>
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      </RenderIf>
      {
        pages.map(page =>
          <FeedPhotos key={page} user={user} page={page} setModalPhoto={setModalPhoto} setInfinite={setInfinite} />
        )
      }
    </>
  )
}