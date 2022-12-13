import "./styles.css";
import { useEffect, useState } from "react";
import { GET_PHOTOS } from "@/api";
import useFetch from "@/hooks/useFetch";
import { Error } from "@/components/helpers/Error";
import { Loading } from "@/components/helpers/Loading";
import { FeedPhotosItem } from "../FeedPhotosItem";
import { RenderIf } from "@/components/render-if";

export function FeedPhotos({ user, page, setModalPhoto, setInfinite }) {
  const { data, error, loading, request } = useFetch();

  useEffect(function () {
    const NUMBER_PHOTOS_REQUEST = 3;
    async function fetchPhotos() {
      const { url, options } = GET_PHOTOS({ page, total: NUMBER_PHOTOS_REQUEST, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < NUMBER_PHOTOS_REQUEST) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [request, user, setInfinite]);

  if (error) {
    return <Error>{error}</Error>
  }

  if (loading) {
    return <Loading />
  }

  if (data) {
    return (
      <>
        <RenderIf condition={data.length > 0}>
          <ul className="animeLeft feed">
            {data.map((photo) => <FeedPhotosItem photo={photo} setModalPhoto={setModalPhoto} key={photo.id} />)}
          </ul>
        </RenderIf>

        <RenderIf condition={data.length === 0}>
          <h2 className="empty-message">Nenhuma postagem para ser mostrada...</h2>
        </RenderIf>
      </>
    )
  }
}