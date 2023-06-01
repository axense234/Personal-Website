// React
import { useEffect } from "react";

const usePopInAnimation = (
  className: string,
  inView: boolean,
  // eslint-disable-next-line no-undef
  entry: IntersectionObserverEntry | undefined
) => {
  useEffect(() => {
    if (inView) {
      entry?.target.classList.add(className);
      setTimeout(() => {
        entry?.target.classList.remove("hidden");
      }, 1000);
    }
  }, [entry?.target.classList, inView]);
};

export default usePopInAnimation;
