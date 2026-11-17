import './about.css';
import meImg from '../../Assets/me.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="about">
      <section className="profileCard">
        <div className="profileCover" aria-hidden="true">
          <span className="coverOrbit coverOrbitOne" />
          <span className="coverOrbit coverOrbitTwo" />
        </div>

        <div className="profileContent">
          <div className="profilePhotoWrap">
            <img src={meImg} className="profilePhoto" alt="Klajdi Cami" />
          </div>

          <div className="profileIdentity">
            <div className="profileHeading">
              <div>
                <h1>Klajdi Cami</h1>
                <p className="profileHeadline">
                  MSc Computational Physics student · Scientific computing &amp; software development
                </p>
                <p className="profileLocation">Thessaloniki, Greece · Aristotle University of Thessaloniki</p>
              </div>
              <span className="openBadge">Open to collaboration</span>
            </div>

            <div className="profileActions">
              <Link to="/contact" className="profilePrimaryAction">
                Contact me
              </Link>
              <a
                href="https://github.com/Klajdis32"
                target="_blank"
                rel="noopener noreferrer"
                className="profileSecondaryAction"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="profileLayout">
        <div className="profileMainColumn">
          <section className="profileSection aboutSection">
            <h2>About</h2>
            <p>
              I&apos;m a postgraduate student in Computational Physics at the
              Aristotle University of Thessaloniki, interested in the point where
              physical theory, numerical methods, and software meet.
            </p>
            <p>
              My work combines scientific thinking with practical development. I
              enjoy building simulations, analysing data, and creating tools that
              make complex scientific information easier to explore. Alongside
              computational physics, I develop web applications and experiment
              with AI, electronics, and interactive scientific interfaces.
            </p>
            <p>
              I&apos;m motivated by problems that require both careful reasoning and
              creative implementation—and I&apos;m always looking for opportunities to
              learn, collaborate, and turn an interesting idea into something that
              works.
            </p>
          </section>

          <section className="profileSection">
            <h2>Education</h2>
            <div className="timeline">
              <article className="timelineItem">
                <div className="institutionMark" aria-hidden="true">AUTh</div>
                <div>
                  <h3>MSc in Computational Physics</h3>
                  <p className="institution">Aristotle University of Thessaloniki</p>
                  <p className="timelineDate">Postgraduate studies · Current</p>
                  <p className="timelineDescription">
                    Numerical modelling, scientific programming, simulation, and computational methods in physics.
                  </p>
                </div>
              </article>

              <article className="timelineItem">
                <div className="institutionMark" aria-hidden="true">AUTh</div>
                <div>
                  <h3>BSc in Physics</h3>
                  <p className="institution">Aristotle University of Thessaloniki</p>
                  <p className="timelineDescription">
                    Academic foundation in physics, mathematics, electronics, and laboratory experimentation.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section className="profileSection featuredProfileSection">
            <div>
              <p className="profileEyebrow">Featured work</p>
              <h2>Projects where physics meets code</h2>
              <p>
                Explore my work in astrophysics, simulations, AI, electronics, and web development.
              </p>
            </div>
            <Link to="/" className="featuredProfileLink">
              View projects <span aria-hidden="true">→</span>
            </Link>
          </section>
        </div>

        <aside className="profileSideColumn">
          <section className="profileSection focusSection">
            <h2>Current focus</h2>
            <ul className="focusList">
              <li>
                <span aria-hidden="true">01</span>
                Computational and numerical physics
              </li>
              <li>
                <span aria-hidden="true">02</span>
                Scientific software and data analysis
              </li>
              <li>
                <span aria-hidden="true">03</span>
                Interactive tools for scientific communication
              </li>
            </ul>
          </section>

          <section className="profileSection skillsProfileSection">
            <h2>Skills</h2>
            <div className="profileSkillGroup">
              <h3>Science</h3>
              <div className="profileSkillTags">
                <span>Physics</span>
                <span>Computational Physics</span>
                <span>Mathematics</span>
                <span>Electronics</span>
                <span>Scientific Computing</span>
              </div>
            </div>

            <div className="profileSkillGroup">
              <h3>Technology</h3>
              <div className="profileSkillTags">
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
          </section>

          <section className="profileSection contactProfileSection">
            <h2>Contact</h2>
            <p>Interested in a project, research idea, or collaboration?</p>
            <Link to="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
          </section>
        </aside>
      </div>
    </main>
  );
};

export default About;
