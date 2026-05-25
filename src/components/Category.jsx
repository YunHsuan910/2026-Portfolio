import React from "react";
import { Link } from "react-router-dom";

function Category({ iconSrc, imgSrc, title, content, id }) {
  return (
    <Link className="category" to={`/project/${id}`}>
      <div className="icon">
        <img src={iconSrc} alt="icon" />
      </div>
      <div className="card">
        <div className="picture">
          <img src={imgSrc} alt="作品預覽" />
        </div>
        <div className="intro">
          <div className="title">{title}</div>
          <p className="content">{content}</p>
        </div>
        <div className="btnWrap">
          <div className="btn">更多詳情</div>
        </div>
      </div>
    </Link>
  );
}

export default Category;
