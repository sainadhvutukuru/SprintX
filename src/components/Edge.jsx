const features = [
  {
    title: 'Full-stage coverage',
    desc: 'Idea to revenue to scale — all inside one ecosystem',
  },
  {
    title: 'Sports-only focus',
    desc: 'Not a generic accelerator with a sports track — built exclusively for this industry',
  },
  {
    title: 'Real market access',
    desc: 'Direct connections to federations, leagues, academies, and buyers',
  },
  {
    title: 'Investor pipeline built in',
    desc: 'Deal flow, Demo Days, and an Investor Circle from day one',
  },
]

const comparison = [
  { others: 'Generic startup focus', sprintx: 'Sports-only' },
  { others: 'Single-stage program', sprintx: 'Idea to scale' },
  { others: 'No market access', sprintx: 'Federation & league access' },
  { others: 'No investor network', sprintx: 'Built-in Investor Circle' },
  { others: 'Event or course only', sprintx: 'Full accelerator program' },
]

import { useState } from 'react'

function Edge() {
  const [hovered, setHovered] = useState(null)
  return (
    <section className="edge-grid section-padding" style={{
      padding: '40px 80px',
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
    }}>
      <style>{`
@media (max-width: 1023px) {
  .edge-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
}
@media (max-width: 767px) {
  .edge-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
  .edge-item { padding: 14px 16px !important; gap: 10px !important; }
  .edge-check { width: 28px !important; height: 28px !important; font-size: 14px !important; }
  .edge-title { font-size: 13px !important; }
  .edge-text { font-size: 12px !important; }
  .edge-vs { margin-top: 0 !important; }
  .edge-row { font-size: 12px !important; padding: 10px 16px !important; }
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
          <div style={{ width: '28px', height: '2px', background: '#E25A1C' }} />
          <span className="section-eyebrow" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#E25A1C' }}>
            The SprintX Edge
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
          marginBottom: '20px',
        }}>
          THE GAP NO ONE <br />
          ELSE <span style={{ color: '#E25A1C' }}>FILLS</span>
        </h2>

        {/* SUBTITLE */}
        <p className="section-subtitle" style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '15.5px',
          fontWeight: '300',
          color: 'rgba(255,255,255,0.50)',
          lineHeight: '1.75',
          marginBottom: '40px',
          maxWidth: '480px',
        }}>
          Every other platform in India picks a lane. SprintX is the only one that covers the full journey — and the only one built exclusively for sports.
        </p>

        {/* FEATURE LIST */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {features.map((f) => (
            <div key={f.title}
              className="edge-item"
              onMouseEnter={() => setHovered(f.title)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '20px',
                border: '1px solid rgba(255,255,255,0.08)',
                borderLeft: hovered === f.title ? '3px solid #1db97a' : '3px solid transparent',
                borderRadius: '10px',
                background: hovered === f.title ? 'rgba(29,185,122,0.06)' : 'rgba(255,255,255,0.02)',
                transform: hovered === f.title ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'all 0.25s ease',
              }}>
              <div className="edge-check" style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                background: hovered === f.title ? 'rgba(29,185,122,0.3)' : 'rgba(29,185,122,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0',
                color: '#1db97a',
                fontSize: '14px',
                fontWeight: '700',
                transition: 'background 0.25s ease',
              }}>
                ✓
              </div>
              <div>
                <p className="edge-title" style={{ fontSize: '15px', fontWeight: '600', color: '#ffffff', marginBottom: '4px' }}>{f.title}</p>
                <p className="edge-text" style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* RIGHT SIDE — COMPARISON TABLE */}
      <div className="edge-vs" style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{
          width: '100%',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}>

          {/* TABLE HEADER */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            padding: '16px 24px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}>
            <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#555' }}>Others</span>
            <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#1aa88a' }}>SprintX</span>
          </div>

          {/* TABLE ROWS */}
          {comparison.map((row, i) => (
            <div key={i} className="edge-row" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              padding: '16px 24px',
              borderBottom: i < comparison.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent',
            }}>
              <span style={{ fontSize: '14px', color: '#555' }}>{row.others}</span>
              <span style={{ fontSize: '14px', color: '#1aa88a', fontWeight: '500' }}>✓ {row.sprintx}</span>
            </div>
          ))}

        </div>
      </div>

    </section>
  )
}

export default Edge