import { Link } from 'react-router-dom';
import './footer.css';
import profilePicture from '../Assets/user12.png';
import projectsPicture from '../Assets/planning.png';
import contactPicture from '../Assets/send1.png';
import booksPicture from '../Assets/book.png';
import dapPicture from '../Assets/astronomy.png';

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/" className="toa">
        <div className="todiv">
          <img src={profilePicture} alt="" /><br/>
          <span>Profile</span>
        </div>
      </Link>
      <Link to="/projects" className="toa">
        <div className="todiv">
          <img src={projectsPicture} alt="" /><br/>
          <span >Projects</span>
        </div>
      </Link>
      <Link to="/contact" className="toa">
        <div className="todiv">
          <img src={contactPicture} alt="" /><br/>
          <span>Contact</span>
        </div>
      </Link>
      <Link to="/books" className="toa">
        <div className="todiv">
          <img src={booksPicture} alt="" /><br/>
          <span>Books</span>
        </div>
      </Link>
      <Link to="/dap" className="toa">
        <div className="todiv">
          <img src={dapPicture} alt="" /><br/>
          <span>DAP</span>
        </div>
      </Link>
    </div>
  );
}
 
export default Footer; 