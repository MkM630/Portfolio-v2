// ProjectSection.js
import React from 'react';
import './Project.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

const Project = () => {
  const projects = [
    {
      title: 'Trusto_E_learning_Page',
      description: 'Used: HTML, CSS, JavaScript',
      imageUrl: image1,
      githubLink: 'https://github.com/MkM630/Trusto_E_learning_Page'
    },
    {
      title: 'Find Mole',
      description: 'Used: HTML, CSS, JavaScript,Css animation',
      imageUrl: image2,
      githubLink: 'https://github.com/MkM630/Find_the_mole'
    },
    {
      title: 'Liquid stock market',
      description: 'Used: HTML, CSS,Tailwind, JavaScript',
      imageUrl: image3,
      githubLink: 'https://github.com/MkM630/Liquid_StockMarket_AnalyzePage'
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
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/MkM630"
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
