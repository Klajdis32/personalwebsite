import React, { useState } from 'react';
import './uni.css';
import fakelos from '../../Assets/folder.png';
import pdfIcon from '../../Assets/pdf.png';
import uniData from '../Posts/Ergasies.js';

const Uni = () => {
  const [openIndexes, setOpenIndexes] = useState(new Set());
  const totalPdfs = uniData.reduce((total, item) => total + item.pdfs.length, 0);

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
      <section className="uniIntro">
        <p className="uniEyebrow">Academic archive</p>
        <h1>University work &amp; lab reports</h1>
        <p className="uniDescription">
          A collection of reports and exercises from physics, electronics,
          cybersecurity, and laboratory courses.
        </p>
        <div className="uniStats" aria-label={`${totalPdfs} documents in ${uniData.length} categories`}>
          <span><strong>{totalPdfs}</strong> PDF documents</span>
          <span><strong>{uniData.length}</strong> categories</span>
        </div>
      </section>

      <section className="uniLibrary" aria-label="University documents">
        {uniData.map((item, idx) => {
          const isOpen = openIndexes.has(idx);
          return (
            <article className={`fakeloi ${isOpen ? 'isOpen' : ''}`} key={item.Onoma}>
              <button
                type="button"
                className="fakelos"
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
                aria-controls={`pdfs-${idx}`}
              >
                <span className="folderIcon" aria-hidden="true">
                  <img src={fakelos} alt="" />
                </span>
                <span className="folderDetails">
                  <span className="folderTitle">{item.Onoma}</span>
                  <span className="folderCount">
                    {item.pdfs.length} {item.pdfs.length === 1 ? 'document' : 'documents'}
                  </span>
                </span>
                <span className="folderChevron" aria-hidden="true">⌄</span>
              </button>

              <div
                id={`pdfs-${idx}`}
                className={`taPdfs ${isOpen ? 'open' : ''}`}
                role="region"
                aria-hidden={!isOpen}
              >
                <div className="pdfGrid">
                  {item.pdfs.map((pdf) => (
                    <a
                      className="pdf"
                      key={`${idx}-${pdf.name}`}
                      href={pdf.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={isOpen ? 0 : -1}
                    >
                      <span className="pdfIcon" aria-hidden="true">
                        <img src={pdfIcon} alt="" />
                      </span>
                      <span className="pdfDetails">
                        <span className="pdfName">{pdf.name}</span>
                        <span className="pdfAction">Open PDF <span aria-hidden="true">↗</span></span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Uni;
