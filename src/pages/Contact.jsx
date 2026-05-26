import React from "react";
//導入圖片
import hero from "../assets/contact_hero.webp";
import shadow from "../assets/shadow.webp";
import file from "../assets/file.webp";
import flower_l from "../assets/flower_l.webp";
import flower_r from "../assets/flower_r.webp";
import cloud from "../assets/cloud.webp";
import li from "../assets/li.webp";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function Contact() {
  return (
    <div className="container contact">
      <div className="kv">
        <div className="shadow">
          <img src={shadow} alt="陰影" />
        </div>
        <div className="ani cloudL">
          <img src={cloud} alt="雲" />
        </div>
        <div className="ani cloudR">
          <img src={cloud} alt="雲" />
        </div>
        <div className="hero">
          <img className="character" src={hero} alt="鴨子打電話" />
          <div className="ani shiny1">
            <img src={li} alt="閃亮" />
          </div>
          <div className="ani shiny2">
            <img src={li} alt="閃亮" />
          </div>
          <div className="ani shiny3">
            <img src={li} alt="閃亮" />
          </div>
        </div>
        <div className="ani file">
          <img src={file} alt="文件" />
        </div>

        <div className="ani flowerL">
          <img src={flower_l} alt="花" />
        </div>
        <div className="ani flowerR">
          <img src={flower_r} alt="花" />
        </div>
      </div>

      <div className="contactWrap">
        <div className="headline">
          <div className="title">聯絡資訊</div>
          <div className="subtitle">CONTACT</div>
        </div>
        <div className="content">
          <div className="info">
            <span className="title">Email：</span>
            <span>blue11437@gmail.com</span>
          </div>
          <div className="info">
            <span className="title">簡歷連結：</span>
            <span>
              <a
                href={`${basePath}/resume.pdf`}
                download="蔡昀軒_履歷.pdf"
              >
                點我下載
              </a>
            </span>
          </div>
          <div className="info">
            <span className="title">聯絡時間： </span>
            <span>週一至週五 上午9:00-晚上9:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
