import { Link, useLocation } from 'react-router-dom';
import './footer.css';
import profilePicture from '../assets/user12.png';
import projectsPicture from '../assets/planning.png';
import contactPicture from '../assets/send1.png';
import dapPicture from '../assets/astronomy.png';

const Footer = () => {
  const location = useLocation();

   return (
    <div className="footer">
      <Link to="/" className={`toa ${location.pathname === '/' ? 'active' : ''}`}>
        <div className="todiv">
          <img src={profilePicture} alt="" /><br/>
          <span>About me</span>
        </div>
      </Link>
      <Link to="/projects" className={`toa ${location.pathname === '/projects' ? 'active' : ''}`}>
        <div className="todiv">
          <img src={projectsPicture} alt="" /><br/>
          <span>Projects</span>
        </div>
      </Link>
      <Link to="/contact" className={`toa ${location.pathname === '/contact' ? 'active' : ''}`}>
        <div className="todiv">
          <img src={contactPicture} alt="" /><br/>
          <span>Contact</span>
        </div>
      </Link>
      <Link to="/dap" className={`toa ${location.pathname === '/dap' ? 'active' : ''}`}>
        <div className="todiv">
          <img src={dapPicture} alt="" /><br/>
          <span>DAP</span>
        </div>
      </Link>
    </div>
  );
}
 
export default Footer; 