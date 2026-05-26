/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Project({ id, title, description, previewSrc }) {
  const fadeInVariant = {
    initial: { opacity: 0, y: 10 }, // 初始狀態：透明且下方 30px
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeIn" },
    },
  };
  return (
    <Link to={`/project/${id}`}>
      <motion.div
        className="project"
        initial="initial"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInVariant}
      >
        <div className="headline">
          <div className="title">{title}</div>
          <p className="description">{description}</p>
        </div>
        <div className="btnWrap">
          <div className="btn">更多詳情</div>
        </div>
        <div className="imgWrap">
          <img src={previewSrc} alt="預覽圖" />
        </div>
      </motion.div>
    </Link>
  );
}

export default Project;
