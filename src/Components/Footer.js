import { Link, useLocation } from 'react-router-dom';
import './footer.css';
import profilePicture from '../assets/userblack.png';
import projectsPicture from '../assets/projectblack.png';
import contactPicture from '../assets/sendblack.png';
import dapPicture from '../assets/dapblack.png';

import profilexroma from '../assets/user.png';
import projectmexroma from '../assets/projects.png';
import contactmexroma from '../assets/send1.png';
import dapmexroma from '../assets/dap.png';

const Footer = () => {
  const location = useLocation();
  const defaultProfilePicture = profilePicture;
  const alternateProfilePicture = profilexroma;

  const defaultprojectPicture = projectsPicture;
  const alternateprojectPicture = projectmexroma;

  const defaultcontactPicture = contactPicture;
  const alternatecontactPicture = contactmexroma;

  const defaultdapPicture = dapPicture;
  const alternatedapPicture = dapmexroma;
   return (
    <div className="footer">
      <Link to="/" className={`toa ${location.pathname === '/' ? 'active' : ''}`}>
        <div className="todiv">
          <img src={location.pathname === '/' ? alternateProfilePicture : defaultProfilePicture} alt="Profile" /><br />
          <span>About me</span>
        </div>
      </Link>
      <Link to="/projects" className={`toa ${location.pathname === '/projects' ? 'active' : ''}`}>
        <div className="todiv">
        <img src={location.pathname === '/projects' ? alternateprojectPicture : defaultprojectPicture} alt="Profile" /><br />
          <span>Projects</span>
        </div>
      </Link>
      <Link to="/contact" className={`toa ${location.pathname === '/contact' ? 'active' : ''}`}>
        <div className="todiv">
        <img src={location.pathname === '/contact' ? alternatecontactPicture : defaultcontactPicture} alt="Profile" /><br />
          <span>Contact</span>
        </div>
      </Link>
      <Link to="/dap" className={`toa ${location.pathname === '/dap' ? 'active' : ''}`}>
        <div className="todiv">
        <img src={location.pathname === '/dap' ? alternatedapPicture : defaultdapPicture} alt="Profile" /><br />
          <span>DAP</span>
        </div>
      </Link>
    </div>
  );
}
 
export default Footer; 