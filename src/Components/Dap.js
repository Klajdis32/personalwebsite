import './dap.css';
import React, { useState, useEffect } from 'react';


const Dap = () => {
    const [apodData, setApodData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const nasaKey = process.env.REACT_APP_NASA_KEY;

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`)
            .then(response => response.json())
            .then(data => {
                setApodData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching APOD:', error);
                setError(true);
                setLoading(false);
            });
    }, [nasaKey]);

    if (loading) {
        return <div className='centerload'>Loading...</div>;
    }

    if (error) {
        return <div className='center'>Error fetching APOD data</div>;
    }

    if (!apodData) {
        return null;
    }

    return (
        <div className="container">

            <div className="loading" id="loadingDiv">
                <img src="images/marsloading.gif" alt="" />
            </div>

            <div className="toerror" id="errorDiv">
                <img src="images/error.png" alt="" />
            </div>

            <div className="kinito" id="kinitoDiv">
                <div className='center'><h2>🌌 NASA's Astronomy Picture<br/>- Video of the Day</h2></div>
                <br/>
                <div className="image-container" id="imageContainer" >
                    {apodData.media_type === 'image' ? (
                        <img src={apodData.url} className="NasaImg" alt={apodData.title} />
                    ) : apodData.media_type === 'video' ? (
                        <iframe
                            width="90%"
                            height="600"
                            src={apodData.url}
                            title={apodData.title}
                            frameBorder="1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    ) : null}
                    <br/>
                </div>          
                
                <p><strong>Caption:</strong> <span id="apodCaption">{apodData.title}</span><br/><br/>
                <strong>Date:</strong> <span id="apodDate">{apodData.date}</span><br/><br/>
                <strong>Explanation:<br/><br/></strong> <span id="apodExplanation">{apodData.explanation}</span><br/><br/>
                
                <strong>References:</strong> <a href="https://apod.nasa.gov/apod/" className="toa1">Apod.nasa.gov</a><br/><br/>
                <strong>Data provided by NASA Astronomy Picture of the Day (APOD)</strong> <a href="https://api.nasa.gov/planetary/apod" className="toa1">API</a></p>
                <br/><br/><br/><br/><br/><br/>
            </div>
        </div>
    );
}
 
export default Dap; 