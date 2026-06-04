const sectors = [
  {
    icon: '⚡',
    name: 'SPORTS TECH',
    tags: ['AI Analytics', 'Performance', 'Smart Infra'],
    borderColor: '#e05c1a',
    bgTint: 'rgba(224, 92, 26, 0.08)',
  },
  {
    icon: '💪',
    name: 'WELLNESS & FITNESS',
    tags: ['Health Tech', 'Nutrition', 'Fan Engagement'],
    borderColor: '#2d8fdd',
    bgTint: 'rgba(45, 143, 221, 0.08)',
  },
  {
    icon: '🎮',
    name: 'ESPORTS & GAMING',
    tags: ['Broadcasting', 'Content', 'League Ops'],
    borderColor: '#1db97a',
    bgTint: 'rgba(29, 185, 122, 0.08)',
  },
  {
    icon: '🛒',
    name: 'SPORTS COMMERCE',
    tags: ['Merchandising', 'Ticketing', 'Marketplace'],
    borderColor: '#d4a017',
    bgTint: 'rgba(212, 160, 23, 0.08)',
  },
  {
    icon: '🎓',
    name: 'SPORTS EDUCATION',
    tags: ['Grassroots', 'Academy', 'Coaching Tech'],
    borderColor: '#7c3aed',
    bgTint: 'rgba(124, 58, 237, 0.08)',
  },
]

import { useState } from 'react'

function Sectors() {
  const [hovered, setHovered] = useState(null)
  return (
    <section style={{
      padding: '40px 80px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>

      {/* LABEL */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '24px',
      }}>
        <div style={{ width: '32px', height: '2px', background: '#c94f1a' }} />
        <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#c94f1a' }}>
          Eligible Sectors
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
        marginBottom: '60px',
      }}>
        WE BACK FOUNDERS <br /> BUILDING IN
      </h2>

      {/* CARDS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '16px',
      }}>
        {sectors.map((s) => (
          <div key={s.name}
            onMouseEnter={() => setHovered(s.name)}
            onMouseLeave={() => setHovered(null)}
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              borderBottom: `3px solid ${hovered === s.name ? s.borderColor : 'transparent'}`,
              borderRadius: '12px',
              padding: '32px 20px',
              background: hovered === s.name ? s.bgTint : 'rgba(255,255,255,0.02)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              textAlign: 'center',
              transform: hovered === s.name ? 'translateY(-4px)' : 'translateY(0)',
              transition: 'all 0.3s ease',
            }}>

            {/* ICON */}
            <div style={{ fontSize: '36px' }}>{s.icon}</div>

            {/* NAME */}
            <h3 style={{
              fontSize: '13px',
              fontWeight: '700',
              color: '#fff',
              letterSpacing: '1px',
            }}>
              {s.name}
            </h3>

            {/* TAGS */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              justifyContent: 'center',
            }}>
              {s.tags.map((tag) => (
                <span key={tag} style={{
                  fontSize: '11px',
                  color: '#888',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '999px',
                  padding: '4px 10px',
                }}>
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Sectors