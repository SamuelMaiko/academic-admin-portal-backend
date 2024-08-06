import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ scrollableRef }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollableRef && scrollableRef.current) {
      scrollableRef.current.scrollTo(0, 0);
    }
  }, [pathname, scrollableRef]);

  return null;
};

export default ScrollToTop;
