import './dap.css';
import React, { useState, useEffect } from 'react';
import MilkyWay from "../../attachments/images/MilkyWay.jpg";

const Dap = () => {
    const [apodData, setApodData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const convertDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };

    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0]; // Επιστρέφει την ημερομηνία σε μορφή YYYY-MM-DD
    };

    useEffect(() => {
        const savedData = localStorage.getItem('apodData');
        const lastFetchDate = localStorage.getItem('lastFetchDate');
        const currentDate = getCurrentDate(); // Παράγει τη σημερινή ημερομηνία σε μορφή YYYY-MM-DD
    
        if (savedData && lastFetchDate === currentDate) {
            // Αν τα δεδομένα υπάρχουν και είναι από την τρέχουσα ημέρα
            setApodData(JSON.parse(savedData));
            setLoading(false);
        } else {
            // Αν δεν υπάρχουν δεδομένα ή είναι παλιά, κάντε νέο αίτημα
            fetch(`https://api.nasa.gov/planetary/apod?api_key=wNu2CW6MkRKeGOLgiAeLxoxVkLPGhQpj0KIqz0Tf`)
                .then(response => response.json())
                .then(data => {
                    // Αποθηκεύστε τα δεδομένα στο localStorage
                    localStorage.setItem('apodData', JSON.stringify(data));
                    localStorage.setItem('lastFetchDate', data.date); // Αποθηκεύστε τη σωστή ημερομηνία από το API
                    setApodData(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching APOD:', error);
                    setError(true);
                    setLoading(false);
                });
        }
    }, []);

    if (loading) {
        return (
            <div className='toloading'>
                <div className='tosvgdapload'>
                        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%"><stop offset="5%" stopColor="#8ed1fc"></stop><stop offset="95%" stopColor="#abb8c3"></stop></linearGradient></defs><path d="M 0,500 L 0,93 C 141.10714285714283,66.44642857142857 282.21428571428567,39.892857142857146 420,50 C 557.7857142857143,60.107142857142854 692.25,106.875 784,144 C 875.75,181.125 924.7857142857142,208.6071428571429 1027,236 C 1129.2142857142858,263.3928571428571 1284.607142857143,290.69642857142856 1440,318 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path><defs><linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%"><stop offset="5%" stopColor="#8ed1fc"></stop><stop offset="95%" stopColor="#abb8c3"></stop></linearGradient></defs><path d="M 0,500 L 0,218 C 162.21428571428572,197.44642857142856 324.42857142857144,176.89285714285714 423,192 C 521.5714285714286,207.10714285714286 556.4999999999999,257.87499999999994 661,296 C 765.5000000000001,334.12500000000006 939.5714285714287,359.6071428571429 1081,382 C 1222.4285714285713,404.3928571428571 1331.2142857142858,423.69642857142856 1440,443 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 250)"></path><defs><linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%"><stop offset="5%" stopColor="#8ed1fc"></stop><stop offset="95%" stopColor="#abb8c3"></stop></linearGradient></defs><path d="M 0,500 L 0,343 C 139.46428571428572,361.69642857142856 278.92857142857144,380.39285714285717 386,382 C 493.07142857142856,383.60714285714283 567.75,368.12500000000006 669,392 C 770.25,415.87499999999994 898.0714285714287,479.1071428571429 1031,515 C 1163.9285714285713,550.8928571428571 1301.9642857142858,559.4464285714286 1440,568 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 250)"></path></svg>
                </div>
                <div className='centerload'>
                        <br/>
                        <div className="skeleton skeleton-title"></div>
                        <div className="skeleton skeleton-image"></div>
                        <div className="skeleton skeleton-date"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-end2"></div>
                        <div className="skeleton skeleton-end1"></div>
                </div>
                <br/><br/><br/>
            </div>
        );
    }    

    if (error) {
        return <div className='errorDiv'>
            <p>Error fetching APOD data, please try again later!</p>
            <img src={MilkyWay} className='mwImage'/>
            <br/>
            <small>Image from <a href='https://en.wikipedia.org/wiki/Milky_Way#/media/File:ESO-VLT-Laser-phot-33a-07.jpg'>Wikipedia</a></small>
            </div>;
    }

    if (!apodData) {
        return null;
    }

    return (
        <div className='toolodap'>
            <div className='tosvgdap'>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%"><stop offset="5%" stopColor="#8ed1fc"></stop><stop offset="95%" stopColor="#abb8c3"></stop></linearGradient></defs><path d="M 0,500 L 0,93 C 141.10714285714283,66.44642857142857 282.21428571428567,39.892857142857146 420,50 C 557.7857142857143,60.107142857142854 692.25,106.875 784,144 C 875.75,181.125 924.7857142857142,208.6071428571429 1027,236 C 1129.2142857142858,263.3928571428571 1284.607142857143,290.69642857142856 1440,318 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path><defs><linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%"><stop offset="5%" stopColor="#8ed1fc"></stop><stop offset="95%" stopColor="#abb8c3"></stop></linearGradient></defs><path d="M 0,500 L 0,218 C 162.21428571428572,197.44642857142856 324.42857142857144,176.89285714285714 423,192 C 521.5714285714286,207.10714285714286 556.4999999999999,257.87499999999994 661,296 C 765.5000000000001,334.12500000000006 939.5714285714287,359.6071428571429 1081,382 C 1222.4285714285713,404.3928571428571 1331.2142857142858,423.69642857142856 1440,443 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 250)"></path><defs><linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%"><stop offset="5%" stopColor="#8ed1fc"></stop><stop offset="95%" stopColor="#abb8c3"></stop></linearGradient></defs><path d="M 0,500 L 0,343 C 139.46428571428572,361.69642857142856 278.92857142857144,380.39285714285717 386,382 C 493.07142857142856,383.60714285714283 567.75,368.12500000000006 669,392 C 770.25,415.87499999999994 898.0714285714287,479.1071428571429 1031,515 C 1163.9285714285713,550.8928571428571 1301.9642857142858,559.4464285714286 1440,568 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 250)"></path></svg>
            </div>
            <div className="containerdap">
                <div className="kinito" id="kinitoDiv">
                        <br/>
                        <div className='kentrototitle'><span id="apodCaption">{apodData.title}</span></div><br/>
                        <div className="image-container">
                            {/* Εμφάνισε skeleton αν: 
                                - είναι image ΚΑΙ δεν έχει φορτώσει 
                                - είναι video ΚΑΙ δεν έχει φορτώσει 
                            */}
                            {apodData.media_type === 'image' && !imageLoaded && (
                                <div className="skeleton skeleton-image"></div>
                            )}

                            {apodData.media_type === 'image' && (
                                <img
                                    src={apodData.url}
                                    alt={apodData.title}
                                    onLoad={() => setImageLoaded(true)}
                                    style={{ display: imageLoaded ? 'block' : 'none' }}
                                    className="NasaImg"
                                />
                            )}

                            {apodData.media_type === 'video' && !imageLoaded && (
                                <div className="skeleton skeleton-image"></div>
                            )}

                            {apodData.media_type === 'video' && (
                                <iframe
                                    width="100%"
                                    height="600"
                                    className='video'
                                    src={apodData.url}
                                    title={apodData.title}
                                    frameBorder="1"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    onLoad={() => setImageLoaded(true)}
                                    style={{ display: imageLoaded ? 'block' : 'none' }}
                                ></iframe>
                            )}
                        </div>
                        <br />
                        <div className='todatedeksia'>
                            <span id="apodDate">{convertDate(apodData.date)}</span>
                        </div>
                        <p><strong>Explanation:</strong></p>
                        <p id="apodExplanation">{apodData.explanation}</p>
                        <div className='references'>
                            <span>References:</span>
                            <a href="https://apod.nasa.gov/apod/" className="toa1">Apod.nasa.gov</a><br/>
                            <span>Data provided by NASA Astronomy Picture of the Day (APOD)</span>
                            <a href="https://api.nasa.gov/planetary/apod" className="toa1">API</a>
                        </div>
                        <div className='monoKin'>
                            <br/>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Dap;