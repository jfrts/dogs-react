import "./styles.css";
import { POST_COMMENT } from "@/api";
import { ReactSVG } from "react-svg";
import { UserContext } from "@/context/user-context";
import useFetch from "@/hooks/useFetch";
import { useContext, useState } from "react";
import { RenderIf } from "@/components/render-if";

export function PhotoComments({ id, comments }) {
  const { request } = useFetch();
  const [commentsList, setCommentsList] = useState(() => comments);
  const [comment, setComment] = useState("");
  const { login } = useContext(UserContext);

  async function sendComment(event) {
    event.preventDefault();
    const { url, options } = POST_COMMENT(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setCommentsList([...commentsList, json]);
    }
    setComment("");
  }

  return (
    <>
      <div>
        <ul className="comments">
          {commentsList.map(comment => (
            <li key={comment.comment_ID}>
              <b>@{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          ))}
        </ul>
      </div>

      <RenderIf condition={login}>
        <form onSubmit={sendComment} className="send-comment-form">
          <textarea
            value={comment}
            placeholder="Escreva um comentário"
            onChange={({ target }) => setComment(target.value)}
          />
          <button className="send-comment-button">
            <ReactSVG src="/assets/enviar.svg" />
          </button>
        </form>
      </RenderIf>
    </>
  )
}