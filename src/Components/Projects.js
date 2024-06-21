import React, { useState, useEffect } from 'react';
import './projects.css';
import posts from './ProjectsDB.js'; 
import { Link } from 'react-router-dom';
import MathImage from "../assets/idea.png";
import UpArrow from "../assets/up-arrow.png";

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [showArrow, setShowArrow] = useState(true);
    const [showPageNumbers, setShowPageNumbers] = useState(true);

    const handleSearch = (event) => {
        event.preventDefault();
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
        setCurrentPage(1);
        setShowPageNumbers(false);  // Αποκρύπτει τους αριθμούς σελίδων κατά την αναζήτηση
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        scrollToTop();
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

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredPosts.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div className="container3">
                <div className='wave3'>
                    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
                        <defs>
                            <linearGradient id="gradient" x1="96%" y1="70%" x2="4%" y2="30%">
                                <stop offset="5%" stopColor="#8ed1fc"></stop>
                                <stop offset="95%" stopColor="#abb8c3"></stop>
                            </linearGradient>
                        </defs>
                        <path d="M 0,400 L 0,400 C 122.51674641148324,258.10526315789474 245.03349282296648,116.21052631578948 335,55 C 424.9665071770335,-6.210526315789475 482.38277511961724,13.263157894736835 562,56 C 641.6172248803828,98.73684210526316 743.4354066985647,164.73684210526318 834,149 C 924.5645933014353,133.26315789473682 1003.8755980861245,35.78947368421052 1103,64 C 1202.1244019138755,92.21052631578948 1321.0622009569379,246.10526315789474 1440,400 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
                        <defs>
                            <linearGradient id="gradient" x1="96%" y1="70%" x2="4%" y2="30%">
                                <stop offset="5%" stopColor="#8ed1fc"></stop>
                                <stop offset="95%" stopColor="#abb8c3"></stop>
                            </linearGradient>
                        </defs>
                        <path d="M 0,400 L 0,400 C 76.55502392344496,349.6937799043062 153.11004784688993,299.3875598086125 248,278 C 342.8899521531101,256.6124401913875 456.11483253588517,264.1435406698564 569,265 C 681.8851674641148,265.8564593301436 794.4306220095694,260.0382775119617 882,246 C 969.5693779904306,231.96172248803825 1032.1626794258375,209.70334928229664 1121,234 C 1209.8373205741625,258.29665071770336 1324.9186602870814,329.1483253588517 1440,400 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path>
                    </svg>
                </div>
                <div className='panepanw'>
                    <div className="center2"><img src={MathImage} alt="" className="math" /></div>
                    <br />
                    <form role="search" onSubmit={handleSearch}>
                        <input 
                            id="search" 
                            type="search" 
                            placeholder="Search a project..." 
                            required 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">Go</button>    
                    </form>
                </div>
                <br />
                {showPageNumbers && (
                    <div className='paginationdeksia'>
                        {pageNumbers.map(number => (
                            <div 
                                key={number} 
                                className={`page-number ${number === currentPage ? 'active' : ''}`} 
                                onClick={() => handlePageClick(number)}
                            >
                                {number}
                            </div>
                        ))}
                    </div>
                )}
                <br />
                <div id="dynamicContentContainer">
                    {filteredPosts.length === 0 ? (
                        <p className='notfound'>No project was found that contains the word - phrase: <strong>"{searchTerm}"</strong>...</p>
                    ) : (
                        currentPosts.map((post, index) => (
                            <div className="blog-container" key={index}>
                                <div className="blog-post">
                                    {post.image && (
                                        <div className="blog-post_img">
                                            <img src={post.image} alt="" />
                                        </div>
                                    )}
                                    <div className="blog-post_info">
                                        <p className="blog-post_date">{post.Date}</p>
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
                {showPageNumbers && (
                    <div className='pagination'>
                        {pageNumbers.map(number => (
                            <div 
                                key={number} 
                                className={`page-number ${number === currentPage ? 'active' : ''}`} 
                                onClick={() => handlePageClick(number)}
                            >
                                {number}
                            </div>
                        ))}
                    </div>
                )}
                <br/><br/><br/>
            </div>

            {!showArrow && (
                <div className="arrow" onClick={scrollToTop} >
                    <img src={UpArrow} alt="" id="uparrow" />
                </div>
            )}
        </div>
    );
}

export default Projects;
