const ecosystem = [
  { color: '#c94f1a', name: 'Inve Sports Venture', role: 'Holding Company' },
  { color: '#4aacef', name: 'SprintX', role: 'Innovation Platform' },
  { color: '#1aa88a', name: 'Sports Tech Podium', role: 'Discovery Engine' },
  { color: '#d4a017', name: 'South Clan', role: 'Grassroots Partner' },
  { color: '#9b59b6', name: 'Network+', role: 'Industry Network' },
]

function WhatIsSprintX() {
  return (
    <section style={{
      padding: '40px 80px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>

      {/* LEFT SIDE */}
      <div>
        {/* LABEL */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '24px',
        }}>
          <div style={{ width: '32px', height: '2px', background: '#c94f1a' }} />
          <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#777' }}>
            What is SprintX
          </span>
        </div>

        {/* TITLE */}
        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(48px, 6vw, 80px)',
          lineHeight: '1',
          color: '#fff',
          marginBottom: '32px',
        }}>
          INDIA'S FIRST <br />
          <span style={{ color: '#c94f1a' }}>FULL-STACK</span> <br />
          SPORTS ACCELERATOR
        </h2>

        {/* PARAGRAPHS */}
        <p style={{ fontSize: '15px', color: '#888', lineHeight: '1.8', marginBottom: '20px' }}>
          Sports in India is no longer just a game. It is a{' '}
          <strong style={{ color: '#fff' }}>billion-dollar innovation frontier</strong>{' '}
          — and until now, the founders, athletes, and builders solving its biggest problems had nowhere to call home.
        </p>

        <p style={{ fontSize: '15px', color: '#888', lineHeight: '1.8', marginBottom: '20px' }}>
          SprintX changes that. We take sports-tech founders from{' '}
          <strong style={{ color: '#fff' }}>wherever they are</strong>{' '}
          — a raw idea, a working product, or a revenue-stage company — and give them the structure, network, and momentum to actually scale.
        </p>

        <p style={{ fontSize: '15px', color: '#888', lineHeight: '1.8', marginBottom: '32px' }}>
          We are not a course. Not a one-time event. We are a{' '}
          <strong style={{ color: '#fff' }}>full-stack accelerator</strong>{' '}
          with three connected programs and an ecosystem that keeps founders moving forward.
        </p>

        {/* QUOTE BOX */}
        <div style={{
          borderLeft: '3px solid #c94f1a',
          background: 'rgba(201,79,26,0.08)',
          padding: '20px 24px',
          borderRadius: '0 8px 8px 0',
        }}>
          <p style={{ fontSize: '15px', color: '#c94f1a', lineHeight: '1.7', fontStyle: 'italic' }}>
            No other platform in India covers the full founder journey – from idea to investment – inside a single sports innovation ecosystem.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE — ECOSYSTEM */}
      <div>
        <p style={{
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#555',
          marginBottom: '24px',
        }}>
          The SprintX Ecosystem
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {ecosystem.map((item) => (
            <div key={item.name} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '18px 20px',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.02)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '10px', height: '10px',
                  borderRadius: '50%',
                  background: item.color,
                }} />
                <span style={{ fontSize: '15px', fontWeight: '600', color: '#fff' }}>{item.name}</span>
              </div>
              <span style={{ fontSize: '13px', color: '#555' }}>{item.role}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default WhatIsSprintX