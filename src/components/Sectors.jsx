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

function Sectors() {
  return (
    <section className="section-padding" style={{
      padding: '40px 80px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <style>{`
@media (max-width: 1023px) {
  .sectors-grid { grid-template-columns: repeat(3, 1fr) !important; }
}
@media (max-width: 767px) {
  .sectors-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
  .sec-card { padding: 20px 12px 16px !important; }
  .sec-icon { font-size: 28px !important; margin-bottom: 10px !important; }
  .sec-name { font-size: 14px !important; }
  .sec-tags { font-size: 9.5px !important; padding: 2px 8px !important; }
}

.sec-card {
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 28px 16px 22px;
  background: rgba(255,255,255,0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.28s;
  position: relative;
  overflow: hidden;
}
.sec-card:hover {
  transform: translateY(-6px);
  background: rgba(255,255,255,0.07);
}
.sec-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--line-color, #E25A1C);
  transition: width 0.4s;
}
.sec-card:hover::after {
  width: 100%;
}
`}</style>

      {/* LABEL */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '24px',
      }}>
        <div style={{ width: '28px', height: '2px', background: '#E25A1C' }} />
        <span className="section-eyebrow" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#E25A1C' }}>
          Eligible Sectors
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
        marginBottom: '60px',
      }}>
        WE BACK FOUNDERS <br /> BUILDING IN
      </h2>

      {/* CARDS */}
      <div className="sectors-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '16px',
      }}>
        {sectors.map((s) => (
          <div key={s.name} className="sec-card" style={{ '--line-color': s.borderColor }}>

            {/* ICON */}
            <div className="sec-icon" style={{ fontSize: '36px', marginBottom: '12px' }}>{s.icon}</div>

            {/* NAME */}
            <h3 className="sec-name" style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: '17px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: '#ffffff',
              marginBottom: '10px',
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
                <span key={tag} className="sec-tags" style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '10.5px',
                  fontWeight: '500',
                  color: 'rgba(255,255,255,0.50)',
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '100px',
                  padding: '3px 10px',
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