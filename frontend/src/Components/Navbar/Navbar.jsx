import React, { useState } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../Constants";
import { Link } from "react-router-dom";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import TerminalIcon from '@mui/icons-material/Terminal';
import EmailIcon from '@mui/icons-material/Email';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
      

        <li className=" app__flex p-text" >
            <div />
            <Link to="/">  <HomeIcon/> <h1>Home</h1></Link>
          </li>
          <li className=" app__flex p-text" >
            <div />
            <Link to="/about"><PersonIcon/><h1>About</h1></Link>
          </li>
          <li className=" app__flex p-text" >
            <div />
            <Link to="/work"><TerminalIcon/><h1>Projects</h1></Link>
          </li>
          <li className=" app__flex p-text" >
            <div />
            <Link to="/contact"><EmailIcon/><h1>Contact</h1></Link>
          </li>
          <li className=" app__flex p-text" >
            <div />
            <Link to="/Account"><VpnKeyIcon/><h1>Login</h1></Link>
          </li>






      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
             
              <li>
              <Link to="/" onClick={()=>setToggle(false)}><HomeIcon/>Home</Link>
              </li>
              <li>
              <Link to="/about" onClick={()=>setToggle(false)}><PersonIcon/>About</Link>
              </li>
              <li>
              <Link to="/work" onClick={()=>setToggle(false)}><TerminalIcon/>Projects</Link>
              </li>
              <li>
              <Link to="/contact" onClick={()=>setToggle(false)}><EmailIcon/>Contact</Link>
              </li>
              <li>
              <Link to="/Account" onClick={()=>setToggle(false)}><VpnKeyIcon/>Login</Link>
              </li>



            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
