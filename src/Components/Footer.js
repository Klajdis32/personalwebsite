import './footer.css';
import profilePicture from '../assets/user12.png';
import projectsPicture from '../assets/planning.png';
import contactPicture from '../assets/send1.png';
import booksPicture from '../assets/book.png';
import dapPicture from '../assets/astronomy.png';

const Footer = () => {
    return (
      <div class="footer">
            <a href="/" class="toa">
                <div class="todiv">
                        <img src={profilePicture} alt="" /><br/>
                        <span>Profile</span>
                </div>
            </a>
            <a href="/projects.html" class="toa">
                <div class="todiv">
                        <img  src={projectsPicture} alt="" /><br/>
                        <span>Projects</span>
                </div>
            </a>
            <a href="/contact.html" class="toa">
                <div class="todiv">
                        <img  src={contactPicture} alt="" /><br/>
                        <span>Contact</span>
                </div>
            </a>
            <a href="/books.html" class="toa">
                <div class="todiv">
                        <img  src={booksPicture} alt="" /><br/>
                        <span>Books</span>
                </div>
            </a>
            <a href="/dap.html" class="toa">
                <div class="todiv">
                        <img  src={dapPicture} alt="" /><br/>
                        <span>DAP</span>
                </div>
            </a>
    </div>
  );
}
  
export default Footer;
  