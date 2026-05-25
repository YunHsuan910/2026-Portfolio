import React, { useState, useEffect } from "react";

//導入元件
import Project from "../components/Project";
import Waterfall from "../components/Waterfall";
import LightBox from "../components/LightBox";
//導入資料
import projectsData from "../data/projects.json";

function Works() {
  const getPreviewImageUrl = (name) => {
    return new URL(`../assets/${name}`, import.meta.url).href;
  };

  useEffect(() => {
    // 篩選出所有需要預載的非 web 圖片名稱
    const nonWebProjects = Object.keys(projectsData)
      .map((id) => projectsData[id])
      .filter((project) => project.type !== "web");

    // 迴圈建立圖片物件，迫使瀏覽器在背景先行下載並緩存
    nonWebProjects.forEach((project) => {
      if (project.previewSrc) {
        const img = new Image();
        img.src = getPreviewImageUrl(project.previewSrc);
      }
    });
  }, []);

  // 專案燈箱的開關，預設為關
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    imgSrc: "",
    title: "",
    projectUrl: "",
  });

  // 定義當前選中的類別狀態，預設為 'web' (網頁)
  const [activeType, setActiveType] = useState("web");

  // 將 JSON 物件轉換為包含 ID 的陣列，方便使用 filter 和 map
  const projectsArray = Object.keys(projectsData).map((id) => ({
    id,
    ...projectsData[id],
  }));
  // 根據選中的類別篩選專案
  const filteredProjects = projectsArray.filter(
    (project) => project.type === activeType,
  );

  // 開啟燈箱
  const openLightbox = (imgName, projectTitle, projectUrl) => {
    setLightbox({
      isOpen: true,
      imgSrc: getPreviewImageUrl(imgName), // 使用你原本匯入圖片的函式
      title: projectTitle,
      url: projectUrl,
    });
    document.body.style.overflow = "hidden";
  };
  // 關閉燈箱
  const closeLightbox = () => {
    setLightbox({ isOpen: false, imgSrc: "", title: "" });
    document.body.style.overflow = "auto";
  };

  return (
    <div className="container works">
      <div className="subNav">
        <li
          className={`navItem ${activeType === "web" ? "active" : ""}`}
          onClick={() => setActiveType("web")}
        >
          {activeType === "web" && (
            <svg
              id="flower"
              data-name="flower"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 49.12 49.12"
            >
              <path d="M37.75,11.37c-.96-6.43-6.49-11.37-13.19-11.37s-12.23,4.94-13.19,11.37C4.94,12.33,0,17.86,0,24.56s4.94,12.23,11.37,13.19c.96,6.43,6.49,11.37,13.19,11.37s12.23-4.94,13.19-11.37c6.43-.96,11.37-6.49,11.37-13.19s-4.94-12.23-11.37-13.19ZM24.56,30.61c-3.34,0-6.05-2.71-6.05-6.05s2.71-6.05,6.05-6.05,6.05,2.71,6.05,6.05-2.71,6.05-6.05,6.05Z" />
            </svg>
          )}
          網頁
        </li>
        <li
          className={`navItem ${activeType === "ec" ? "active" : ""}`}
          onClick={() => setActiveType("ec")}
        >
          {activeType === "ec" && (
            <svg
              id="flower"
              data-name="flower"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 49.12 49.12"
            >
              <path d="M37.75,11.37c-.96-6.43-6.49-11.37-13.19-11.37s-12.23,4.94-13.19,11.37C4.94,12.33,0,17.86,0,24.56s4.94,12.23,11.37,13.19c.96,6.43,6.49,11.37,13.19,11.37s12.23-4.94,13.19-11.37c6.43-.96,11.37-6.49,11.37-13.19s-4.94-12.23-11.37-13.19ZM24.56,30.61c-3.34,0-6.05-2.71-6.05-6.05s2.71-6.05,6.05-6.05,6.05,2.71,6.05,6.05-2.71,6.05-6.05,6.05Z" />
            </svg>
          )}
          電商活動頁
        </li>
        <li
          className={`navItem ${activeType === "banner" ? "active" : ""}`}
          onClick={() => setActiveType("banner")}
        >
          {activeType === "banner" && (
            <svg
              id="flower"
              data-name="flower"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 49.12 49.12"
            >
              <path d="M37.75,11.37c-.96-6.43-6.49-11.37-13.19-11.37s-12.23,4.94-13.19,11.37C4.94,12.33,0,17.86,0,24.56s4.94,12.23,11.37,13.19c.96,6.43,6.49,11.37,13.19,11.37s12.23-4.94,13.19-11.37c6.43-.96,11.37-6.49,11.37-13.19s-4.94-12.23-11.37-13.19ZM24.56,30.61c-3.34,0-6.05-2.71-6.05-6.05s2.71-6.05,6.05-6.05,6.05,2.71,6.05,6.05-2.71,6.05-6.05,6.05Z" />
            </svg>
          )}
          廣告橫幅
        </li>
        <li
          className={`navItem ${activeType === "other" ? "active" : ""}`}
          onClick={() => setActiveType("other")}
        >
          {activeType === "other" && (
            <svg
              id="flower"
              data-name="flower"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 49.12 49.12"
            >
              <path d="M37.75,11.37c-.96-6.43-6.49-11.37-13.19-11.37s-12.23,4.94-13.19,11.37C4.94,12.33,0,17.86,0,24.56s4.94,12.23,11.37,13.19c.96,6.43,6.49,11.37,13.19,11.37s12.23-4.94,13.19-11.37c6.43-.96,11.37-6.49,11.37-13.19s-4.94-12.23-11.37-13.19ZM24.56,30.61c-3.34,0-6.05-2.71-6.05-6.05s2.71-6.05,6.05-6.05,6.05,2.71,6.05,6.05-2.71,6.05-6.05,6.05Z" />
            </svg>
          )}
          其他
        </li>
      </div>
      <div className={activeType === "web" ? "worksWrap" : "waterfallWrap"}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) =>
            activeType === "web" ? (
              <Project
                key={project.id}
                id={project.id}
                title={project.mainTitle}
                description={project.description}
                previewSrc={getPreviewImageUrl(project.previewSrc)}
              />
            ) : (
              <Waterfall
                key={project.id}
                id={project.id}
                project={project}
                openLightbox={openLightbox}
                getPreviewImageUrl={getPreviewImageUrl}
              />
            ),
          )
        ) : (
          <div className="noProject">
            <p>作品整理中，敬請期待！</p>
          </div>
        )}

        {lightbox.isOpen && (
          <LightBox closeLightbox={closeLightbox} lightbox={lightbox} />
        )}
      </div>
    </div>
  );
}

export default Works;
