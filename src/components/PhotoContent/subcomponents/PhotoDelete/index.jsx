import "./styles.css";
import useFetch from "@/hooks/useFetch";
import { DELETE_PHOTO } from "@/api";
import { RenderIf } from "@/components/render-if";
import { useNavigate } from "react-router-dom";

export function PhotoDelete({ id }) {
  const { request, loading } = useFetch();
  const navigate = useNavigate();

  async function deletePhoto() {
    const confirm = window.confirm("Tem certeza que deseja deletar essa postagem?");

    if (!confirm) return;

    const { url, options } = DELETE_PHOTO(id);
    const { response } = await request(url, options);

    if (response.ok) {
      navigate("/");
    }
  }

  return (
    <>
      <RenderIf condition={loading}>
        <button disabled className="post-delete-button">Excluindo...</button>
      </RenderIf>
      <RenderIf condition={!loading}>
        <button onClick={deletePhoto} className="post-delete-button">Excluir</button>
      </RenderIf>
    </>
  )
}