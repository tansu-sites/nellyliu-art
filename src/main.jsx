import React, { useState, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const artworks = [
  {
    "src": "/placeholders/artwork-01.jpg",
    "alt": "古典油畫，描繪天使與犬"
  },
  {
    "src": "/placeholders/artwork-02.jpg",
    "alt": "黑白抽象複合媒材繪畫"
  },
  {
    "src": "/placeholders/artwork-03.webp",
    "alt": "當代藝術作品佔位圖"
  },
  {
    "src": "/placeholders/artwork-04.jpg",
    "alt": "城市風景佔位圖"
  },
  {
    "src": "/placeholders/artwork-05.jpg",
    "alt": "馬匹繪畫佔位圖"
  },
  {
    "src": "/placeholders/artwork-06.jpg",
    "alt": "維納斯繪畫佔位圖"
  },
  {
    "src": "/placeholders/artwork-07.jpg",
    "alt": "當代人物藝術佔位圖"
  },
  {
    "src": "/placeholders/artwork-08.jpg",
    "alt": "抽象藝術佔位圖"
  }
];

function Lightbox({ artworks, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  const work = artworks[index];

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightboxInner" onClick={(e) => e.stopPropagation()}>
        <button className="lightboxClose" onClick={onClose} aria-label="關閉">&times;</button>
        <button className="lightboxArrow lightboxPrev" onClick={onPrev} aria-label="上一張">&#8249;</button>
        <img src={work.src} alt={work.alt} />
        <button className="lightboxArrow lightboxNext" onClick={onNext} aria-label="下一張">&#8250;</button>
        <p className="lightboxCaption">{work.alt}<span className="lightboxCount">{index + 1} / {artworks.length}</span></p>
      </div>
    </div>
  );
}

function App() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i <= 0 ? artworks.length - 1 : i - 1));
  }, []);
  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i >= artworks.length - 1 ? 0 : i + 1));
  }, []);

  return (
    <main>
      {lightboxIndex !== null && (
        <Lightbox
          artworks={artworks}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
      <nav className="nav">
        <a className="brand" href="#top">Nelly Liu.Art｜濃．畫記</a>
        <div className="navLinks">
          <a href="#works">作品</a>
          <a href="#about">關於</a>
          <a href="#exhibitions">展覽</a>
          <a href="#contact">聯繫</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="heroText">
          <p className="eyebrow">藝術家作品集・創作日誌</p>
          <h1>Nelly Liu</h1>
          <p className="lead">以繪畫記錄生活，<br />讓風景、記憶與情感，<br />在色彩之間留下痕跡。</p>
          <p className="englishLead">Painting life, memory and emotion through colour and light.</p>
          <div className="heroActions">
            <a className="button primary" href="#works">瀏覽作品｜Explore Artworks</a>
            <a className="button secondary" href="mailto:mail@nellyliu.com">聯繫工作室｜Contact the Artist</a>
          </div>
        </div>
        <div className="heroImage" onClick={() => setLightboxIndex(1)} style={{ cursor: 'pointer' }}>
          <img src={artworks[1].src} alt="作品預覽佔位圖" />
          <span>預覽佔位圖片</span>
        </div>
      </section>

      <section className="intro">
        <p>
          本預覽網站暫時採用 UniCredit 藝術典藏之作品圖片作為佔位圖。
          正式作品攝影、圖說、個人簡歷及展覽資料將於日後替換。
        </p>
      </section>

      <section id="works" className="section">
        <div className="sectionHead">
          <p className="eyebrow">精選作品</p>
          <h2>繪畫與習作</h2>
          <p>版面預覽用佔位排列。每張作品卡片可填入最終標題、年份、媒材與尺寸。</p>
        </div>
        <div className="gallery">
          {artworks.map((work, index) => (
            <article className="workCard" key={work.src} onClick={() => setLightboxIndex(index)} style={{ cursor: 'pointer' }}>
              <div className="workImage"><img src={work.src} alt={work.alt} loading="lazy" /></div>
              <div className="workMeta">
                <p className="workNo">{String(index + 1).padStart(2, '0')}</p>
                <h3>未命名佔位作品 {index + 1}</h3>
                <p>年份、媒材及尺寸待確認</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div>
          <p className="eyebrow">關於藝術家</p>
          <h2><em>Nelly Liu</em> 在記憶、材質與觀察之間，創造寧靜的視覺空間。</h2>
        </div>
        <div className="aboutCopy">
          <p>
            此區域為藝術家簡歷專區，日後可加入 <em>Nelly Liu</em> 的創作自述、學歷背景、
            創作實踐、展覽經歷及收藏紀錄。
          </p>
          <p>
            設計以作品為核心：充裕的留白、編輯式排版、沉穩的過渡動態，
            以及簡潔的典藏架構，以便日後持續更新。
          </p>
        </div>
      </section>

      <section id="exhibitions" className="section muted">
        <div className="sectionHead">
          <p className="eyebrow">展覽</p>
          <h2>即將舉行與過往紀錄</h2>
        </div>
        <div className="timeline">
          <div><span>2026</span><strong>作品集上線</strong><p>藝術家網站預覽及典藏架構。</p></div>
          <div><span>2025</span><strong>展覽名稱佔位</strong><p>展覽場地、城市及簡介待更新。</p></div>
          <div><span>2024</span><strong>聯展佔位</strong><p>紀錄可包含媒體報導連結、展場裝置圖片及評論文章。</p></div>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">工作室聯繫</p>
        <h2>歡迎洽詢作品、合作及展覽機會。</h2>
        <a className="button primary" href="mailto:mail@nellyliu.com">mail@nellyliu.com</a>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} <em>Nelly Liu</em>. 版權所有。</p>
        <p>預覽佔位圖片取自 UniCredit 藝術典藏，僅供版面參考。</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
