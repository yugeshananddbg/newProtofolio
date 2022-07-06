import React from "react";
import { motion } from "framer-motion";
import { images } from "../../Constants";
import "./Header.scss";
import About from "../About/About";
import { Link } from "react-router-dom";
import Time from "../Timeline/Time"

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = ({user}) => (
  <>
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">{user.name}</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">MERN stack Developer</p>
            <p className="p-text">Web developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.4 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" className="profileimg" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
        <Link to="/work" className="butn">
          <p>View My work</p>
        </Link>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.javascript, images.react, images.html].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  
    <About user={user}/>
   
  </>
);

export default Header;
