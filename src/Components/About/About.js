import './about.css';
import meImg from '../../Assets/me.png';

const About = () => {

  return (
    <div className='about'>
        <h1>About me</h1>
        <div className='aboutMeimgdiv'>
            <img src={meImg} className='meImg'/>
        </div>
    
        <div className='aboutMeText'>
            <p>
                🎓 Physics student at the Aristotle University of Thessaloniki ( 2022 – Present )
            </p>
            <p>
                I have a deep interest in physics, a field I am currently studying, which allows me to explore and understand the fundamental principles that govern the natural world. At the same time, I am equally passionate about programming, an area that fascinates me for its ability to solve problems and create innovative solutions.
            </p>
           
            <p>
                This combination of physics and programming drives my curiosity and inspires me to continue learning and growing in both domains.
            </p>

            <strong>Skills</strong>
            <br/><br/>
            <div className="taskills">
                <span>Physics, </span>
                <span>Mathematics, </span>
                <span>Electronics</span> <br/>
                <span>Computer programming ( C, Python, JavaScript ) </span><br/>
                <span>App & Web App Developer ( Kotlin, Swift, React, Angular, php, Express.js, MySQL ) </span>
            </div>

            <p>To get in touch, contact me.</p>

            <strong>Some of the books i have reed</strong>
            <br/><br/>
            <a href='www.goodreads.com/review/list/189751853?shelf=read'>www.goodreads.com/review/list/189751853?shelf=read</a>

        </div>
    </div>
  );
}

export default About;