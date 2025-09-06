// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // or "instant" for immediate scroll
    });
  }, [location.pathname]); // Re-run effect when pathname changes

  return children;
};

export default ScrollToTop;