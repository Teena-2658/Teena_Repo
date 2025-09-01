import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              github={project.github}
              demo={project.demo}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
