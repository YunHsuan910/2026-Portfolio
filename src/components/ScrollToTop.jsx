import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  // 取得目前的路由路徑
  const { pathname } = useLocation();

  useEffect(() => {
    // 當路徑改變時，將視窗捲動到最上方
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // 平滑滾動效果
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
