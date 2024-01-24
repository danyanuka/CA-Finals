import { useEffect } from "react";

// Custom hook for handleing click outside of a modal (Closes the modal).

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    function handleClickOutside(ev) {
      if (ref.current && !ref.current.contains(ev.target)) {
        handler();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
}
