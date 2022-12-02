import { useEffect, useState } from "react";

export function useMatchMedia(media) {
  const [match, setMatch] = useState(null);

  useEffect(function () {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener("resize", changeMatch);
    return function () {
      window.removeEventListener("resize", changeMatch);
    }
  }, [media]);

  return match;
}