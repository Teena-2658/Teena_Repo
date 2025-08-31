import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = ({ title, description, techStack, github, demo }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer" className="btn-link">
          GitHub
        </a>
        <a href={demo} target="_blank" rel="noreferrer" className="btn-link">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
