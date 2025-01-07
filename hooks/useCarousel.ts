import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function useCarousel(slides: any) {
  let [current, setCurrent] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  useEffect(() => {
    if (!id) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [current]);

  return { current, setCurrent };
}

export default useCarousel;
