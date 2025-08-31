import React from "react";
import "../styles/About.css"; // External CSS file

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Title */}
        <h2 className="section-title">About Me</h2>

        {/* Intro Text */}
        <p className="intro-text">
          Motivated and enthusiastic final-year <b>B.Tech (CSE)</b> student with a
          strong foundation in programming and full-stack development. Passionate
          about creating efficient and scalable web applications using modern
          technologies. Eager to contribute to team success through hard work and
          continuous learning.
        </p>

        {/* Skills Section */}
        <h3 className="sub-title">Technical Skills</h3>
        <div className="skills-grid">
          {[
            "C",
            "C++",
            "JavaScript",
            "HTML",
            "CSS",
            "React.js",
            "Node.js",
            "MongoDB",
            "SQL",
            "Git",
            "Postman",
            "VS Code",
            "DSA",
          ].map((skill, index) => (
            <span key={index} className="skill-box">
              {skill}
            </span>
          ))}
        </div>

        {/* Education Section */}
        <h3 className="sub-title">Education</h3>
        <div className="timeline">
          <div className="timeline-item">
            <h4>B.Tech (CSE)</h4>
            <p>Swami Vivekanand Group of Institutions, Indore (2022–2026)</p>
            <p>CGPA: 7.57</p>
          </div>
          <div className="timeline-item">
            <h4>Senior Secondary (Class 12th)</h4>
            <p>Priyadarshini HSS, Khargone, MP (2022)</p>
            <p>91.20%</p>
          </div>
          <div className="timeline-item">
            <h4>Secondary (Class 10th)</h4>
            <p>Priyadarshini HSS, Khargone, MP (2020)</p>
            <p>91.25%</p>
          </div>
        </div>

        {/* Certifications Section */}
        <h3 className="sub-title">Certifications</h3>
        <ul className="certifications">
          <li>C Programming – Programming World, Indore</li>
          <li>C++ Programming – Programming World, Indore</li>
          <li>Data Structures and Algorithms</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
