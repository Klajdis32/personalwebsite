import React, { useState } from 'react';
import books from './BooksDB.js'; 
import './books.css';
import Pin from "../assets/pin.png";
import xeraki from '../assets/output-onlinegiftools.gif';

const Books = () => {
    const [infoVisible, setInfoVisible] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(books);
    const [searched, setSearched] = useState(false);
    const [toxeraki, setToxeraki] = useState(false);

    const toggleDivVisibility = (bookId) => {
        setToxeraki(true);
        setInfoVisible(prevState => ({
        ...prevState,
        [bookId]: !prevState[bookId]
        }));
    };

    const handleSearch = (event) => {
        event.preventDefault();
        setSearched(true);
        const filtered = books.filter(book => {
            const lowerSearchTerm = searchTerm.toLowerCase();
            return (
                book.Titlos.toLowerCase().includes(lowerSearchTerm) ||
                book.Katigoria.toLowerCase().includes(lowerSearchTerm) ||
                book.sxolio_simperasma.toLowerCase().includes(lowerSearchTerm) 
            );
        });
        setFilteredBooks(filtered);
    }
    

    return (  
        <div className="container">
            <br/>
            <div className='center'><h2>Books 📚 i have read and liked 👍</h2></div>
            <br/>
            <form role="search" onSubmit={handleSearch}>
                <input 
                    id="search" 
                    type="search" 
                    placeholder="Αναζήτηση..." 
                    autoFocus 
                    required 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Go</button>    
            </form>
            <br/><br/>

                {searched ? null : (
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
                            <br/>
                        </div>
                        <br/>
                    </div>
                )}

                <div id="dynamicContentContainer">
                    {filteredBooks.length === 0 ? (
                        <p className='notfound'>No books was found that contains the word - phrase: <strong>"{searchTerm}"</strong>...</p>
                    ) : (
                    filteredBooks.map((book, index) => (
                        <div key={index}>
                            <div className="todivtoybiblioy" onClick={() => toggleDivVisibility(index)}>
                                <div className="left-item2">
                                    <p>{book.Titlos}</p>
                                </div>
                                {toxeraki ? null : (book.xeraki ? <img src={xeraki} alt="" id="xerakigif" /> : null)}
                            </div>
                            {infoVisible[index] && (
                                <div className="toinfo">
                                    <br/>
                                    <p><strong>Category: </strong>{book.Katigoria}</p>
                                    <p><strong>Comment / Conclusion: </strong>{book.sxolio_simperasma}</p>
                                    <br/>
                                </div>
                            )}
                            <br/> 
                        </div>      
                    ))
                )}
                </div>

                <div className="waves" id="loadingDiv">
                    <img src="images/satellite.gif" alt=""  />
                </div>

                <br/><br/><br/><br/><br/><br/>
            </div>
    );
}
 
export default Books; 