import React, { useState } from 'react';
import './projects.css';
import posts from './ProjectsDB.js'; 
import Math from "../assets/math.png";
import pdf from "../assets/pdf.png";
import link from "../assets/link.png";
import video from "../assets/video.png";
import folder from "../assets/folder.png";

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [postStates, setPostStates] = useState({});

    const toggleText = (index) => {
        const newPostStates = { ...postStates };
        newPostStates[index] = !newPostStates[index];
        setPostStates(newPostStates);
    };


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
    }
    

    return (
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
                    filteredPosts.map((post, index) => (
                        <div className="blog-container" key={index}>
                            <div className="blog-post">
                                {post.image && (
                                    <div className="blog-post_img">
                                        <img src={post.image} alt="" />
                                    </div>
                                )}
                                <div className="blog-post_info">
                                    <div className="blog-post_date">
                                        <span>Author: {post.Linksigrafea ? <a href={post.Linksigrafea} target="_blank" style={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: post.Sigrafeas }}></a> : post.Sigrafeas}</span>
                                        <span>{post.Date}</span>
                                        <span>{post.Katigoria}</span>
                                    </div>
                                    <h1 className="blog-post_title">{post.Titlos}</h1>
                                    <p className="blog-post_text">
                                        {post.Keimeno.length > 300 ? (
                                            <>
                                                {post.Keimeno.substring(0, 300)}
                                                <span id={`toggleText${index}`} style={{ display: postStates[index] ? 'inline' : 'none' }}>
                                                    {post.Keimeno.substring(300)}
                                                </span>
                                                <a className='toshow' onClick={() => toggleText(index)}>
                                                    {postStates[index] ? 'show less' : '...see more'}
                                                </a>
                                            </>
                                        ) : (
                                            post.Keimeno
                                        )}
                                    </p>
                                    <div className="todivmetaa">
                                        {post.Link && (
                                            <a href={post.Link} target="_blank" className="blog-post_cta"><img src={link} alt="" className="todivmeimages" />Link</a>
                                        )}
                                        {post.pdf && (
                                            <a href={post.pdf} download={post.pdf} className="blog-post_cta">
                                                <img src={pdf} alt="" className="todivmeimages" />
                                                Pdf
                                            </a>
                                        )}
                                        {post.file && (
                                            <a href={post.file} className="blog-post_cta"><img src={folder} alt="" className="todivmeimages" />File</a>
                                        )}
                                        {post.video && (
                                            <a href={post.video} target="_blank" className="blog-post_cta"><img src={video} alt="" className="todivmeimages" />Video</a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            
            {/* <div className="loadmore" id="loadmore">
                <a>Load More</a><br />
            </div> */}
    
            <br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}
 
export default Projects;