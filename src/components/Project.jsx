function Project ({ image, title, deployedLink, gitHubLink}) {
    return (
        <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">View App</a>
      <a href={gitHubLink} target="_blank" rel="noopener noreferrer">View Code</a>
    </div>
    );
}

export default Project; 