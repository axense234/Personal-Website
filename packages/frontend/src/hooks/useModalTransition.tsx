/* eslint-disable no-undef */
// React
import { RefObject, useEffect } from "react";

const useModalTransition = (
  show: boolean,
  modalRef: RefObject<HTMLElement>
) => {
  let timeout: NodeJS.Timeout;
  const modal = modalRef.current as HTMLElement;

  useEffect(() => {
    if (show) {
      modal.style.display = "flex";
      setTimeout(() => {
        modal.style.opacity = "1";
      }, 100);
    } else {
      modal.style.opacity = "0";
      setTimeout(() => {
        modal.style.display = "none";
      }, 100);
    }
  }, [show]);
};

export default useModalTransition;
