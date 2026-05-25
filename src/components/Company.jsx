/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
//導入圖片
import location from "../assets/location.png";

function Company({ time, name, jobTitle, description }) {
  const fadeInVariant = {
    initial: { opacity: 0, transform: "translateY(30px)" }, // 初始狀態：透明且下方 30px
    visible: {
      opacity: 1,
      transform: "translateY(0)",
      transition: { duration: 0.6, ease: "easeIn" },
    },
  };
  return (
    <div className="company">
      <div className="icon">
        <img src={location} alt="座標" />
      </div>
      <motion.div
        className="textWrap"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeInVariant}
      >
        <p className="time">{time}</p>
        <div className="titleWrap">
          <span className="name">{name}</span>
          <span className="jobTitle">{jobTitle}</span>
        </div>
        <span className="description">{description}</span>
      </motion.div>
    </div>
  );
}

export default Company;
