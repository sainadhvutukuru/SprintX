function StatsBar() {
  return (
    <section style={{
      borderTop: '1px solid rgba(255,255,255,0.08)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
    }}>

      {/* OFFICIAL LAUNCH */}
      <div style={{
        padding: '32px 40px',
        borderRight: '1px solid rgba(255,255,255,0.08)',
      }}>
        <p style={{ fontSize: '11px', letterSpacing: '2px', color: '#555', textTransform: 'uppercase', marginBottom: '12px' }}>Official Launch</p>
        <p style={{ fontSize: '32px', fontWeight: '700', color: '#fff' }}>
          <span style={{ color: '#c94f1a' }}>Aug</span> 2026
        </p>
        <p style={{ fontSize: '13px', color: '#555', marginTop: '6px' }}>Hyderabad, India</p>
      </div>

      {/* ACCELERATOR PROGRAMS */}
      <div style={{
        padding: '32px 40px',
        borderRight: '1px solid rgba(255,255,255,0.08)',
      }}>
        <p style={{ fontSize: '11px', letterSpacing: '2px', color: '#555', textTransform: 'uppercase', marginBottom: '12px' }}>Accelerator Programs</p>
        <p style={{ fontSize: '32px', fontWeight: '700', color: '#c94f1a' }}>3</p>
        <p style={{ fontSize: '13px', color: '#555', marginTop: '6px' }}>Spark · Stride · SprintX</p>
      </div>

      {/* SPORTS-TECH SECTORS */}
      <div style={{
        padding: '32px 40px',
        borderRight: '1px solid rgba(255,255,255,0.08)',
      }}>
        <p style={{ fontSize: '11px', letterSpacing: '2px', color: '#555', textTransform: 'uppercase', marginBottom: '12px' }}>Sports-Tech Sectors</p>
        <p style={{ fontSize: '32px', fontWeight: '700', color: '#c94f1a' }}>5</p>
        <p style={{ fontSize: '13px', color: '#555', marginTop: '6px' }}>Covered end to end</p>
      </div>

      {/* CO-BUILT WITH */}
      <div style={{ padding: '32px 40px' }}>
        <p style={{ fontSize: '11px', letterSpacing: '2px', color: '#555', textTransform: 'uppercase', marginBottom: '12px' }}>Co-built with</p>
        <p style={{ fontSize: '24px', fontWeight: '700', color: '#fff' }}>LegaXy</p>
        <p style={{ fontSize: '13px', color: '#555', marginTop: '6px' }}>Industry Partner</p>
      </div>

    </section>
  )
}

export default StatsBar