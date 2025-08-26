import React, { useState, useEffect } from 'react';
import { useSearchParams }   from 'react-router-dom';
import ReactMarkdown         from 'react-markdown';
import remarkGfm             from 'remark-gfm';
import rehypeRaw             from 'rehype-raw'; // αν θες να επιτρέπεις raw <video> στο MD
import './post.css';
import postsData             from '../Posts/Posts';

// Εικόνες από ../Md/Mdimg
const mdImages = require.context(
  '../Md/Mdimg',
  false,
  /\.(png|jpe?g|svg)$/
);

// Βίντεο από ../Md/Mdmp4
const mdVideos = require.context(
  '../Md/Mdmp4',
  false,
  /\.(mp4|webm|ogg)$/
);

// helper χαρτογράφησης για src (εικόνα ή βίντεο) - καθαρό JS
const mapMediaSrc = (url) => {
  if (typeof url !== 'string' || !url) return url;

  if (url.startsWith('./Mdimg/')) {
    const fileName = url.replace('./Mdimg/', '');
    try {
      return mdImages(`./${fileName}`);
    } catch (e) {
      return url;
    }
  }

  if (url.startsWith('./Mdmp4/')) {
    const fileName = url.replace('./Mdmp4/', '');
    try {
      return mdVideos(`./${fileName}`);
    } catch (e) {
      return url;
    }
  }

  return url;
};

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
          <p className="postDate">{post.Date}, {post.Sigrafeas}</p>
        </div>
        <div className="postImgdiv">
          <img
            src={post.imageEksw}
            alt={post.Titlos}
            className="postImg"
          />
        </div>

        <br/><br/>
        <h2>Summary</h2>
        <p className="postText">{post.Keimeno}</p>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]} // προαιρετικό: επιτρέπει raw <video> στο MD
          urlTransform={(url, key) => {
            if (key === 'src') return mapMediaSrc(url);
            return url;
          }}
          components={{
            // εικόνες όπως πριν
            img: ({ node, ...props }) => (
              <img {...props} className="mdImage" />
            ),

            // raw <video> tags μέσα στο MD (αν τα χρησιμοποιήσεις)
            video: ({ node, src, ...props }) => (
            <video
              {...props}
              src={mapMediaSrc(src || '')}
              controls
              className="mdVideo"
            />
            ),

            // αυτόματη μετατροπή link -> video player αν δείχνει σε .mp4/.webm/.ogg
            a: ({ node, href, children, ...props }) => {
              const url = href || '';
              const isVideo = /\.(mp4|webm|ogg)$/i.test(url);
              if (isVideo) {
                return (
                  <video
                    src={mapMediaSrc(url)}
                    controls
                    className="mdVideo"
                  />
                );
              }
              return (
                <a href={url} {...props} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              );
            },
          }}
        >
          {mdText}
        </ReactMarkdown>

        {post.Link && (
          <>
            <h2>Links</h2>
            <a href={post.Link} target="_blank" rel="noopener noreferrer" className='postLink'>
              {post.Link}
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;