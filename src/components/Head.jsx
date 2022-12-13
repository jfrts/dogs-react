import { useEffect } from "react";

export function Head(props) {
  useEffect(function () {
    document.title = `${props.title} | Dogs`;
  }, [props]);

  return <></>;
}