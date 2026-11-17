import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const keyParam = searchParams.get('key');
  const postId = keyParam ? parseInt(keyParam, 10) : null;
  const post = postsData.find(p => p.id === postId);
  const [mdText, setMdText] = useState('');
  const [shareStatus, setShareStatus] = useState('');

  const shareUrl = post?.slug
    ? `https://klainti.gr/projects/${post.slug}/`
    : window.location.href;

  const goBack = () => {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    if (!post?.md) return;

    fetch(post.md)
      .then(res => res.ok ? res.text() : Promise.reject())
      .then(text => setMdText(text))
      .catch(() => setMdText('## Σφάλμα\nΔεν μπόρεσε να φορτωθεί το περιεχόμενο.'));
  }, [post]);

  useEffect(() => {
    if (!post) {
      document.title = 'Project not found | Klajdi Cami';
      return;
    }

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
      <main className="Post postErrorPage">
        <button type="button" className="postBackButton" onClick={goBack}>
          <span aria-hidden="true">←</span> Back
        </button>

        <section className="postErrorCard">
          <p className="postEyebrow">404 · Project not found</p>
          <h1>This project isn&apos;t here.</h1>
          <p>
            The link may be incorrect, or the project may have been moved.
            You can return to the portfolio and explore the available work.
          </p>
          <Link to="/" className="errorHomeLink">
            Explore all projects <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="Post">
      <nav className="postNavigation" aria-label="Project navigation">
        <button type="button" className="postBackButton" onClick={goBack}>
          <span aria-hidden="true">←</span> Back
        </button>
        <Link to="/" className="allProjectsLink">All projects</Link>
      </nav>

      <header className="postHero">
        <div className="postHeroText">
          <p className="postEyebrow">{post.Katigoria || 'Selected project'}</p>
          <h1>{post.Titlos}</h1>
          <div className="postMeta">
            <span>{post.Date}</span>
            <span aria-hidden="true">·</span>
            <span>By {post.Sigrafeas}</span>
          </div>
        </div>
        <div className="postImgdiv">
          <img
            src={post.imageEksw}
            alt={post.Titlos}
            className="postImg"
          />
        </div>
      </header>

      <section className="postSummary">
        <div className="summaryHeading">
          <p className="postEyebrow">Overview</p>
          <h2>About this project</h2>
        </div>
        <p className="postText">{post.Keimeno}</p>

      </section>

      <article className="markdown-body">
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
          <section className="projectLinks">
            <p className="postEyebrow">Project link</p>
            <h2>Explore the source</h2>
            <a
              href={post.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="postLink"
            >
              Open project repository <span aria-hidden="true">↗</span>
            </a>
          </section>
        )}

        <section className="postShareFooter">
          <div>
            <p className="postEyebrow">Share this project</p>
            <h2>Know someone who might find it interesting?</h2>
          </div>
          <div className="shareProject">
            <button type="button" className="shareButton" onClick={shareProject}>
              Share project <span aria-hidden="true">↗</span>
            </button>
            <span className="shareStatus" role="status">{shareStatus}</span>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Post;
