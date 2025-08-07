import './header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from "../../Assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // helper για να κλείνουμε το μενού
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`headerOut ${menuOpen ? 'open' : ''}`}>
      <div className='headerOutmesa'>
        <Link to='/' className='toaristera' onClick={closeMenu}>
          <img src={logo} className='logoImg' />
        </Link>

        <div className={`tadeksia ${menuOpen ? 'open' : ''}`}>
          <Link to='/'       className='tolinkdeks' onClick={closeMenu}>Blog</Link>
          <Link to='/about'  className='tolinkdeks' onClick={closeMenu}>About</Link>
          <Link to='/uni'    className='tolinkdeks' onClick={closeMenu}>Uni</Link>
          <Link to='/contact'className='tolinkdeks' onClick={closeMenu}>Contact</Link>
        </div>

        <div className='burger' onClick={toggleMenu}>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </div>
  );
}

export default Header;