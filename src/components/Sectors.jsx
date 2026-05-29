const sectors = [
  {
    icon: '⚡',
    name: 'SPORTS TECH',
    tags: ['AI Analytics', 'Performance', 'Smart Infra'],
  },
  {
    icon: '💪',
    name: 'WELLNESS & FITNESS',
    tags: ['Health Tech', 'Nutrition', 'Fan Engagement'],
  },
  {
    icon: '🎮',
    name: 'ESPORTS & GAMING',
    tags: ['Broadcasting', 'Content', 'League Ops'],
  },
  {
    icon: '🛒',
    name: 'SPORTS COMMERCE',
    tags: ['Merchandising', 'Ticketing', 'Marketplace'],
  },
  {
    icon: '🎓',
    name: 'SPORTS EDUCATION',
    tags: ['Grassroots', 'Academy', 'Coaching Tech'],
  },
]

function Sectors() {
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
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(48px, 6vw, 80px)',
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
          <div key={s.name} style={{
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '32px 20px',
            background: 'rgba(255,255,255,0.02)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            textAlign: 'center',
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