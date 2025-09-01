import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = ({ title, description, techStack, github, demo, image }) => {
  return (
    <div className="project-card">
      {image && <img src={image} alt={title} className="project-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {github && (
          <a href={github} target="_blank" rel="noreferrer" className="btn-link">
            GitHub
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="btn-link">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
