/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";
//導入圖片
import mobileFrame from "../assets/detail/mobile_frame.webp";
import pcFrame from "../assets/detail/pc_frame.webp";

function Details() {
  const { id } = useParams();
  const data = projectsData[id];

  // 1. 取得web專案 ID 的陣列
  const webProjectIds = Object.keys(projectsData).filter(
    (key) => projectsData[key].type === "web",
  );
  // 2. 找到目前專案在陣列中的位置
  const currentIndex = webProjectIds.indexOf(id);

  // 3. 計算上一個與下一個專案的 ID
  // 使用迴圈邏輯 (如果到最後一個就跳回第一個，或是直接隱藏按鈕)
  const prevId = webProjectIds[currentIndex - 1];
  const nextId = webProjectIds[currentIndex + 1];

  // 動態獲取圖片的函數
  const getImageUrl = (name) => {
    return new URL(`../assets/detail/${name}`, import.meta.url).href;
  };

  const fadeInVariant = {
    initial: { opacity: 0, y: 30 }, // 初始狀態：透明且下方 30px
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeIn" },
    },
  };

  const getFileType = (file) => {
    return file.split(".").pop();
  };

  if (!data) return <div>專案載入中或不存在...</div>;
  return (
    <div className="detailWrap">
      <div className="imgStart">
        <img src={getImageUrl(data.imgStartName)} alt="首圖"/>
      </div>
      {/* 介紹區1 */}
      {data.mainImgName ? (
        <motion.section
          className="section sectionL"
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariant}
        >
          <div className="mobile">
            <div className="img">
              {getFileType(data.mainImgName) === "mp4" ||
              getFileType(data.mainImgName) === "webm" ? (
                <video autoPlay loop muted playsInline webkit-playsinline="true">
                  <source
                    src={getImageUrl(data.mainImgName)}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <img src={getImageUrl(data.mainImgName)} alt="介紹圖"/>
              )}
            </div>
            <div className="frame">
              <img src={mobileFrame} alt="手機框"/>
            </div>
          </div>

          <div className="text">
            <div className="titleWrap">
              <div className="title">{data.mainTitle}</div>
              <div className="time">{data.time}</div>
            </div>
            <div className="content">
              <p>{data.mainContent}</p>
            </div>
          </div>
        </motion.section>
      ) : (
        <></>
      )}
      {/* 介紹區2 */}
      {data.subImgName ? (
        <motion.section
          className="section sectionR"
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariant}
        >
          <div className="text">
            <div className="title">{data.subTitle}</div>
            <div className="content">
              <p>{data.subContent}</p>
            </div>
          </div>
          <div className="mobile">
            <div className="img">
              {getFileType(data.subImgName) === "mp4" ||
              getFileType(data.subImgName) === "webm" ? (
                <video autoPlay loop muted playsInline webkit-playsinline="true">
                  <source src={getImageUrl(data.subImgName)} type="video/mp4" />
                </video>
              ) : (
                <img src={getImageUrl(data.subImgName)} alt="介紹圖"/>
              )}
            </div>
            <div className="frame">
              <img src={mobileFrame} alt="手機框"/>
            </div>
          </div>
        </motion.section>
      ) : (
        <></>
      )}
      {/* 電腦介紹區 */}
      {data.PcImgName ? (
        <motion.section
          className="section"
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariant}
        >
          <div className="text">
            <div className="title">{data.subTitle}</div>
            <div className="content">
              <p>{data.subContent}</p>
            </div>
          </div>
          <div className="pc">
            <div className="img">
              {getFileType(data.PcImgName) === "mp4" ||
              getFileType(data.PcImgName) === "webm" ? (
                <video autoPlay loop muted playsInline webkit-playsinline="true">
                  <source src={getImageUrl(data.PcImgName)} type="video/mp4" />
                </video>
              ) : (
                <img src={getImageUrl(data.PcImgName)} alt="介紹圖"/>
              )}
            </div>
            <div className="frame">
              <img src={pcFrame} alt="電腦框"/>
            </div>
          </div>
        </motion.section>
      ) : (
        <></>
      )}

      {/* 結尾圖 */}
      {data.imgEndName ? (
        <div className="imgEnd">
          <img src={getImageUrl(data.imgEndName)} alt="結尾圖"/>
        </div>
      ) : (
        <></>
      )}

      <div className="btnWrap">
        <div className="controlBtn">
          {/* PREV按鈕 */}
          <Link
            to={`/project/${prevId}`}
            className={`prev ${prevId ? "" : "disabled"}`}
          >
            <svg id="arrow_L" viewBox="0 0 447.73 499.93">
              <path d="M425.85,287.62L65.05,494.07c-34.99,20-76.08-14.53-62.33-52.41l69.28-191.68L2.72,58.29C-11.03,20.32,30.06-14.12,65.05,5.87l360.8,206.45c29.21,16.64,29.14,58.66,0,75.3Z" />
            </svg>
            <div>PREV</div>
          </Link>
          <div className="divider">|</div>
          {/* NEXT按鈕 */}
          <Link
            to={`/project/${nextId}`}
            className={`next ${nextId ? "" : "disabled"}`}
          >
            <div>NEXT</div>
            <svg id="arrow_R" viewBox="0 0 447.73 499.93">
              <path d="M425.85,287.62L65.05,494.07c-34.99,20-76.08-14.53-62.33-52.41l69.28-191.68L2.72,58.29C-11.03,20.32,30.06-14.12,65.05,5.87l360.8,206.45c29.21,16.64,29.14,58.66,0,75.3Z" />
            </svg>
          </Link>
        </div>
        <div className="links">
          <Link to={`/works`}>
            <div className="back btn">回作品集總覽</div>
          </Link>
          <a href={data.link} target="_blank">
            <div className="cta btn">前往網站</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Details;
