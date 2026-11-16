const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');
const projectsDir = path.join(publicDir, 'projects');
const imagesDir = path.join(publicDir, 'social-assets');

const projects = [
  {
    id: 7,
    slug: 'nasa-planet-x-spherex-sky-time-lapse-viewer',
    title: 'NASA Planet X — SPHEREx Sky Time-Lapse Viewer',
    description: 'An interactive viewer for comparing SPHEREx infrared observations and finding brightness changes across the sky.',
    image: 'nasa-planet-x-spherex.png',
    source: 'src/Assets/NasaPlanetXSpherex.png',
  },
  {
    id: 6,
    slug: 'computational-materials-science-projects',
    title: 'Computational Materials Science Projects',
    description: 'Atomistic simulations and materials-science projects using LAMMPS, Quantum ESPRESSO, OVITO, and Python.',
    image: 'computational-materials.png',
    source: 'src/Assets/Lammps.png',
  },
  {
    id: 5,
    slug: 'lm35-temperature-meter-arduino-uno',
    title: 'LM35 Temperature Meter – Arduino Uno',
    description: 'A simple Arduino temperature meter using an LM35 sensor and a 16x2 LCD display.',
    image: 'lm35-temperature-meter.png',
    source: 'src/Assets/TempMeter.png',
  },
  {
    id: 4,
    slug: 'react-express-mysql-authentication-system',
    title: 'React-Express.js-MySQL Authentication System',
    description: 'A full-stack authentication system built with React, Express.js, and MySQL.',
    image: 'react-express-mysql.jpg',
    source: 'src/Assets/MysqlExReact.jpg',
  },
  {
    id: 3,
    slug: 'lunar-lander-ai-agent',
    title: 'Lunar Lander AI Agent',
    description: 'A reinforcement-learning agent trained with PPO to land a lunar module safely.',
    image: 'lunar-lander.png',
    source: 'src/Assets/LunarLander.png',
  },
  {
    id: 2,
    slug: 'llama-llm-chat-interface',
    title: 'Chat Interface for Llama LLM',
    description: 'A responsive React chat interface powered by Meta’s Llama language model.',
    image: 'llama-chat.png',
    source: 'src/Assets/llamachat.png',
  },
  {
    id: 1,
    slug: 'rocket-game-with-python',
    title: 'Rocket Game With Python',
    description: 'A space-themed Pygame project with enemies, shooting, levels, and increasing difficulty.',
    image: 'rocket-game.png',
    source: 'src/Assets/rocket.png',
  },
];

const escapeAttribute = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

fs.mkdirSync(projectsDir, { recursive: true });
fs.mkdirSync(imagesDir, { recursive: true });

for (const project of projects) {
  const pageDir = path.join(projectsDir, project.slug);
  const pageUrl = `https://klainti.gr/projects/${project.slug}/`;
  const imageUrl = `https://klainti.gr/social-assets/${project.image}`;
  const appUrl = `https://klainti.gr/#/post?key=${project.id}`;
  const title = escapeAttribute(project.title);
  const description = escapeAttribute(project.description);

  fs.mkdirSync(pageDir, { recursive: true });
  fs.copyFileSync(path.join(root, project.source), path.join(imagesDir, project.image));
  fs.writeFileSync(path.join(pageDir, 'index.html'), `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title} | Klajdi Cami</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${pageUrl}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Klajdi Cami" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:alt" content="${title}" />
    <meta property="og:url" content="${pageUrl}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <meta http-equiv="refresh" content="0; url=${appUrl}" />
    <script>window.location.replace(${JSON.stringify(appUrl)});</script>
  </head>
  <body>
    <p>Opening <a href="${appUrl}">${title}</a>…</p>
  </body>
</html>
`);
}

console.log(`Generated ${projects.length} social preview pages.`);
