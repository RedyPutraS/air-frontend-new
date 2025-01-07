import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function useScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const isScroll = isScrolled || id || open;

  const navbarStyle = {
    boxShadow: isScrolled ? "0 2px 10px 0px rgba(0,0,0,.1)" : "none",
    backgroundColor: isScroll ? "#fff" : "transparent",
    logoImageNavbar: isScroll ?  "AncoraLogoDark.png" :"AncoraLogoLight.png",
  };

  const logoStyle = {
    color1: isScroll ? "#2A5C7B" : "#fff",
    color2: isScroll ? "orange" : "#fff",
  };

  useEffect(() => {
    if (process.browser) {
      const handleScroll = () => {
        if (window.pageYOffset > 3) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // Empty dependency array to ensure the effect runs only once

  return {
    isScrolled: isScroll,
    navbarStyle,
    logoStyle,
    open,
    setOpen,
  };
}

export default useScrolled;
