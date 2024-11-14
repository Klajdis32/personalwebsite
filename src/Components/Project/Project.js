import React from 'react';
import posts from '../Data/ProjectsDB.js'; 
import './project.css';
import { useLocation, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SlArrowLeft } from "react-icons/sl";
import pdf from "../../assets/pdf.png";
import link from "../../assets/link.png";
import video from "../../assets/video.png";
import folder from "../../assets/folder.png";

const Project = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get('to');
    const post = posts.find(post => post.Titlos === title);

    if (!post) {
        return <Navigate to="/projects" />;
    }

    return (
        <div className='toolo4'>

        <div className='waves4'>
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="42%" y1="1%" x2="58%" y2="99%"><stop offset="5%" stop-color="#abb8c3"></stop><stop offset="95%" stop-color="#8ed1fc"></stop></linearGradient></defs><path d="M 0,400 L 0,400 C 73.48883545173481,245.63792511164547 146.97767090346963,91.27585022329096 220,45 C 293.02232909653037,-1.2758502232909652 365.57815183785635,60.53452421848162 428,89 C 490.42184816214365,117.46547578151838 542.7097217451048,112.58605290278254 609,94 C 675.2902782548952,75.41394709721746 755.5829611817246,43.121264170388194 818,47 C 880.4170388182754,50.878735829611806 924.9584335279972,90.92889041566471 994,90 C 1063.0415664720028,89.07110958433529 1156.5833047062868,47.16317416695293 1235,92 C 1313.4166952937132,136.83682583304707 1376.7083476468565,268.41841291652355 1440,400 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><defs><linearGradient id="gradient" x1="42%" y1="1%" x2="58%" y2="99%"><stop offset="5%" stop-color="#abb8c3"></stop><stop offset="95%" stop-color="#8ed1fc"></stop></linearGradient></defs><path d="M 0,400 L 0,400 C 70.79766403297839,290.31329440054964 141.59532806595678,180.62658880109927 220,144 C 298.4046719340432,107.37341119890073 384.41635176915145,143.80693919615254 449,165 C 513.5836482308486,186.19306080384746 556.7392648574374,192.14565441429062 626,182 C 695.2607351425626,171.85434558570938 790.6265888010992,145.610443146685 850,140 C 909.3734111989008,134.389556853315 932.7543799381656,149.41257299896944 993,152 C 1053.2456200618344,154.58742700103056 1150.3558914462383,144.7392648574373 1231,184 C 1311.6441085537617,223.2607351425627 1375.8220542768809,311.63036757128134 1440,400 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path><defs><linearGradient id="gradient" x1="42%" y1="1%" x2="58%" y2="99%"><stop offset="5%" stop-color="#abb8c3"></stop><stop offset="95%" stop-color="#8ed1fc"></stop></linearGradient></defs><path d="M 0,400 L 0,400 C 88.89797320508416,371.6818962555823 177.7959464101683,343.36379251116455 232,310 C 286.2040535898317,276.63620748883545 305.7141875644108,238.22672621092408 378,241 C 450.2858124355892,243.77327378907592 575.3473033321883,287.7293026451391 651,298 C 726.6526966678117,308.2706973548609 752.8965991068361,284.8560632085194 815,279 C 877.1034008931639,273.1439367914806 975.0663002404672,284.8464445207832 1044,286 C 1112.9336997595328,287.1535554792168 1152.8381999312953,277.75815870834765 1214,295 C 1275.1618000687047,312.24184129165235 1357.5809000343525,356.1209206458262 1440,400 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 200)"></path></svg>
        </div>
        
        <div className="container4">
            <div className='paneligopanw'>
                <Link to="/projects" className='back'><SlArrowLeft /><p className='ligopanw'>Projects</p></Link>
                <div className='center'>   
                    <h2>{title}</h2>
                </div>

                <div className="Sigr-date-Katigoria">
                    <span><strong>Author:</strong> {post.Linksigrafea ? <a href={post.Linksigrafea} target="_blank"  rel="noopener noreferrer" style={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: post.Sigrafeas }}></a> : post.Sigrafeas}</span><br/>
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
                        <a href={post.Link} target="_blank" rel="noopener noreferrer" className="blog-post_cta">
                            <img src={link} alt="" className="todivmeimages" />Link
                        </a>
                    )}
                    {post.pdf && (
                        Array.isArray(post.pdf) && post.pdf.length > 0 ? (
                            post.pdf.map((pdfFile, index) => (
                                <a 
                                    key={index} 
                                    href={pdfFile} 
                                    download={pdfFile} 
                                    className="blog-post_cta"
                                    title={`${pdfFile}`} // Το tooltip με το όνομα του αρχείου
                                >
                                    <img src={pdf} alt="" className="todivmeimages" />
                                    Pdf {index + 1}
                                </a>
                            ))
                        ) : (
                            typeof post.pdf === 'string' && post.pdf.trim() !== '' && (
                                <a 
                                    href={post.pdf} 
                                    download={post.pdf} 
                                    className="blog-post_cta" 
                                    title={`${post.pdf}`} // Το tooltip με το όνομα του αρχείου
                                >
                                    <img src={pdf} alt="" className="todivmeimages" />
                                    Pdf
                                </a>
                            )
                        )
                    )}
                    {post.file && (
                        <a href={post.file} className="blog-post_cta">
                            <img src={folder} alt="" className="todivmeimages" />File
                        </a>
                    )}
                    {post.video && (
                        <a href={post.video} target="_blank" rel="noopener noreferrer" className="blog-post_cta">
                            <img src={video} alt="" className="todivmeimages" />Video
                        </a>
                    )}
                </div>
            </div>

            <br/><br/><br/><br/>
        </div>

        </div>
    );
}

export default Project;
