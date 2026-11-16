import './about.css';
import meImg from '../../Assets/me.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      <section className="aboutHero">
        <div className="aboutHeroContent">
          <p className="aboutEyebrow">About me</p>
          <h1>Physics, code, and everything in between.</h1>
          <p className="aboutLead">
            I&apos;m Klajdi, an MSc student in Computational Physics at the
            Aristotle University of Thessaloniki. I enjoy turning scientific
            questions into models, simulations, and useful software.
          </p>
          <div className="aboutMeta" aria-label="Current focus">
            <span>MSc Computational Physics</span>
            <span>AUTh</span>
            <span>Thessaloniki</span>
          </div>
        </div>

        <div className="aboutMeimgdiv">
          <div className="portraitFrame">
            <img src={meImg} className="meImg" alt="Klajdi Cami" />
          </div>
          <p className="portraitCaption">Curious by nature. Building through science and code.</p>
        </div>
      </section>

      <section className="aboutStory" aria-label="My background">
        <article className="storyCard">
          <span className="storyNumber" aria-hidden="true">01</span>
          <h2>Scientific curiosity</h2>
          <p>
            Physics taught me to look beyond the surface of a problem: to ask
            better questions, work carefully with evidence, and understand the
            principles behind complex systems. My postgraduate studies now let
            me explore those ideas through numerical methods and computation.
          </p>
        </article>

        <article className="storyCard">
          <span className="storyNumber" aria-hidden="true">02</span>
          <h2>Building with code</h2>
          <p>
            Programming is how I turn ideas into working tools. I&apos;m especially
            interested in scientific computing, simulations, data analysis, and
            web applications that make technical information easier to explore
            and understand.
          </p>
        </article>
      </section>

      <section className="skillsSection">
        <div className="skillsIntro">
          <p className="aboutEyebrow">Skills &amp; interests</p>
          <h2>A toolkit shaped by science and technology.</h2>
        </div>

        <div className="skillGroups">
          <div className="skillGroup">
            <h3>Science</h3>
            <div className="skillTags">
              <span>Physics</span>
              <span>Computational Physics</span>
              <span>Mathematics</span>
              <span>Electronics</span>
              <span>Scientific Computing</span>
            </div>
          </div>

          <div className="skillGroup">
            <h3>Programming</h3>
            <div className="skillTags">
              <span>Python</span>
              <span>C</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Express.js</span>
              <span>MySQL</span>
              <span>Kotlin</span>
              <span>Swift</span>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutCta">
        <div>
          <p className="aboutEyebrow">Let&apos;s connect</p>
          <h2>Have an interesting idea or project?</h2>
        </div>
        <Link to="/contact" className="aboutContactLink">
          Contact me <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </div>
  );
};

export default About;
