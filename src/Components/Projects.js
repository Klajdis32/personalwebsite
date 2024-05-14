import React, { useState, useEffect } from 'react';
import './projects.css';
import posts from './ProjectsDB.js'; 
import { Link } from 'react-router-dom';
import Math from "../assets/math.png";
import UpArrow from "../assets/up-arrow.png";

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [postStates, setPostStates] = useState({});
    const [visiblePosts, setVisiblePosts] = useState(10);
    const [showArrow, setShowArrow] = useState(true);
    const [showLoadMore, setShowLoadMore] = useState(false);

    const loadMore = () => {
        setVisiblePosts(prev => prev + 10);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        setShowLoadMore(true);
        const filtered = posts.filter(post => {
            const lowerSearchTerm = searchTerm.toLowerCase();
            return (
                post.Titlos.toLowerCase().includes(lowerSearchTerm) ||
                post.Keimeno.toLowerCase().includes(lowerSearchTerm) ||
                post.Ergastirio.toLowerCase().includes(lowerSearchTerm) ||
                post.Sigrafeas.toLowerCase().includes(lowerSearchTerm) ||
                post.Katigoria.toLowerCase().includes(lowerSearchTerm)
            );
        });
        setFilteredPosts(filtered);
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 200) {
            setShowArrow(false);
          } else {
            setShowArrow(true);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    

    return (
        <div>
        <div className="container3">
            <br />
            <div className="divmath">
                <img src={Math} alt="" className="math" />
            </div>
            <div className="center"><h2>Projects</h2></div>
            <br />
            <form role="search" onSubmit={handleSearch}>
                <input 
                    id="search" 
                    type="search" 
                    placeholder="Αναζήτηση..." 
                    required 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Go</button>    
            </form>
            <br /><br />
    
            <div id="dynamicContentContainer">
                {filteredPosts.length === 0 ? (
                    <p className='notfound'>No project was found that contains the word - phrase: <strong>"{searchTerm}"</strong>...</p>
                ) : (
                    filteredPosts.slice(0, visiblePosts).map((post, index) => (
                        <div className="blog-container" key={index}>
                            <div className="blog-post">
                                {post.image && (
                                    <div className="blog-post_img">
                                        <img src={post.image} alt="" />
                                    </div>
                                )}
                                <div className="blog-post_info">
                                    <h1 className="blog-post_title">{post.Titlos}</h1>
                                    <p className="blog-post_text">
                                        {post.Keimeno.length > 300 ? (
                                            <>
                                                {post.Keimeno.substring(0, 300)}...
                                            </>
                                        ) : (
                                            post.Keimeno
                                        )}
                                    </p>
                                    <div className="todivmetaa">
                                    <Link to={`/project?to=${post.Titlos}`} className='toseemore'>See more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {visiblePosts < posts.length && !showLoadMore && (
                <div className="loadmore" id="loadmore" onClick={loadMore}>
                    <a>Load More</a><br/>
                </div>
            )}
    
            <br/><br/><br/><br/>
            </div>

                {!showArrow && (
                <div class="arrow" onClick={scrollToTop} >
                    <img src={UpArrow} alt="" id="uparrow" />
                </div>
                )}

        </div>
    );
}
 
export default Projects;
