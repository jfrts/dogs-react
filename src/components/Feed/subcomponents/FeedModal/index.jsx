import "./styles.css";
import { useEffect } from "react";
import useFetch from "@/hooks/useFetch";
import { GET_PHOTO } from "@/api";
import { Error } from "@/components/helpers/Error";
import { Loading } from "@/components/helpers/Loading";
import { RenderIf } from "@/components/render-if";
import { PhotoContent } from "@/components/PhotoContent";

export function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  function handleOutsideClick({ target, currentTarget }) {
    if (target === currentTarget) {
      setModalPhoto(null);
    }
  }

  useEffect(function () {
    const { url, options } = GET_PHOTO(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div onClick={handleOutsideClick} className="modal">
      <RenderIf condition={error}>
        <Error>{error}</Error>
      </RenderIf>
      <RenderIf condition={loading}>
        <Loading />
      </RenderIf>
      <RenderIf condition={data}>
        <PhotoContent data={data} />
      </RenderIf>
    </div>
  )
}