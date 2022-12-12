import "./styles.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "@/context/user-context";
import { PhotoComments } from "./subcomponents/PhotoComments";
import { PhotoDelete } from "./subcomponents/PhotoDelete";
import { Image } from "@/components/helpers/Image";

export function PhotoContent({ data, single }) {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={single ? "photo-content-single" : "photo-content"}>
      <div className="photo-content-img">
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className="photo-content-details">
        <div className="photo-content-details-header">
          <p className="photo-content-details-header-author">
            {
              (user.data && user.data.username === photo.author)
                ? <PhotoDelete id={photo.id} />
                : <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            }
            <span>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className="photo-content-details-header-attributes">
            <li>{photo.peso} kg</li>
            <li>{photo.idade} {photo.idade === 1 ? "ano" : "anos"}</li>
          </ul>
        </div>
        <PhotoComments id={photo.id} comments={comments} />
      </div>
    </div>
  )
}