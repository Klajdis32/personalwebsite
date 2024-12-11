import './dap.css';
import React, { useState, useEffect } from 'react';

const Dap = () => {
    const [apodData, setApodData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const nasaKey = process.env.REACT_APP_NASA_KEY;

    const convertDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`)
            .then(response => response.json())
            .then(data => {
                data.date = convertDate(data.date);
                setApodData(data);
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            })
            .catch(error => {
                console.error('Error fetching APOD:', error);
                setError(true);
                setLoading(false);
            });
    }, [nasaKey]);

    if (loading) {
        return (
            <div className='toloading'>
                <div className='tosvgdapload'>
                        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%"><stop offset="5%" stop-color="#8ed1fc"></stop><stop offset="95%" stop-color="#abb8c3"></stop></linearGradient></defs><path d="M 0,500 L 0,93 C 141.10714285714283,66.44642857142857 282.21428571428567,39.892857142857146 420,50 C 557.7857142857143,60.107142857142854 692.25,106.875 784,144 C 875.75,181.125 924.7857142857142,208.6071428571429 1027,236 C 1129.2142857142858,263.3928571428571 1284.607142857143,290.69642857142856 1440,318 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path><defs><linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%"><stop offset="5%" stop-color="#8ed1fc"></stop><stop offset="95%" stop-color="#abb8c3"></stop></linearGradient></defs><path d="M 0,500 L 0,218 C 162.21428571428572,197.44642857142856 324.42857142857144,176.89285714285714 423,192 C 521.5714285714286,207.10714285714286 556.4999999999999,257.87499999999994 661,296 C 765.5000000000001,334.12500000000006 939.5714285714287,359.6071428571429 1081,382 C 1222.4285714285713,404.3928571428571 1331.2142857142858,423.69642857142856 1440,443 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 250)"></path><defs><linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%"><stop offset="5%" stop-color="#8ed1fc"></stop><stop offset="95%" stop-color="#abb8c3"></stop></linearGradient></defs><path d="M 0,500 L 0,343 C 139.46428571428572,361.69642857142856 278.92857142857144,380.39285714285717 386,382 C 493.07142857142856,383.60714285714283 567.75,368.12500000000006 669,392 C 770.25,415.87499999999994 898.0714285714287,479.1071428571429 1031,515 C 1163.9285714285713,550.8928571428571 1301.9642857142858,559.4464285714286 1440,568 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 250)"></path></svg>
                </div>
                <div className='centerload'>
                        <br/>
                        <div className="skeleton skeleton-title"></div>
                        <div className="skeleton skeleton-image"></div>
                        <div className="skeleton skeleton-date"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-end1"></div>
                        <div className="skeleton skeleton-end2"></div>
                </div>
                <br/><br/><br/>
            </div>
        );
    }    

    if (error) {
        return <div className='errorDiv'>
                <div className='centererrdap'>Error fetching APOD data</div>
                <div className='tosvgdapload'>
                    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%"><stop offset="5%" stop-color="#8ed1fc"></stop><stop offset="95%" stop-color="#abb8c3"></stop></linearGradient></defs><path d="M 0,500 L 0,93 C 141.10714285714283,66.44642857142857 282.21428571428567,39.892857142857146 420,50 C 557.7857142857143,60.107142857142854 692.25,106.875 784,144 C 875.75,181.125 924.7857142857142,208.6071428571429 1027,236 C 1129.2142857142858,263.3928571428571 1284.607142857143,290.69642857142856 1440,318 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path><defs><linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%"><stop offset="5%" stop-color="#8ed1fc"></stop><stop offset="95%" stop-color="#abb8c3"></stop></linearGradient></defs><path d="M 0,500 L 0,218 C 162.21428571428572,197.44642857142856 324.42857142857144,176.89285714285714 423,192 C 521.5714285714286,207.10714285714286 556.4999999999999,257.87499999999994 661,296 C 765.5000000000001,334.12500000000006 939.5714285714287,359.6071428571429 1081,382 C 1222.4285714285713,404.3928571428571 1331.2142857142858,423.69642857142856 1440,443 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 250)"></path><defs><linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%"><stop offset="5%" stop-color="#8ed1fc"></stop><stop offset="95%" stop-color="#abb8c3"></stop></linearGradient></defs><path d="M 0,500 L 0,343 C 139.46428571428572,361.69642857142856 278.92857142857144,380.39285714285717 386,382 C 493.07142857142856,383.60714285714283 567.75,368.12500000000006 669,392 C 770.25,415.87499999999994 898.0714285714287,479.1071428571429 1031,515 C 1163.9285714285713,550.8928571428571 1301.9642857142858,559.4464285714286 1440,568 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 250)"></path></svg>
                </div>
            </div>;
    }

    if (!apodData) {
        return null;
    }

    return (
        <div className='toolodap'>
            <div className='tosvgdap'>
          <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%"><stop offset="5%" stop-color="#8ed1fc"></stop><stop offset="95%" stop-color="#abb8c3"></stop></linearGradient></defs><path d="M 0,500 L 0,93 C 141.10714285714283,66.44642857142857 282.21428571428567,39.892857142857146 420,50 C 557.7857142857143,60.107142857142854 692.25,106.875 784,144 C 875.75,181.125 924.7857142857142,208.6071428571429 1027,236 C 1129.2142857142858,263.3928571428571 1284.607142857143,290.69642857142856 1440,318 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path><defs><linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%"><stop offset="5%" stop-color="#8ed1fc"></stop><stop offset="95%" stop-color="#abb8c3"></stop></linearGradient></defs><path d="M 0,500 L 0,218 C 162.21428571428572,197.44642857142856 324.42857142857144,176.89285714285714 423,192 C 521.5714285714286,207.10714285714286 556.4999999999999,257.87499999999994 661,296 C 765.5000000000001,334.12500000000006 939.5714285714287,359.6071428571429 1081,382 C 1222.4285714285713,404.3928571428571 1331.2142857142858,423.69642857142856 1440,443 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 250)"></path><defs><linearGradient id="gradient" x1="0%" y1="43%" x2="100%" y2="57%"><stop offset="5%" stop-color="#8ed1fc"></stop><stop offset="95%" stop-color="#abb8c3"></stop></linearGradient></defs><path d="M 0,500 L 0,343 C 139.46428571428572,361.69642857142856 278.92857142857144,380.39285714285717 386,382 C 493.07142857142856,383.60714285714283 567.75,368.12500000000006 669,392 C 770.25,415.87499999999994 898.0714285714287,479.1071428571429 1031,515 C 1163.9285714285713,550.8928571428571 1301.9642857142858,559.4464285714286 1440,568 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 250)"></path></svg>
          </div>
        <div className="containerdap">
            <div className="kinito" id="kinitoDiv">
                <p><div className='kentrototitle'><span id="apodCaption">{apodData.title}</span></div><br/>
            
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
                    <br/>
                    <div className='todatedeksia'><span id="apodDate">{apodData.date}</span></div>
                    <strong>Explanation:<br/><br/></strong> <span id="apodExplanation">{apodData.explanation}</span><br/><br/>
                    
                    <strong>References:</strong> <a href="https://apod.nasa.gov/apod/" className="toa1">Apod.nasa.gov</a><br/><br/>
                    <strong>Data provided by NASA Astronomy Picture of the Day (APOD)</strong> <a href="https://api.nasa.gov/planetary/apod" className="toa1">API</a></p>
                </div>
            </div>
        </div>
    );
}
 
export default Dap; 