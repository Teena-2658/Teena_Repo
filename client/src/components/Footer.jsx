import React from "react";
import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Teena | All Rights Reserved</p>
      <div className="footer-social">
        <a href="https://github.com/Teena-2658" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/teena-devray-3a6078276/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
