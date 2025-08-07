import React, { useState, useEffect } from 'react';
import { useSearchParams }   from 'react-router-dom';
import ReactMarkdown         from 'react-markdown';
import remarkGfm             from 'remark-gfm';
import './post.css';
import postsData             from '../Posts/Posts';

// 1) Φορτώνουμε δυναμικά όλες τις εικόνες από το src/Assets/Mdimg
const mdImages = require.context(
  '../Md/Mdimg',      // adjust ανάλογα με τη δομή σου
  false,
  /\.(png|jpe?g|svg)$/
);

const Post = () => {
  const [searchParams] = useSearchParams();
  const keyParam       = searchParams.get('key');
  const postId         = keyParam ? parseInt(keyParam, 10) : null;
  const post           = postsData.find(p => p.id === postId);
  const [mdText, setMdText] = useState('');

  useEffect(() => {
    if (!post?.md) return;
    fetch(post.md)
      .then(res => res.ok ? res.text() : Promise.reject())
      .then(text => setMdText(text))
      .catch(() => setMdText('## Σφάλμα\nΔεν μπόρεσε να φορτωθεί το περιεχόμενο.'));
  }, [post]);

  if (!post) {
    return (
      <div className="Post">
        <p>Το άρθρο δεν βρέθηκε.</p>
      </div>
    );
  }

  return (
    <div className="Post">
      <div className="title">
        <h1>{post.Titlos}</h1>
        <div className="info">
          <p className="postDate">{post.Date}</p>
        </div>
        <div className="postImgdiv">
          <img
            src={post.imageEksw}
            alt={post.Titlos}
            className="postImg"
          />
        </div>

        <br/><br/>
        <h3>Summary</h3>
        <p className="postText">{post.Keimeno}</p>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          // 2) Μετασχηματίζουμε όλα τα URLs, και ειδικά τα './Mdimg/...'
          urlTransform={(url, key, node) => {
            if (key === 'src' && url.startsWith('./Mdimg/')) {
              const fileName = url.replace('./Mdimg/', '');
              try {
                return mdImages(`./${fileName}`);
              } catch {
                return url;
              }
            }
            return url;
          }}
          components={{
    img: ({node, ...props}) => (
      <img
        {...props}
        className='mdImage'
      />
    )
  }}
        >
          {mdText}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Post;