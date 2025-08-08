// src/components/Home/Home.js
import './home.css';
import postsData from '../Posts/Posts';
import { Link } from 'react-router-dom';

const Home = () => {
  // 1. Κλωνάρισμα και ταξινόμηση κατά Date (νέο ➝ παλιό)
  const sortedPosts = [...postsData].sort((a, b) =>
    new Date(b.Date) - new Date(a.Date)
  );

  // 2. Διαχωρισμός σε top (3) και bottom (υπόλοιπα)
  const [firstPost, ...rest] = sortedPosts;
  const rightPosts = rest.slice(0, 2);
  const bottomPosts = rest.slice(2);

  return (
    <div className='home'>
      <div className='arxiko'>
        <h1>Hello, I'm Klajdi! I'm passionate about physics and coding. Explore my blog below.</h1>
      </div>

      <div className='blog'>
        <h2>Latest Posts</h2>
        <div className='postsContainer'>
          <div className='topColumns'>
            {/* Αριστερό μεγάλο post */}
            {firstPost && (
              <div className='leftColumn'>
                <div className='post1'>
                  <img
                    src={firstPost.imageEksw}
                    alt={firstPost.Titlos}
                  />
                  <div className='postContent'>
                    <small className='date'>{firstPost.Date}</small>
                    <h3>{firstPost.Titlos}</h3>
                    <p>{firstPost.Keimeno}</p>
                  <Link
                    to={`/post?key=${firstPost.id}`}
                    className="readMore"
                  >
                    Read More
                  </Link>
                  </div>
                </div>
              </div>
            )}

           {/* Δύο μικρότερα posts δεξιά */}
            <div className='rightColumn'>
              {rightPosts.map(post => (
                <div className='postright' key={post.id}>
                  <img src={post.imageEksw} alt={post.Titlos} />
                  <div className='postContent'>
                    <small className='date'>{post.Date}</small>
                    <h3>{post.Titlos}</h3>
                    <p>
                      {post.Keimeno.length > 100
                        ? post.Keimeno.slice(0, 100) + '...'
                        : post.Keimeno}
                    </p>
                    <Link
                      to={`/post?key=${post.id}`}
                      className="readMore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2>More Posts</h2>
          <div className='bottomFullWidth'>
            {bottomPosts.map((post, idx) => (
              <div className='post' key={idx}>
                <img src={post.imageEksw} alt={post.Titlos} className='postsImg'/>
                <div className='postContent'>
                  <small className='date'>{post.Date}</small>
                  <h3>{post.Titlos}</h3>
                  <p>
                    {post.Keimeno.length > 400
                      ? post.Keimeno.slice(0, 400) + '...'
                      : post.Keimeno}
                  </p>
                        <Link
                        to={`/post?key=${post.id}`}
                        className="readMore"
                      >
                        Read More
                      </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;