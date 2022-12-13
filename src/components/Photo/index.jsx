import "./styles.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { GET_PHOTO } from "@/api";
import { RenderIf } from "@/components/render-if";
import { Loading } from "@/components/helpers/Loading";
import { Error } from "@/components/helpers/Error";
import { PhotoContent } from "@/components/PhotoContent";

export function Photo() {
  const { id } = useParams();
  const { data, loading, request, error } = useFetch();

  useEffect(function () {
    async function fetchPhoto() {
      const { url, options } = GET_PHOTO(id);
      await request(url, options);
    }
    fetchPhoto();
  }, [request, id]);

  return (
    <>
      <RenderIf condition={error}>
        <Error errorMessage={error} />
      </RenderIf>

      <RenderIf condition={loading}>
        <Loading />
      </RenderIf>

      <RenderIf condition={data}>
        <div className="container mainContainer">
          <PhotoContent data={data} single={true} />
        </div>
      </RenderIf>
    </>
  )
}