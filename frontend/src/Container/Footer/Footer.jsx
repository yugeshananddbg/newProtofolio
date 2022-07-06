import React from "react";
import { BsLinkedin, BsYoutube, BsGithub, BsInstagram } from "react-icons/bs";

import { motion } from "framer-motion";

import "./Footer.scss";
const SocialMedia = () => (
  <motion.div
    whileInView={{ x: [-200, 0], opacity: [0, 1] }}
    transition={{ duration: 2, delayChildren: 0.4 }}
    className="app__social"
  >
    <a href="https://github.com/yugeshananddbg/" target="black">
      <div>
        <BsGithub />
      </div>
    </a>
    <a
      href="https://www.youtube.com/channel/UCRABuCnfdZzYBJnmAzxmPZg"
      target="black"
    >
      <div>
        <BsYoutube />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/yugeshanand/" target="black">
      <div>
        <BsLinkedin />
      </div>
    </a>
    <a href="https://www.instagram.com/yugeshanand/" target="black">
      <div>
        <BsInstagram />
      </div>
    </a>
  </motion.div>
);

export default SocialMedia;
