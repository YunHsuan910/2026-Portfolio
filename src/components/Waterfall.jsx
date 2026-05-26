import React from "react";

function Waterfall({ project, openLightbox, getPreviewImageUrl }) {
  return (
    <div
      className="item"
      onClick={() =>
        openLightbox(project.mainSrc, project.mainTitle, project.projectUrl)
      }
    >
      <img
        src={getPreviewImageUrl(project.previewSrc)}
        alt={project.mainTitle}
        loading="lazy"
      />
      <div className="info">
        <span>{project.mainTitle}</span>
        <svg
          className="icon"
          id="options"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 426.67 85.33"
        >
          <circle cx="213.33" cy="42.67" r="42.67" />
          <circle cx="42.67" cy="42.67" r="42.67" />
          <circle cx="384" cy="42.67" r="42.67" />
        </svg>
      </div>
    </div>
  );
}

export default Waterfall;
