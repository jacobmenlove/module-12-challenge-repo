import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      image: 'path-to-project1.jpg',
      title: 'Project 1',
      deployedLink: 'http://example.com',
      githubLink: 'http://github.com/yourusername/project1'
    },
    
  ];

  return (
    <section id="portfolio">
      {projects.map((project, index) => (
        <Project
          key={index}
          image={project.image}
          title={project.title}
          deployedLink={project.deployedLink}
          githubLink={project.githubLink}
        />
      ))}
    </section>
  );
}

export default Portfolio;
