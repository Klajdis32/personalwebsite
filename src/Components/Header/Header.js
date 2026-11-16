import './header.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo.png";
import git from "../../Assets/github.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    return 'light';
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

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

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let accumulatedScroll = 0;
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const scrollDifference = currentScrollY - lastScrollY;

      if (
        (scrollDifference > 0 && accumulatedScroll < 0) ||
        (scrollDifference < 0 && accumulatedScroll > 0)
      ) {
        accumulatedScroll = 0;
      }

      accumulatedScroll += scrollDifference;

      if (menuOpen || currentScrollY <= 10) {
        setHeaderVisible(true);
        accumulatedScroll = 0;
      } else if (accumulatedScroll > 12) {
        setHeaderVisible(false);
        accumulatedScroll = 0;
      } else if (accumulatedScroll < -4) {
        setHeaderVisible(true);
        accumulatedScroll = 0;
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  return (
    <>
      <div className={`headerOut ${menuOpen ? 'open' : ''} ${headerVisible ? '' : 'headerHidden'}`}>
        <div className='headerOutmesa'>
          <Link to='/' className='toaristera' onClick={closeMenu}>
            <img src={logo} className='logoImg' alt="Logo" />
          </Link>

          <div className={`tadeksia ${menuOpen ? 'open' : ''}`}>
            <Link to='/'        className='tolinkdeks' onClick={closeMenu}>Blog</Link>
            <Link to='/about'   className='tolinkdeks' onClick={closeMenu}>About</Link>
            <Link to='/uni'     className='tolinkdeks' onClick={closeMenu}>Uni</Link>
            <Link to='/contact' className='tolinkdeks' onClick={closeMenu}>Contact</Link>
            <button
              type="button"
              className="themeToggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <span className="themeIcon" aria-hidden="true">
                {theme === 'dark' ? '☀' : '☾'}
              </span>
            </button>
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
      <div className="headerOffset" aria-hidden="true" />
    </>
  );
};

export default Header;
