import './footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="FooterOut">
      <div className='mesaFooter'>
        <p>© 2026 Klajdi</p>
        <p>-</p>
        <p onClick={scrollToTop} className="goTop">
          Go to the top
        </p>
      </div>
    </div>
  );
};

export default Footer;