import React from 'react';
import posts from './ProjectsDB.js'; 
import './project.css';
import { useLocation, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SlArrowLeft } from "react-icons/sl";
import pdf from "../assets/pdf.png";
import link from "../assets/link.png";
import video from "../assets/video.png";
import folder from "../assets/folder.png";

const Project = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get('to');
    const post = posts.find(post => post.Titlos === title);

    if (!post) {
        return <Navigate to="/projects" />;
    }

    return (
        <div className="container4">

            <Link to="/projects" className='back'><SlArrowLeft /><p>Projects</p></Link>
            <div className='center'>   
                <h2>{title}</h2>
            </div>

            <div className="Sigr-date-Katigoria">
                <span><strong>Author:</strong> {post.Linksigrafea ? <a href={post.Linksigrafea} target="_blank" style={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: post.Sigrafeas }}></a> : post.Sigrafeas}</span><br/>
                <span><strong>Date:</strong> {post.Date}</span><br/>
                <span><strong>Category:</strong> {post.Katigoria}</span><br/>
            </div>
            {post.imageMesa && <div className='center'>
                <br/><br/>
                <img src={post.imageMesa} />
            </div>}
            <br/>
            <p className='summary'>Summary:</p>
            <p className='tokeimeno'>{post.Keimeno}</p>
            <p className='summary'>Attachments:</p>
            <div className="todivmetaa1">
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

            <br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default Project;
