import "./styles.css";
import useFetch from "@/hooks/useFetch";
import { DELETE_PHOTO } from "@/api";
import { RenderIf } from "@/components/render-if";

export function PhotoDelete({ id }) {
  const { request, loading } = useFetch();

  async function deletePhoto() {
    const confirm = window.confirm("Tem certeza que deseja deletar essa postagem?");

    if (!confirm) return;

    const { url, options } = DELETE_PHOTO(id);
    const { response } = await request(url, options);

    if (response.ok) {
      window.location.reload();
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