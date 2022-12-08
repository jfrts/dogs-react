import "./styles.css";

export function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }
  
  return (
    <li onClick={handleClick} className="feed-photo">
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  )
}