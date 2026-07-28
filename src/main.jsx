import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const artworks = [
  {
    "src": "/placeholders/artwork-01.jpg",
    "alt": "Classical oil painting with putti and a dog"
  },
  {
    "src": "/placeholders/artwork-02.jpg",
    "alt": "Abstract mixed media painting in black and white"
  },
  {
    "src": "/placeholders/artwork-03.webp",
    "alt": "Contemporary artwork placeholder"
  },
  {
    "src": "/placeholders/artwork-04.jpg",
    "alt": "Urban landscape artwork placeholder"
  },
  {
    "src": "/placeholders/artwork-05.jpg",
    "alt": "Horse painting placeholder"
  },
  {
    "src": "/placeholders/artwork-06.jpg",
    "alt": "Venus painting placeholder"
  },
  {
    "src": "/placeholders/artwork-07.jpg",
    "alt": "Contemporary figure artwork placeholder"
  },
  {
    "src": "/placeholders/artwork-08.jpg",
    "alt": "Abstract artwork placeholder"
  }
];

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">Nelly Liu</a>
        <div className="navLinks">
          <a href="#works">Works</a>
          <a href="#about">About</a>
          <a href="#exhibitions">Exhibitions</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="heroText">
          <p className="eyebrow">Artist portfolio preview</p>
          <h1>Nelly Liu</h1>
          <p className="lead">A refined digital home for painting, image-making and future exhibition records.</p>
          <div className="heroActions">
            <a className="button primary" href="#works">View selected works</a>
            <a className="button secondary" href="mailto:hello@nellyliu.art">Contact studio</a>
          </div>
        </div>
        <div className="heroImage">
          <img src={artworks[1].src} alt="Artwork placeholder preview" />
          <span>Preview image placeholder</span>
        </div>
      </section>

      <section className="intro">
        <p>
          This preview website uses artwork images from the UniCredit Art Collection as temporary placeholders only.
          Final artwork photography, captions, biography and exhibition details can be replaced later.
        </p>
      </section>

      <section id="works" className="section">
        <div className="sectionHead">
          <p className="eyebrow">Selected works</p>
          <h2>Paintings and studies</h2>
          <p>Placeholder curation for layout preview. Each work card is ready for final title, year, medium and dimensions.</p>
        </div>
        <div className="gallery">
          {artworks.map((work, index) => (
            <article className="workCard" key={work.src}>
              <div className="workImage"><img src={work.src} alt={work.alt} loading="lazy" /></div>
              <div className="workMeta">
                <p className="workNo">{String(index + 1).padStart(2, '0')}</p>
                <h3>Untitled Placeholder {index + 1}</h3>
                <p>Year, medium and dimensions to be confirmed</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div>
          <p className="eyebrow">About the artist</p>
          <h2>Nelly Liu creates quiet visual spaces between memory, material and observation.</h2>
        </div>
        <div className="aboutCopy">
          <p>
            This section is prepared as a concise artist biography area. It can later include Nelly Liu's statement, education,
            practice, exhibition history and collection notes.
          </p>
          <p>
            The design keeps the artwork at the centre: generous white space, editorial typography, calm transitions and a simple
            archive structure for future updates.
          </p>
        </div>
      </section>

      <section id="exhibitions" className="section muted">
        <div className="sectionHead">
          <p className="eyebrow">Exhibitions</p>
          <h2>Upcoming and past records</h2>
        </div>
        <div className="timeline">
          <div><span>2026</span><strong>Portfolio launch</strong><p>Artist website preview and archive structure.</p></div>
          <div><span>2025</span><strong>Exhibition title placeholder</strong><p>Venue, city and short description to be updated.</p></div>
          <div><span>2024</span><strong>Group show placeholder</strong><p>Record can include press links, installation images and essays.</p></div>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Studio contact</p>
        <h2>For artwork enquiries, collaborations and exhibition opportunities.</h2>
        <a className="button primary" href="mailto:hello@nellyliu.art">hello@nellyliu.art</a>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Nelly Liu. All rights reserved.</p>
        <p>Preview placeholders sourced from UniCredit Art Collection for layout reference only.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
