import { Typography } from "@mui/material";
import React from "react";
import { images } from "../../Constants";
import "./About.scss";
import { motion } from 'framer-motion';

const Me = ({about}) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>
        <motion.p
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 1}}
        > {about.quote}</motion.p>
         
        </Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src={about.avatar.url}
            alt="Yugesh Anand"
            className="aboutAvatar"
          />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            {about.name}
          </Typography>

          <Typography>{about.title}</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            {about.subtitle}
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            {about.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Me;
