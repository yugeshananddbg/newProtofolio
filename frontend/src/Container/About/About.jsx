import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../Constants";
import Time from "../Timeline/Time";

const abouts = [
  {
    title: "Web Development",
    description: "I am good in web development",
    imgUrl: images.web,
  },
  {
    title: "MERN Stack Development",
    description: "I am currently working with MERN stack",
    imgUrl: images.mern,
  },
  {
    title: "Python Programing",
    description: "I am good in python development",
    imgUrl: images.python,
  },
  {
    title: "UI/UX Development",
    description: "Willing to learn user friendly attractive and animated UI/UX",
    imgUrl: images.ui,
  },
];

const About = ({ user }) => {
  return (
    <>
      <h3 className="skill"> Skilled in </h3>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={about.title}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 20 }}>
              {about.title}
            </p>
          </motion.div>
        ))}
      </div>
      <h3 className="skill">Education</h3>
      <motion.div
        whileInView={{ opacity: 1 , x: [300, 0]}}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 2, type: "tween" }}
        className="time"
      >
        <Time timelines={user.timeline} />
      </motion.div>
    </>
  );
};

export default About;
