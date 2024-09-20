import { Link, useLocation } from 'react-router-dom';
import './footer.css';
import profilexroma from '../../assets/user.png';
import projectmexroma from '../../assets/projects.png';
import contactmexroma from '../../assets/send1.png';
import dapmexroma from '../../assets/dap.png';

const Footer = () => {
  const location = useLocation();

   return (
    <div className="footer">
      <Link to="/" className={`toa ${location.pathname === '/' ? 'active' : ''}`}>
        <div className="todiv">
          <img src={profilexroma} alt="Profile" /><br />
          <span>About me</span>
        </div>
      </Link>
      <Link to="/projects" className={`toa ${location.pathname === '/projects' ? 'active' : ''}`}>
        <div className="todiv">
        <img src={projectmexroma} alt="Profile" /><br />
          <span>Projects</span>
        </div>
      </Link>
      <Link to="/contact" className={`toa ${location.pathname === '/contact' ? 'active' : ''}`}>
        <div className="todiv">
        <img src={contactmexroma} alt="Profile" /><br />
          <span>Contact</span>
        </div>
      </Link>
      <Link to="/dap" className={`toa ${location.pathname === '/dap' ? 'active' : ''}`}>
        <div className="todiv">
        <img src={dapmexroma} alt="Profile" /><br />
          <span>DAP</span>
        </div>
      </Link>
    </div>
  );
}
 
export default Footer; 