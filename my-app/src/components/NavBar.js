import React from "react";
import "../style/NavBar.scss";
import { Link, animateScroll as scroll } from "react-scroll";
export default function NavBar() {
  return (
    <div className="nav-bar-container">
      <Link to="home" spy={true} smooth={true} offset={-60} duration={1000}>
        HOME
      </Link>
      <Link to="aboutMe" spy={true} smooth={true} offset={-60} duration={1000}>
        ABOUT ME
      </Link>
      <Link to="techSkills" spy={true} smooth={true} offset={-60}>
        TECH SKILLS
      </Link>
      <Link to="projects" spy={true} smooth={true} offset={-60}>
        PROJECTS
      </Link>
      <Link to="contact" spy={true} smooth={true} offset={-60}>
        CONTACT
      </Link>
    </div>
  );
}
