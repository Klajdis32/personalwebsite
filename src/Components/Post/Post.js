import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import './post.css';
import postsData from '../Posts/Posts';

const mdImages = require.context(
  '../Md/Mdimg',
  false,
  /\.(png|jpe?g|svg)$/
);

const assetImages = require.context(
  '../../Assets',
  false,
  /\.(png|jpe?g|svg)$/
);

const mdVideos = require.context(
  '../Md/Mdmp4',
  false,
  /\.(mp4|webm|ogg)$/
);

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

  if (url.startsWith('./Assets/')) {
    const fileName = url.replace('./Assets/', '');
    try {
      return assetImages(`./${fileName}`);
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
  const keyParam = searchParams.get('key');
  const postId = keyParam ? parseInt(keyParam, 10) : null;
  const post = postsData.find(p => p.id === postId);
  const [mdText, setMdText] = useState('');
  const [shareStatus, setShareStatus] = useState('');

  const shareUrl = post?.slug
    ? `https://klainti.gr/projects/${post.slug}/`
    : window.location.href;

  useEffect(() => {
    if (!post?.md) return;

    fetch(post.md)
      .then(res => res.ok ? res.text() : Promise.reject())
      .then(text => setMdText(text))
      .catch(() => setMdText('## Σφάλμα\nΔεν μπόρεσε να φορτωθεί το περιεχόμενο.'));
  }, [post]);

  useEffect(() => {
    if (!post) return;

    document.title = `${post.Titlos} | Klajdi Cami`;

    const metadata = {
      'meta[property="og:title"]': post.Titlos,
      'meta[property="og:description"]': post.Keimeno,
      'meta[property="og:url"]': shareUrl,
      'meta[name="twitter:title"]': post.Titlos,
      'meta[name="twitter:description"]': post.Keimeno,
    };

    Object.entries(metadata).forEach(([selector, content]) => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute('content', content);
    });
  }, [post, shareUrl]);

  const shareProject = async () => {
    const shareData = {
      title: post.Titlos,
      text: post.Keimeno,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareStatus('Shared');
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setShareStatus('Link copied');
      }
    } catch (error) {
      if (error?.name !== 'AbortError') setShareStatus('Could not share');
    }
  };

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

        <br /><br />

        <h2>Summary</h2>
        <p className="postText">{post.Keimeno}</p>

        <div className="shareProject">
          <button type="button" className="shareButton" onClick={shareProject}>
            Share project
          </button>
          <span className="shareStatus" role="status">{shareStatus}</span>
        </div>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          urlTransform={(url, key) => {
            if (key === 'src') return mapMediaSrc(url);
            return url;
          }}
          components={{
            img: ({ node, className, alt = '', ...props }) => (
              <img
                {...props}
                alt={alt}
                className={`mdImage${className ? ` ${className}` : ''}`}
              />
            ),

            video: ({ node, src, ...props }) => (
              <video
                {...props}
                src={mapMediaSrc(src || '')}
                controls
                className="mdVideo"
              />
            ),

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
                <a
                  href={url}
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              );
            },

            code: ({ inline, className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '');

              if (!inline) {
                return (
                  <pre className={`mdCodeBlock ${match ? `language-${match[1]}` : ''}`}>
                    <code className="mdCode" {...props}>
                      {children}
                    </code>
                  </pre>
                );
              }

              return (
                <code className="mdInlineCode" {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {mdText}
        </ReactMarkdown>

        {post.Link && (
          <>
            <h3>Links</h3>
            <a
              href={post.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="postLink"
            >
              {post.Link}
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
