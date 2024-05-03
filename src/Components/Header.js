import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import './header.css';
import DarkMode from './DarkMode/DarkMode.js';

const Header = () => {
  const location = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');
  const [showHeaderDiv, setShowHeaderDiv] = useState(true);

  const handleChange = (event) => {
    const selectedLang = event.target.value;
    setSelectedLanguage(selectedLang);
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem('selectedLanguage', selectedLanguage);
    setShowHeaderDiv(location.pathname === '/');
    // προσθεσε αυτο να θεσ να εμφανιστει και σε αλλα:  || location.pathname === '/contact');
  }, [selectedLanguage, location]);

  return (
    <div className="header">
      <div className="left-item">
          <Link to="/" className="tolink">
              <p><strong>Klajdi Cami</strong></p>
          </Link>
      </div>
      {showHeaderDiv && (
        <div className="right-item">
            <select className="form-select" id="languages" name="languages" value={selectedLanguage} onChange={handleChange}>
                <option value="en">English</option>
                <option value="gr">Greek</option>
                <option value="ge">German</option>
            </select>
        </div>
      )}
      <DarkMode />
    </div>
  );
}

export default Header;
