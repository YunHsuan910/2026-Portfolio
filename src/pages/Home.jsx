import React from "react";
import { Link } from "react-router-dom";
//導入圖片
import kv from "../assets/kv.gif";
import icon_1 from "../assets/category_icon_1.png";
import icon_2 from "../assets/category_icon_2.png";
import preview_1 from "../assets/category_preview_1.png";
import preview_2 from "../assets/category_preview_2.png";

//導入元件
import Category from "../components/Category";

function Home() {
  return (
    <div className="container">
      <div className="kv">
        <img src={kv} alt="主視覺 鴨子在泳池旋轉" />
      </div>
      <div className="headline">
        <div className="title">近期作品</div>
        <div className="subtitle">RECENT</div>
      </div>
      <div className="categories">
        <Category
          id="kintsugi"
          iconSrc={icon_1}
          imgSrc={preview_1}
          title={"金繕回憶館"}
          content={`使用AI辨識文字或圖片，產生療癒人心的音樂，技術上串接了 Lyria RealTime 及 Gemini 3 的api`}
        />
        <Category
          id="catBar"
          iconSrc={icon_2}
          imgSrc={preview_2}
          title={"網頁產生器"}
          content={`利用模板快速產生網頁，可直接預覽RWD 效果，並一鍵打包下載組合好的網頁`}
        />
      </div>
    </div>
  );
}

export default Home;
