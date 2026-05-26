import React, { useState } from "react";
import styles from "../styles/ProgressiveLightboxImage.module.css";

export const ProgressiveLightboxImage = ({
  lowResSrc,
  highResSrcset,
  fallbackSrc,
  alt,
}) => {
  // 元件每次因為 key 改變而重新誕生時，這裡自然而然就是 false，完美重置！
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);

  return (
    <>
      {/* 1. 霧面模糊低畫質圖 (0秒立刻現身) */}
      <img
        src={lowResSrc}
        alt={alt}
        className={`${styles.lowRes} ${isHighResLoaded ? styles.fadeOut : ""}`}
      />

      {/* 2. 高畫質響應式大圖 (在背後靜默加載) */}
      <img
        src={fallbackSrc}
        aria-hidden={!isHighResLoaded}
        srcSet={highResSrcset}
        sizes="(max-width: 768px) 95vw, 80vw"
        alt={alt}
        onLoad={() => setIsHighResLoaded(true)}
        className={` ${styles.highRes} ${isHighResLoaded ? styles.fadeIn : ""}`}
      />
    </>
  );
};
