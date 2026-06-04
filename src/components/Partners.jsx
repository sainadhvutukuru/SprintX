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
    <section style={{
      padding: '20px 80px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      {/* LABEL */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '16px',
      }}>
        <div style={{ width: '32px', height: '2px', background: '#f15b26' }} />
        <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#f15b26' }}>
          Launch Partners
        </span>
      </div>

      {/* TITLE */}
      <h2 style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: '72px',
        fontWeight: '700',
        textTransform: 'uppercase',
        lineHeight: '1.05',
        color: '#fff',
        marginBottom: '12px',
      }}>
        BUILT WITH THE <br /> BEST IN THE GAME
      </h2>

      {/* SUBTITLE */}
      <p style={{
        fontSize: '14px',
        color: '#777',
        lineHeight: '1.6',
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
