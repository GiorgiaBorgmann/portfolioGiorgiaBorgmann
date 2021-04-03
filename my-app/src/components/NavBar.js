import React from "react";
import "../style/NavBar.scss";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="nav-bar-container">
      <Link to='/'>ABOUT</Link>
      <Link to='/projects'>PROJECTS</Link>
      <Link to='/contact'>CONTACT</Link>
    </div>
  );
}
