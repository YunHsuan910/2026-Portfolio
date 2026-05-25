import React from "react";
//導入圖片
import hero_1 from "../assets/skill_hero_1.png";
import hero_2 from "../assets/skill_hero_2.png";
import hero_ani_1 from "../assets/skill_ani_1.png";
import hero_ani_2 from "../assets/skill_ani_2.png";
import hero_ani_3 from "../assets/skill_ani_3.png";

//導入元件
import Tech from "../components/Tech";

function Skills() {
  return (
    <div className="container skills">
      <div className="skillWrap">
        <section className="skill imgL">
          <div className="picture">
            <div className="hero">
              <img src={hero_1} alt="鴨子拿鋼筆" />
            </div>
            <div className="ani">
              <img src={hero_ani_1} alt="環繞裝飾" />
            </div>
          </div>
          <div className="textWrap">
            <div className="headline">
              <div className="title">design</div>
            </div>
            <div className="content">
              <Tech techTitle="平面設計" techList="PS/ AI" />
              <Tech
                techTitle="網頁設計"
                techList="VS code / Figma / Sketch / DreamWaver"
              />
              <Tech techTitle="3d設計" techList="3ds Max / 123D" />
              <Tech
                techTitle="AI工具"
                techList="ComfyUI / Midjourney / Stable Diffusion / 其他線上生成圖片工具"
              />
            </div>
          </div>
        </section>
        <section className="skill imgR">
          <div className="picture">
            <div className="hero">
              <img src={hero_2} alt="鴨子打電腦" />
            </div>
            <div className="ani ani1">
              <img src={hero_ani_2} alt="環繞裝飾" />
            </div>
            <div className="ani ani2">
              <img src={hero_ani_3} alt="環繞裝飾" />
            </div>
          </div>
          <div className="textWrap">
            <div className="headline">
              <div className="title">frontend</div>
            </div>
            <div className="content">
              <Tech
                techTitle="前端"
                techList="HTML / CSS / SCSS / JS / REACT"
              />
              <Tech
                techTitle="套件模板"
                techList="Bootstrap / JQuery / Swiper / Motion /  Animate.css"
              />
              <Tech
                techTitle="API串接經驗"
                techList="Gemini 3 Flash / Lyria RealTime"
              />
              <Tech techTitle="AI工具" techList="Google AI Studio / Cursor" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Skills;
