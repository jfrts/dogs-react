import "./styles.css";
import { Link } from "react-router-dom";
import { PhotoComments } from "./subcomponents/PhotoComments";

export function PhotoContent({ data }) {
  const { photo, comments } = data;

  return (
    <div className="photo-content">
      <div className="photo-content-img">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="photo-content-details">
        <div className="photo-content-details-header">
          <p className="photo-content-details-header-author">
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
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