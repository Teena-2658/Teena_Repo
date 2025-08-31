import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import profileImg from "../assets/Teena.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
         <div className="image-section">
                  <img src={profileImg} alt="Teena" className="profile-img" />
                </div>
                Teena's Portfolio</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
