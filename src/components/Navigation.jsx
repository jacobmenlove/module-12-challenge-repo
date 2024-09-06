import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
        <ul>
          <li><Link to="/about" className="btn btn-primary">About Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
    );
}

export default Navigation; 
