import "./styles.css";

export function FeedPhotosItem({ photo }) {
  return (
    <li className="feed-photo">
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  )
}