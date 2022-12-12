import { useState } from "react";
import { RenderIf } from "@/components/render-if";
import { FeedModal } from "./subcomponents/FeedModal";
import { FeedPhotos } from "./subcomponents/FeedPhotos";

export function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <>
      <RenderIf condition={modalPhoto}>
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      </RenderIf>
      <FeedPhotos user={user} setModalPhoto={setModalPhoto} />
    </>
  )
}