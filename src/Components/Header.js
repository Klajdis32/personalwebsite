import { Link } from "react-router-dom"
import './header.css';
import Lightmode from '../assets/sunny.png';
import Darkmode from '../assets/moon.png';

const Header = () => {
  return (
    <div className="header">
      <div className="left-item">
          <Link to="/" className="tolink">
              <p><strong>Klajdi Cami</strong></p>
          </Link>
      </div>
      <div className="right-item">
          <select className="form-select" id="languages" name="languages">
              <option value="en">English</option>
              <option value="gr">Greek</option>
              <option value="ge">German</option>
          </select>
      </div>
      <img src={Darkmode} alt="" className="mode" id="darkmode" />
      <img src={Lightmode} alt="" className="mode" id="lightmode" />
  </div>
  );
}

export default Header;
