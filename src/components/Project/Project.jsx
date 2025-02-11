// ProjectSection.js
import React from 'react';
import './Project.css';

const Project = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <section className="project-section">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="see-more-button"
      >
        See More on GitHub
      </a>
    </section>
  );
};

export default Project;
