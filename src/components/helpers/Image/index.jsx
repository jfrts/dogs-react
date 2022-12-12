import "./styles.css";
import { useState } from "react";
import { RenderIf } from "@/components/render-if";

export function Image({ alt, ...props }) {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className="img-wrapper">
      <RenderIf condition={skeleton}>
        <div className="skeleton"></div>
      </RenderIf>
      <img onLoad={handleLoad} alt={alt} {...props} />
    </div>
  )
}