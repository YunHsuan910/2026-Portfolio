import React from "react";
import { Link } from "react-router-dom";

  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function LightBox({ lightbox, closeLightbox }) {
  return (
    <div className="lightboxOverlay" onClick={closeLightbox}>
      <div className="lightboxContent" onClick={(e) => e.stopPropagation()}>
        <button className="closeBtn" onClick={closeLightbox}>
          <svg
            id="closeBtn"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 215.47 215.47"
          >
            <path d="M212.27,197.33c4.27,4.27,4.27,10.67,0,14.93-2.13,2.13-5.33,3.2-7.47,3.2s-5.33-1.07-7.47-3.2l-89.6-89.6L18.13,212.27c-2.13,2.13-5.33,3.2-7.47,3.2s-5.33-1.07-7.47-3.2c-4.27-4.27-4.27-10.67,0-14.93l89.6-89.6L3.2,18.13C-1.07,13.87-1.07,7.47,3.2,3.2s10.67-4.27,14.93,0l89.6,89.6L197.33,3.2c4.27-4.27,10.67-4.27,14.93,0s4.27,10.67,0,14.93l-89.6,89.6,89.6,89.6Z" />
          </svg>
        </button>
        <div className="detail">
          <div className="img">
            <img src={lightbox.imgSrc} alt="放大預覽" loading="lazy"/>
          </div>
          <div className="infoWrap">
            <div className="title">{lightbox.title}</div>
            {lightbox.url && (
              <a href={`${basePath}${lightbox.url}`} key={lightbox.id} target="_blank">
                <div className="btn">查看活動頁</div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LightBox;
