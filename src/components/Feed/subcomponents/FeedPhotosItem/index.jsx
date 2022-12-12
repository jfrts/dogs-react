import "./styles.css";
import { Image } from "@/components/helpers/Image";
 
export function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }
  
  return (
    <li onClick={handleClick} className="feed-photo">
      <Image src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  )
}