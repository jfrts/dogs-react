import "./styles.css";
import { useEffect } from "react";
import { GET_PHOTOS } from "@/api";
import useFetch from "@/hooks/useFetch";
import { Error } from "@/components/helpers/Error";
import { Loading } from "@/components/helpers/Loading";
import { FeedPhotosItem } from "../FeedPhotosItem";

export function FeedPhotos({ user, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  useEffect(function () {
    async function fetchPhotos() {
      const { url, options } = GET_PHOTOS({ page: 1, total: 6, user });
      await request(url, options);
    }
    fetchPhotos();
  }, [request, user]);

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