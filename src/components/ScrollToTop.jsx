import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function ScrollToTop() {
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
}

export default ScrollToTop;
