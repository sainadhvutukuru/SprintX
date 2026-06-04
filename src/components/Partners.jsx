import { useState } from 'react'
import logo360 from '../assets/360D Sports Official Light Logo.png'
import logoLegaxy from '../assets/Legaxy Official Light Logo.png'
import logoSouthClan from '../assets/South Clan Football Academy Official Logo.png'

const partners = [
  { name: '360D Sports', img: logo360 },
  { name: 'Legaxy', img: logoLegaxy },
  { name: 'South Clan Football Academy', img: logoSouthClan },
]

const tickerItems = Array.from({ length: 3 }, () => partners).flat()

function Partners() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="section-padding" style={{
      padding: '20px 80px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <style>{`
@media (max-width: 767px) {
  .partner-cards { flex-direction: column !important; gap: 10px !important; }
  .partner-card { width: 100% !important; padding: 14px 18px !important; }
  .partner-name { font-size: 13.5px !important; }
  .partner-span { font-size: 11px !important; }
}
`}</style>
      {/* LABEL */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '16px',
      }}>
        <div style={{ width: '28px', height: '2px', background: '#E25A1C' }} />
        <span className="section-eyebrow" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#E25A1C' }}>
          Launch Partners
        </span>
      </div>

      {/* TITLE */}
      <h2 className="section-heading" style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: 'clamp(44px,6vw,72px)',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '-1px',
        lineHeight: '0.92',
        color: '#ffffff',
        marginBottom: '12px',
      }}>
        BUILT WITH THE <br /> BEST IN THE GAME
      </h2>

      {/* SUBTITLE */}
      <p className="section-subtitle" style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '15.5px',
        fontWeight: '300',
        color: 'rgba(255,255,255,0.50)',
        lineHeight: '1.75',
        maxWidth: '500px',
        marginBottom: '24px',
      }}>
        SprintX is co-built with established partners across the Indian sports and education ecosystem.
      </p>

      {/* TICKER WRAPPER */}
      <div
        className="ticker-wrapper"
        style={{ overflow: 'hidden' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="ticker-track">
          {tickerItems.map((p, i) => (
            <div key={i} className="ticker-card">
              <img
                src={p.img}
                alt={p.name}
                className="ticker-img"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .ticker-card { padding: 20px 24px !important; min-height: 80px !important; }
          .ticker-img { height: 50px !important; }
        }

        .ticker-track {
          display: flex;
          gap: 0;
          animation: scroll 12s linear infinite;
          animation-play-state: ${hovered ? 'paused' : 'running'};
        }

        .ticker-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 32px 40px;
          margin: 0 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 120px;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .ticker-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.2);
        }

        .ticker-img {
          height: 80px;
          object-fit: contain;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  )
}

export default Partners
