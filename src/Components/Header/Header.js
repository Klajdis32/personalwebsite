import './header.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo.png";
import git from "../../Assets/github.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Αποτροπή scroll όταν το menu είναι ανοιχτό
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className={`headerOut ${menuOpen ? 'open' : ''}`}>
      <div className='headerOutmesa'>
        <Link to='/' className='toaristera' onClick={closeMenu}>
          <img src={logo} className='logoImg' alt="Logo" />
        </Link>

        <div className={`tadeksia ${menuOpen ? 'open' : ''}`}>
          <Link to='/'        className='tolinkdeks' onClick={closeMenu}>Blog</Link>
          <Link to='/about'   className='tolinkdeks' onClick={closeMenu}>About</Link>
          <Link to='/uni'     className='tolinkdeks' onClick={closeMenu}>Uni</Link>
          <Link to='/contact' className='tolinkdeks' onClick={closeMenu}>Contact</Link>
          <a
            href="https://github.com/Klajdis32"
            target="_blank"
            rel="noopener noreferrer"
            className="tolinkdeks"
            onClick={closeMenu}
          >
            <img src={git} alt="GitHub icon" className="headIcons" />
          </a>
        </div>

        <div className='burger' onClick={toggleMenu}>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;