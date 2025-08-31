import React from "react";
import profileImg from "../assets/Teena.jpg";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="home-container" id="home">
      <div className="home-content">
        {/* Left Side - Profile Image */}
        <div className="image-section">
          <img src={profileImg} alt="Teena" className="profile-img" />
        </div>

        {/* Right Side - Text Section */}
        <div className="text-section">
          <h1>
            Hi, I'm <span className="highlight">Teena</span> 👋
          </h1>
          <h2>
            Aspiring <span className="highlight">MERN Stack Developer</span>
          </h2>

          <p>
            I love building interactive and responsive web applications using{" "}
            <b>React, JavaScript, Node, HTML & CSS</b>. Currently, I am preparing for
            software engineering placements 🚀
          </p>

          {/* Resume Button */}
          <a
            href="/Teena_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View Resume
          </a>

          {/* Social Media Links */}
          <div className="social-links">
            <a
              href="https://github.com/Teena-2658"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/teena-devray-3a6078276/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
