import React from 'react';
import './uni.css';
import fakelos from '../../Assets/folder.png';
import pdfIcon from '../../Assets/pdf.png';
import uniData from '../Posts/Ergasies.js';

const Uni = () => {
  return (
    <div className="Uni">
      <h1>Here you can find the work I have completed at uni.</h1>

      {/* Για κάθε "εργασία" στο uniData */}
      {uniData.map(item => (
        <div className="fakeloi" key={item.id}>
          
          {/* Φάκελος + τίτλος */}
          <div className="fakelos">
            <img src={fakelos} alt="University Project" />
            <p>{item.Onoma}</p>
          </div>

          {/* Όλα τα pdfs αυτού του item */}
          <div className="taPdfs">
            {item.pdfs.map((pdf) => (
            <div className="pdf" key={`${item.id}-${pdf.name}`}>
              <img src={pdfIcon} alt="PDF icon" />
              <a href={pdf.src} target="_blank" rel="noopener noreferrer">
                {pdf.name}
              </a>
            </div>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Uni;