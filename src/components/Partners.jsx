const partners = [
  {
    color: '#f15b26',
    name: 'LegaXy',
    role: 'Industry & Co-Builder Partner',
  },
  {
    color: '#1aa88a',
    name: 'Young India Physical Education & Sports University',
    role: 'University Partner',
  },
  {
    color: '#d4a017',
    name: 'South Clan',
    role: 'Grassroots Partner',
  },
]

function Partners() {
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
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(40px, 5vw, 64px)',
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

      {/* PARTNER CARDS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
      }}>
        {partners.map((p) => (
          <div key={p.name} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '20px',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '10px',
            background: 'rgba(255,255,255,0.02)',
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: p.color,
              flexShrink: '0',
            }} />
            <div>
              <p style={{ fontSize: '15px', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>{p.name}</p>
              <p style={{ fontSize: '13px', color: '#666' }}>{p.role}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Partners