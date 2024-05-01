import './projects.css';
import posts from './ProjectsDB.js'; 
import Math from "../Assets/math.png";

const Projects = () => {

    return (
        <div className="container">
            <br />
            <div className="divmath">
                <img src={Math} alt="" className="math" />
            </div>
            <div className="center"><h2>Projects</h2></div>
            <br />
            <form role="search">
                <input id="search" type="search" placeholder="Αναζήτηση..." autoFocus required />
                <button type="submit">Go</button>    
            </form>
            <br /><br />

            <div id="dynamicContentContainer">
                   {posts.map((post, index) => (
                        <div className="blog-container" key={index}>
                            <div className="blog-post">
                                {post.image && (
                                    <div className="blog-post_img">
                                        <img src={post.image} alt="" />
                                    </div>
                                )}
                                <div className="blog-post_info">
                                    <div className="blog-post_date">
                                        <span>Author: {post.Linksigrafea ? <a href={post.Linksigrafea} style={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: post.Sigrafeas }}></a> : post.Sigrafeas}</span>
                                        <span>{post.Date}</span>
                                        <span>{post.Katigoria}</span>
                                    </div>
                                    <h1 className="blog-post_title">{post.Titlos}</h1>
                                    <p className="blog-post_text">{post.Keimeno.length > 300 ? `${post.Keimeno.slice(0, 300)}...` : post.Keimeno}</p>
                                    <div className="todivmetaa">
                                        {post.Link && (
                                            <a href={post.Link} className="blog-post_cta"><img src="images/link.png" alt="" className="todivmeimages" />Link</a>
                                        )}
                                        {post.pdf && (
                                            <a href={post.pdf} target="_blank" className="blog-post_cta"><img src="images/pdf.png" alt="" className="todivmeimages" />Pdf</a>
                                        )}
                                        {post.file && (
                                            <a href={post.file} className="blog-post_cta"><img src="images/folder.png" alt="" className="todivmeimages" />File</a>
                                        )}
                                        {post.video && (
                                            <a href={post.video} className="blog-post_cta"><img src="images/video.png" alt="" className="todivmeimages" />Video</a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            
            <div className="loadmore" id="loadmore">
                <a>Load More</a><br />
            </div>

            <br /><br /><br /><br />

        </div>
    );
}
 
export default Projects; 