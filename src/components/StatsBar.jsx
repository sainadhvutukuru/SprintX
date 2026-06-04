import { useState } from 'react'

function StatsBar() {
  const [hovered, setHovered] = useState(null)
  return (
    <section style={{
      borderTop: '1px solid rgba(255,255,255,0.08)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
    }}>

      {/* OFFICIAL LAUNCH */}
      <div
        onMouseEnter={() => setHovered('launch')}
        onMouseLeave={() => setHovered(null)}
        style={{
          padding: '32px 40px',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          borderBottom: `3px solid ${hovered === 'launch' ? '#e05c1a' : 'transparent'}`,
          background: hovered === 'launch' ? 'rgba(224, 92, 26, 0.06)' : 'transparent',
          textAlign: 'center',
          transition: 'all 0.3s ease',
        }}>
        <p style={{ fontSize: '11px', letterSpacing: '2px', color: '#555', textTransform: 'uppercase', marginBottom: '12px' }}>Accelerator Program Launch</p>
        <p style={{ fontSize: '32px', fontWeight: '700', color: '#fff' }}>
          <span style={{ color: '#c94f1a' }}>Sep</span> 2026
        </p>
        <p style={{ fontSize: '13px', color: '#555', marginTop: '6px' }}>Hyderabad, India</p>
      </div>

      {/* ACCELERATOR PROGRAMS */}
      <div
        onMouseEnter={() => setHovered('programs')}
        onMouseLeave={() => setHovered(null)}
        style={{
          padding: '32px 40px',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          borderBottom: `3px solid ${hovered === 'programs' ? '#e05c1a' : 'transparent'}`,
          background: hovered === 'programs' ? 'rgba(224, 92, 26, 0.06)' : 'transparent',
          textAlign: 'center',
          transition: 'all 0.3s ease',
        }}>
        <p style={{ fontSize: '11px', letterSpacing: '2px', color: '#555', textTransform: 'uppercase', marginBottom: '12px' }}>Accelerator Programs</p>
        <p style={{ fontSize: '32px', fontWeight: '700', color: '#c94f1a' }}>3</p>
        <p style={{ fontSize: '13px', color: '#555', marginTop: '6px' }}>Spark · Stride · SprintX</p>
      </div>

      {/* SPORTS-TECH SECTORS */}
      <div
        onMouseEnter={() => setHovered('sectors')}
        onMouseLeave={() => setHovered(null)}
        style={{
          padding: '32px 40px',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          borderBottom: `3px solid ${hovered === 'sectors' ? '#e05c1a' : 'transparent'}`,
          background: hovered === 'sectors' ? 'rgba(224, 92, 26, 0.06)' : 'transparent',
          textAlign: 'center',
          transition: 'all 0.3s ease',
        }}>
        <p style={{ fontSize: '11px', letterSpacing: '2px', color: '#555', textTransform: 'uppercase', marginBottom: '12px' }}>Sports-Tech Sectors</p>
        <p style={{ fontSize: '32px', fontWeight: '700', color: '#c94f1a' }}>5</p>
        <p style={{ fontSize: '13px', color: '#555', marginTop: '6px' }}>Covered end to end</p>
      </div>

      {/* CO-BUILT WITH */}
      <div
        onMouseEnter={() => setHovered('cobuilt')}
        onMouseLeave={() => setHovered(null)}
        style={{
          padding: '32px 40px',
          borderBottom: `3px solid ${hovered === 'cobuilt' ? '#e05c1a' : 'transparent'}`,
          background: hovered === 'cobuilt' ? 'rgba(224, 92, 26, 0.06)' : 'transparent',
          textAlign: 'center',
          transition: 'all 0.3s ease',
        }}>
        <p style={{ fontSize: '11px', letterSpacing: '2px', color: '#555', textTransform: 'uppercase', marginBottom: '12px' }}>Co-built with</p>
        <p style={{ fontSize: '24px', fontWeight: '700', color: '#fff' }}>LegaXy</p>
        <p style={{ fontSize: '13px', color: '#555', marginTop: '6px' }}>Industry Partner</p>
      </div>

    </section>
  )
}

export default StatsBar