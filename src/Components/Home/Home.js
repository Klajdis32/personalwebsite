import './home.css';
import postsData from '../Posts/Posts';
import { Link } from 'react-router-dom';

const excerpt = (text, limit) => (
  text.length > limit ? `${text.slice(0, limit).trim()}...` : text
);

const Home = () => {
  const sortedPosts = [...postsData].sort((a, b) =>
    new Date(b.Date) - new Date(a.Date)
  );

  const [featuredPost, ...rest] = sortedPosts;
  const secondaryPosts = rest.slice(0, 2);
  const archivePosts = rest.slice(2);

  const scrollToWork = () => {
    document.getElementById('latest-work')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <main className="home">
      <section className="homeHero">
        <p className="homeEyebrow">Computational physicist &amp; developer</p>
        <h1>Exploring the universe through physics and code.</h1>
        <p className="homeLead">
          I&apos;m Klajdi, an MSc student in Computational Physics at AUTh. I build
          scientific tools, simulations, and web experiences that turn complex
          ideas into something useful and accessible.
        </p>

        <div className="heroActions">
          <button type="button" className="primaryHeroAction" onClick={scrollToWork}>
            Explore my work <span aria-hidden="true">↓</span>
          </button>
          <Link to="/contact" className="secondaryHeroAction">
            Get in touch <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="heroMeta" aria-label="Portfolio overview">
          <span><strong>{postsData.length}</strong> projects</span>
          <span><strong>Physics</strong> &amp; scientific computing</span>
          <span><strong>Web</strong> development</span>
        </div>
      </section>

      <section className="blog" id="latest-work">
        <div className="sectionHeading">
          <div>
            <p className="homeEyebrow">Selected projects</p>
            <h2>Latest work</h2>
          </div>
          <p>A mix of scientific computing, AI, hardware, and web development.</p>
        </div>

        <div className="featuredGrid">
          {featuredPost && (
            <article className="featuredProject">
              <Link to={`/post?key=${featuredPost.id}`} className="projectImageLink">
                <img src={featuredPost.imageEksw} alt={featuredPost.Titlos} />
              </Link>
              <div className="projectContent featuredContent">
                <div className="projectMeta">
                  <span className="projectCategory">{featuredPost.Katigoria || 'Project'}</span>
                  <time>{featuredPost.Date}</time>
                </div>
                <h3>
                  <Link to={`/post?key=${featuredPost.id}`}>{featuredPost.Titlos}</Link>
                </h3>
                <p>{excerpt(featuredPost.Keimeno, 260)}</p>
                <Link to={`/post?key=${featuredPost.id}`} className="readMore">
                  View project <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          )}

          <div className="secondaryProjects">
            {secondaryPosts.map((post) => (
              <article className="secondaryProject" key={post.id}>
                <Link to={`/post?key=${post.id}`} className="projectImageLink">
                  <img src={post.imageEksw} alt={post.Titlos} />
                </Link>
                <div className="projectContent">
                  <div className="projectMeta">
                    <span className="projectCategory">{post.Katigoria || 'Project'}</span>
                    <time>{post.Date}</time>
                  </div>
                  <h3>
                    <Link to={`/post?key=${post.id}`}>{post.Titlos}</Link>
                  </h3>
                  <p>{excerpt(post.Keimeno, 120)}</p>
                  <Link to={`/post?key=${post.id}`} className="readMore">
                    View project <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {archivePosts.length > 0 && (
          <div className="projectArchive">
            <div className="archiveHeading">
              <h2>More projects</h2>
              <span>{archivePosts.length} projects</span>
            </div>

            <div className="archiveGrid">
              {archivePosts.map((post) => (
                <article className="archiveProject" key={post.id}>
                  <Link to={`/post?key=${post.id}`} className="projectImageLink">
                    <img src={post.imageEksw} alt={post.Titlos} />
                  </Link>
                  <div className="projectContent">
                    <div className="projectMeta">
                      <span className="projectCategory">{post.Katigoria || 'Project'}</span>
                      <time>{post.Date}</time>
                    </div>
                    <h3>
                      <Link to={`/post?key=${post.id}`}>{post.Titlos}</Link>
                    </h3>
                    <p>{excerpt(post.Keimeno, 155)}</p>
                    <Link to={`/post?key=${post.id}`} className="readMore">
                      View project <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="homeCta">
        <div>
          <p className="homeEyebrow">Start a conversation</p>
          <h2>Interested in science, software, or a collaboration?</h2>
        </div>
        <Link to="/contact" className="homeContactLink">
          Contact me <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
};

export default Home;
