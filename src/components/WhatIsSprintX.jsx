const ecosystem = [
  { color: '#e05c1a', name: 'Inve Sports Venture', role: 'Holding Company' },
  { color: '#4fa3e0', name: 'SprintX', role: 'Innovation Platform' },
  { color: '#1db97a', name: 'Sports Tech Podium', role: 'Discovery Engine' },
  { color: '#7c3aed', name: 'Network+', role: 'Industry Network' },
]

import { useState } from 'react'

function WhatIsSprintX() {
  const [hovered, setHovered] = useState(null)
  return (
    <section className="about-grid section-padding" style={{
      padding: '40px 80px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <style>{`
@media (max-width: 1023px) {
  .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
}
@media (max-width: 767px) {
  .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
  .about-eco-item { padding: 12px 14px !important; }
  .about-quote { font-size: 16px !important; padding: 16px 18px !important; }
}
`}</style>

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
          <span className="section-eyebrow" style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#777' }}>
            What is SprintX
          </span>
        </div>

        {/* TITLE */}
        <h2 className="section-heading" style={{
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
        <p className="section-subtitle" style={{ fontSize: '15px', color: '#888', lineHeight: '1.8', marginBottom: '20px' }}>
          Sports in India is no longer just a game. It is a{' '}
          <strong style={{ color: '#fff' }}>billion-dollar innovation frontier</strong>{' '}
          — and until now, the founders, athletes, and builders solving its biggest problems had nowhere to call home.
        </p>

        <p className="section-subtitle" style={{ fontSize: '15px', color: '#888', lineHeight: '1.8', marginBottom: '20px' }}>
          SprintX changes that. We take sports-tech founders from{' '}
          <strong style={{ color: '#fff' }}>wherever they are</strong>{' '}
          — a raw idea, a working product, or a revenue-stage company — and give them the structure, network, and momentum to actually scale.
        </p>

        <p className="section-subtitle" style={{ fontSize: '15px', color: '#888', lineHeight: '1.8', marginBottom: '32px' }}>
          We are not a course. Not a one-time event. We are a{' '}
          <strong style={{ color: '#fff' }}>full-stack accelerator</strong>{' '}
          with three connected programs and an ecosystem that keeps founders moving forward.
        </p>

        {/* QUOTE BOX */}
        <div className="about-quote" style={{
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
            <div key={item.name}
              className="about-eco-item"
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 20px',
                paddingLeft: hovered === item.name ? '26px' : '20px',
                border: '1px solid rgba(255,255,255,0.08)',
                borderLeft: hovered === item.name ? `3px solid ${item.color}` : '3px solid transparent',
                borderRadius: '8px',
                background: hovered === item.name ? `${item.color}0f` : 'rgba(255,255,255,0.02)',
                transition: 'all 0.25s ease',
              }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '10px', height: '10px',
                  borderRadius: '50%',
                  background: item.color,
                }} />
                <span style={{ fontSize: '15px', fontWeight: '600', color: '#ffffff' }}>{item.name}</span>
              </div>
              <span style={{
                fontSize: '13px',
                color: hovered === item.name ? '#999' : '#555',
                transition: 'color 0.25s ease',
              }}>{item.role}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default WhatIsSprintX