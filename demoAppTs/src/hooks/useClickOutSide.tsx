import { useEffect, useRef } from "react";

const useClickOutSide = (callback?: () => void) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutSide(this: Document, ev: MouseEvent) {
      if (nodeRef.current && !nodeRef.current.contains(ev.target as Node)) {
        callback?.();
      }
    }
    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);

  return {
    nodeRef,
  };
};

export default useClickOutSide;
