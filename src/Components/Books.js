import React, { useState } from 'react';
import books from './BooksDB.js'; 
import './books.css';
import Pin from "../Assets/pin.png";
import xeraki from '../Assets/output-onlinegiftools.gif';

const Books = () => {
    const [infoVisible, setInfoVisible] = useState({});

    const toggleDivVisibility = (bookId) => {
        setInfoVisible(prevState => ({
        ...prevState,
        [bookId]: !prevState[bookId]
        }));
    };

    return (  
        <div className="container">
            <br/>
            <div className='center'><h2>Books 📚 i have read and liked 👍</h2></div>
            <br/>
            <form role="search">
                <input id="search" type="search" placeholder="Αναζήτηση..." autoFocus required />
                <button type="submit">Go</button>    
            </form>
            <br/><br/>

                <div id="tokrifo">
                    <div className="todivtoybiblioyPIN">
                        <div className="left-item2">
                            <p>Make Your Bed: Little Things That Can Change Your Life...And Maybe the World, by William H. McRaven</p>
                        </div>

                        <img src={Pin} alt="" />
                    </div>

                    <div className="toinfoPIN">
                        <br/>
                        <p><strong>Category: </strong>Personal Growth & Self improvement</p>
                        <p><strong>Comment / Conclusion: </strong>The basic idea of the book is that: If you want to change the world, start off by making your bed. If every day we wake up we make our bed, this will give us motivation to continue doing things during the day, this also reinforces the fact that small things in life have enormous significance.</p>
                    </div>
                    <br/>
                </div>

                <div id="dynamicContentContainer">
                    {books.map((book, index) => (
                        <div key={index}>
                            <div className="todivtoybiblioy" onClick={() => toggleDivVisibility(index)}>
                                <div className="left-item2">
                                    <p>{book.Titlos}</p>
                                </div>
                                {book.xeraki ? <img src={xeraki} alt="" id="xerakigif" /> : null}
                            </div>
                            {infoVisible[index] && (
                                <div className="toinfo">
                                <br/>
                                <p><strong>Category: </strong>{book.Katigoria}</p>
                                <p><strong>Comment / Conclusion: </strong>{book.sxolio_simperasma}</p>
                                </div>
                            )}
                            <br/> 
                        </div>      
                    ))}
                </div>

                <div className="waves" id="loadingDiv">
                    <img src="images/satellite.gif" alt=""  />
                </div>

                <br/><br/><br/><br/><br/><br/>
            </div>
    );
}
 
export default Books; 