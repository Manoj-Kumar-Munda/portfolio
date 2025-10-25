import { useEffect, useRef } from "react";

/**
 * Custom hook to handle clicks outside of a referenced element
 * @param {Function} callback - Function to call when clicking outside
 * @param {boolean} isActive - Whether the hook should be active (e.g., when modal is open)
 * @returns {React.RefObject} ref - Reference to attach to the element you want to detect clicks outside of
 */
const useClickOutside = (callback: Function, isActive = true) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        callback();
      }
    };

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, isActive]);

  return ref;
};

export default useClickOutside;
