import React, { useState } from 'react';
import './uni.css';
import fakelos from '../../Assets/folder.png';
import pdfIcon from '../../Assets/pdf.png';
import uniData from '../Posts/Ergasies.js';

const Uni = () => {
  const [openIndexes, setOpenIndexes] = useState(new Set());

  const toggleItem = (idx) => {
    setOpenIndexes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(idx)) {
        newSet.delete(idx); // αν είναι ήδη ανοιχτό, κλείσε το
      } else {
        newSet.add(idx);    // αλλιώς άνοιξε το
      }
      return newSet;
    });
  };

  return (
    <div className="Uni">
      <h1>Here you can find the work I have completed at uni.</h1>

      {uniData.map((item, idx) => (
        <div className="fakeloi" key={idx}>
          <div className="fakelos">
            <img src={fakelos} alt="University Project" />
            <p 
              onClick={() => toggleItem(idx)} 
              style={{ cursor: 'pointer', userSelect: 'none' }}
              aria-expanded={openIndexes.has(idx)}
            >
              {item.Onoma}
            </p>
          </div>

          {openIndexes.has(idx) && (
            <div className="taPdfs">
              {item.pdfs.map((pdf) => (
                <div className="pdf" key={`${idx}-${pdf.name}`}>
                  <img src={pdfIcon} alt="PDF icon" />
                  <a href={pdf.src} target="_blank" rel="noopener noreferrer">
                    {pdf.name}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Uni;