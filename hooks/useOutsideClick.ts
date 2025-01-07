import React from "react";

interface Props {
  ref: any;
  setIsOpen: any;
}

function useOutsideClick({ ref, setIsOpen }: Props) {
  const handleOutsideClick = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
}

export default useOutsideClick;
