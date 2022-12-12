import "./styles.css";
import { useEffect } from "react";
import { GET_PHOTOS } from "@/api";
import useFetch from "@/hooks/useFetch";
import { Error } from "@/components/helpers/Error";
import { Loading } from "@/components/helpers/Loading";
import { FeedPhotosItem } from "../FeedPhotosItem";

export function FeedPhotos({ user, page, setModalPhoto, setInfinite }) {
  const { data, error, loading, request } = useFetch();

  useEffect(function () {
    const NUMBER_PHOTOS_REQUEST = 3;
    async function fetchPhotos() {
      const { url, options } = GET_PHOTOS({ page, total: NUMBER_PHOTOS_REQUEST, user });
      const {response, json} = await request(url, options);
      if (response && response.ok && json.lenght < NUMBER_PHOTOS_REQUEST) {
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
      <ul className="animeLeft feed">
        {data.map((photo) => <FeedPhotosItem photo={photo} setModalPhoto={setModalPhoto} key={photo.id} />)}
      </ul>
    )
  } else {
    return null;
  }
}