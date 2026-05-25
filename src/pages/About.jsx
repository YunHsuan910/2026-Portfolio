import React from "react";
//導入圖片
import photo from "../assets/photo.png";

//導入元件
import Company from "../components/Company";

function About() {
  return (
    <div className="container about">
      <div className="aboutWrap">
        <div className="sid">
          <div className="photoWrap">
            <div className="photo">
              <img src={photo} alt="個人照片" />
            </div>
            <div className="name">
              <p>蔡昀軒</p>
              <span>Corrie Tsai</span>
            </div>
          </div>
          <div className="textWrap">
            <section className="section">
              <div className="title">學歷</div>
              <p className="content">國立臺北教育大學 數位科技設計系</p>
              <span className="comment">2016 —— 2020</span>
            </section>
            <section className="section">
              <div className="title">專長與技能</div>
              <p className="content">
                擁有5年網頁設計資歷，兼具精準視覺美感與嚴謹工程邏輯。
                <br />
                在學期間曾赴英國、韓國短期研修，擅長跨領域溝通，致力於開發美學與質量並重的數位產品。
              </p>
              <span className="comment">
                Html / SCSS / JS / React / Bootstrap / JQuery / RWD web /
                Photoshop / Illustrator
              </span>
            </section>
          </div>
        </div>
        <div className="experience">
          <Company
            time="2019 —— 2020"
            name="藝淇數位設計有限公司"
            jobTitle="網頁設計助理"
            description="設計banner | 繪製遊戲物件 | 政府活動網頁設計及切版"
          />
          <Company
            time="2020 —— 2021"
            name="台灣特思爾大宇宙股份有限公司"
            jobTitle="網頁設計師"
            description="設計EDM及banner | 協助維護網站 | 日系服裝網頁設計及切版"
          />
          <Company
            time="2021 —— 2023"
            name="東森得易購股份有限公司"
            jobTitle="網頁設計師"
            description="設計簡易促銷遊戲專案介面、banner、商說圖 | 電商網頁設計及切版"
          />
          <Company
            time="2023 —— 2025"
            name="台盈資訊科技有限公司"
            jobTitle="網頁設計師"
            description="設計遊戲專案介面、活動頁、banner | 遊戲網頁設計及切版"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
