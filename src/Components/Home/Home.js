import './home.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imagelogo.png';
import React from "react";
import contact from "../../assets/new-email.png";
import github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin.png";
// import qiskit from '../../attachments/certificates/Klajdi Cami_QiskitFallFestAUTH2023_Certificate 2024-08-05 20_52_04.pdf';
// import EEF from '../../attachments/certificates/ΒΕΒΑΙΩΣΗ ΣΥΜΜΕΤΟΧΗΣ ΕΛΦ.pdf';
// import Esa from '../../attachments/certificates/ΒΕΒΑΙΩΣΗ KLAJDI CΑΜΙ.pdf';
// import AiSim from '../../attachments/certificates/Certificate of Attendance_.pdf';
// import GreeCv from '../../attachments/cv/KlajdiCami_GreekCv.pdf';
// import EnglishCv from "../../attachments/cv/KlajdiCami_EnglishCv.pdf";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='toolo'>
        <div className='tawaves'>
          <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="29%" y1="95%" x2="71%" y2="5%"><stop offset="5%" stopColor="#abb8c3"></stop><stop offset="95%" stopColor="#8ed1fc"></stop></linearGradient></defs><path d="M 0,600 L 0,112 C 48.02679491583649,131.9395396770869 96.05358983167298,151.87907935417383 175,153 C 253.94641016832702,154.12092064582617 363.81243558914457,136.42322226039158 442,149 C 520.1875644108554,161.57677773960842 566.6966678117485,204.42803160425973 625,255 C 683.3033321882515,305.57196839574027 753.4008931638613,363.8646513225695 815,385 C 876.5991068361387,406.1353486774305 929.6997595328064,390.1133631054621 1000,407 C 1070.3002404671936,423.8866368945379 1157.8000687049123,473.6818962555823 1234,505 C 1310.1999312950877,536.3181037444177 1375.0999656475437,549.1590518722089 1440,562 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path><defs><linearGradient id="gradient" x1="29%" y1="95%" x2="71%" y2="5%"><stop offset="5%" stopColor="#abb8c3"></stop><stop offset="95%" stopColor="#8ed1fc"></stop></linearGradient></defs><path d="M 0,600 L 0,262 C 64.71315699072483,240.31879079354172 129.42631398144965,218.63758158708345 201,244 C 272.57368601855035,269.36241841291655 351.00790106492616,341.7684644452078 411,379 C 470.99209893507384,416.2315355547922 512.5420817588457,418.2885606320852 585,436 C 657.4579182411543,453.7114393679148 760.823771899691,487.07729302645134 832,519 C 903.176228100309,550.9227069735487 942.1628306423911,581.4022672621093 1009,589 C 1075.837169357609,596.5977327378907 1170.5249055307454,581.3136379251116 1247,598 C 1323.4750944692546,614.6863620748884 1381.7375472346273,663.3431810374442 1440,712 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path><defs><linearGradient id="gradient" x1="29%" y1="95%" x2="71%" y2="5%"><stop offset="5%" stopColor="#abb8c3"></stop><stop offset="95%" stopColor="#8ed1fc"></stop></linearGradient></defs><path d="M 0,600 L 0,412 C 67.5396770869117,382.02885606320854 135.0793541738234,352.05771212641713 212,373 C 288.9206458261766,393.94228787358287 375.2222603916181,465.79800755754025 444,515 C 512.7777396083819,564.2019924424598 564.0316042597047,590.7502576434216 624,602 C 683.9683957402953,613.2497423565784 752.6513225695637,609.2009618687737 822,623 C 891.3486774304363,636.7990381312263 961.3631054620405,668.445894881484 1023,686 C 1084.6368945379595,703.554105118516 1137.896255582274,707.0154586052903 1206,734 C 1274.103744417726,760.9845413947097 1357.051872208863,811.4922706973548 1440,862 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 300)"></path></svg>
        </div>
        <div className="container">
            <div className="divlogo">
                <div className='left-item9'>
                    <img src={Logo} alt="" className="tologo" id='logo' />
                    <h3 id="enname">Klajdi Cami</h3>
                </div>
                <div className='todivdeksia'>
                    <Link to="/contact" className='tolink'>
                        <div className='todivdeksia1'>
                            <img src={contact} alt="" id='ligomegalhtero'/><br />
                            <span id="encont">Contact</span>
                            <span id="grcont">Επικοινωνία</span>
                        </div>
                    </Link>
                    <Link to="https://www.linkedin.com/in/klajdi-cami-90a59b284/" target="_blank" rel="noreferrer" className='tolink'>
                    <div className='todivdeksia1' id='oxideksia1'>
                        <img src={Linkedin} alt="" /><br />
                        <span>Linkedin</span>
                    </div>
                    </Link><div id='monokin'><br/><br/></div>
                    <Link to="https://github.com/Klajdis32" target="_blank" rel="noreferrer" className='tolink'>
                    <div className='todivdeksia1' id='oxideksia'>
                        <img src={github} alt="" /><br />
                        <span>Github</span>
                    </div>
                    </Link>
                </div>
            </div>

            {/* English  */}
            <div className="divkeimeno" id="en"> 
                <p>🎓 Physics student at the Aristotle University of Thessaloniki  <small>&#40; 2022 – Present &#41;</small></p>

                <strong>About me</strong>
                <p>
                    I have a deep interest in physics, a field I am currently studying, which allows me to explore and understand the fundamental principles that govern the natural world. Through my studies, I have developed strong problem-solving skills, using the scientific method to approach challenges logically and effectively. This process has taught me to analyze situations critically and find practical solutions to complex issues.
                </p>   
                
                <p>
                    At the same time, I am equally passionate about programming, an area that fascinates me for its ability to solve problems and create innovative solutions. By learning languages like C, Python, PHP, and JavaScript I have built a strong foundation in coding. Programming not only enhances my problem-solving skills but also fuels my creativity, enabling me to turn ideas into functional tools. This combination of physics and programming drives my curiosity and inspires me to continue learning and growing in both domains.
                </p>

                {/* <div className='taCv'>
                    <strong>Cv</strong>
                    <a href={GreeCv} target="_blank" className="toaCv"  rel="noopener noreferrer">Greek</a><br/>
                    <a href={EnglishCv} target="_blank" className="toaCv" rel="noopener noreferrer">English</a>
                </div> */}

                {/* <strong>Certificates and attestations</strong>
                <br/> <br/>
                <div class="todivcart">
                    <span class="left-dot">•</span>
                    <div class="horizontal-line"></div>
                    <span class="right-arrows">»</span>
                </div>
                <div className='toolohor'>
                    <div className="timeline-container">
                        <button onClick={scrollLeft} className="timeline-button">Left</button>
                        <div className="timeline" ref={timelineRef}>
                            
                            <a href={EEF} target="_blank" rel="noreferrer" className='tacart'>
                                <div className='mpalaki'></div>
                                <div className="content">
                                    <p className='todatep'>20/3/2021</p>
                                    <p className='tokatwp'>Participation in the 31st Panhellenic High School Physics Competition (Pdf)</p>  
                                </div>
                            </a>

                            <a href={qiskit} target="_blank" rel="noreferrer" className='tacart'>
                            <div className='mpalaki'></div>
                                <div className="content">
                                    <p className='todatep'>04/12/2023</p>
                                    <p className='tokatwp'>Quantum computing with Qiskit, FallFest AUTH 2023 (Pdf)</p> 
                                </div>
                            </a>

                            <a href={Esa} target="_blank" rel="noreferrer" className='tacart'>
                            <div className='mpalaki'></div>
                                <div className="content">
                                    <p className='todatep'>28/09/2024</p>
                                    <p className='tokatwp'>ESERO Greece Symposium from Esa (Pdf)</p> 
                                </div>
                            </a>

                            <a href={AiSim} target="_blank" rel="noreferrer" className='tacart'>
                            <div className='mpalaki'></div>
                                <div className="content">
                                    <p className='todatep'>01/12/2024</p>
                                    <p className='tokatwp'>The applications of AI in everyday life, symposium (Pdf)</p> 
                                </div>
                            </a>

                            <div className="tacart" id='tonow'>
                                <div className='mpalaki'></div>
                                <p className='todatep'>{formattedDate}</p>
                                <p className='tokatwpnow'>Today</p> 
                            </div>
                        </div>
                        
                        <button onClick={scrollRight} className="timeline-button">Right</button>
                        </div>

                    </div> */}

                    <strong>Skills</strong>
                    <div className="taskills">
                        <span>Physics, </span>
                        <span>Mathematics, </span>
                        <span>Electronics, </span>
                        <span>C, </span>
                        <span>Python, </span>
                        <span>JavaScript, </span>
                        <span>React, </span>
                        <span>App Developer, </span>
                        <span>Web App Developer</span>
                    </div>

                    <br/>

                    <strong>Languages</strong>
                    <div className="taskills">
                        <span>English, </span>
                        <span>Greek, </span>
                        <span>Albanian</span>
                    </div>

                    <br/>

                <strong>Selected works</strong>

                <div className="toEpilegmeno">
                    <p className='topEpi'>Lunar Lander Ai Agent</p>
                    <Link to='/project?to=Lunar%20Lander%20Ai%20Agent' className="toLinkEpil" >Read more <FaArrowRightLong  className='toarrow'/></Link>
                </div>

                <div className="toEpilegmeno">
                    <p className='topEpi'>Chat Interface for Llama LLM</p>
                    <Link to='/project?to=Chat%20Interface%20for%20Llama%20LLM' className="toLinkEpil" >Read more <FaArrowRightLong  className='toarrow'/></Link>
                </div>

                <div className="toEpilegmeno">
                    <p className='topEpi'>All projects</p>
                    <Link to='/projects' className="toLinkEpil" >Here <FaArrowRightLong  className='toarrow'/></Link>
                </div>

            </div>
            
            <br/><br/><br/><br/>
        </div>
    </div>
    );
}
 
export default Home; 