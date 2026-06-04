function StatsBar() {
  return (
    <section className="stats-grid" style={{
      background: 'rgba(8,17,30,1)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
    }}>
      <style>{`
.stat-item {
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
  cursor: pointer;
}
.stat-item:hover {
  background: rgba(224, 92, 26, 0.06);
}
.stat-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: #E25A1C;
  transition: width 0.4s;
}
.stat-item:hover::after {
  width: 60%;
}
@media (max-width: 1023px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
}
@media (max-width: 767px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .stat-item { padding: 20px 12px !important; }
  .stat-number { font-size: 28px !important; }
  .stat-label { font-size: 9.5px !important; }
  .stat-subtitle { font-size: 11px !important; }
}
`}</style>

      {/* OFFICIAL LAUNCH */}
      <div className="stat-item" style={{
        padding: '32px 40px',
        borderRight: '1px solid rgba(255,255,255,0.08)',
        textAlign: 'center',
      }}>
        <p className="stat-label" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: '500', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.30)', textTransform: 'uppercase', marginBottom: '8px' }}>Accelerator Program Launch</p>
        <p className="stat-number" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '38px', fontWeight: '700', color: '#ffffff' }}>
          <span style={{ color: '#E25A1C' }}>Sep</span> 2026
        </p>
        <p className="stat-subtitle" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.50)', marginTop: '4px' }}>Hyderabad, India</p>
      </div>

      {/* ACCELERATOR PROGRAMS */}
      <div className="stat-item" style={{
        padding: '32px 40px',
        borderRight: '1px solid rgba(255,255,255,0.08)',
        textAlign: 'center',
      }}>
        <p className="stat-label" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: '500', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.30)', textTransform: 'uppercase', marginBottom: '8px' }}>Accelerator Programs</p>
        <p className="stat-number" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '38px', fontWeight: '700', color: '#ffffff' }}>3</p>
        <p className="stat-subtitle" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.50)', marginTop: '4px' }}>Spark · Stride · SprintX</p>
      </div>

      {/* SPORTS-TECH SECTORS */}
      <div className="stat-item" style={{
        padding: '32px 40px',
        borderRight: '1px solid rgba(255,255,255,0.08)',
        textAlign: 'center',
      }}>
        <p className="stat-label" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: '500', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.30)', textTransform: 'uppercase', marginBottom: '8px' }}>Sports-Tech Sectors</p>
        <p className="stat-number" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '38px', fontWeight: '700', color: '#ffffff' }}>5</p>
        <p className="stat-subtitle" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.50)', marginTop: '4px' }}>Covered end to end</p>
      </div>

      {/* CO-BUILT WITH */}
      <div className="stat-item" style={{
        padding: '32px 40px',
        textAlign: 'center',
      }}>
        <p className="stat-label" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: '500', letterSpacing: '1.2px', color: 'rgba(255,255,255,0.30)', textTransform: 'uppercase', marginBottom: '8px' }}>Co-built with</p>
        <p className="stat-number" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '38px', fontWeight: '700', color: '#ffffff' }}>LegaXy</p>
        <p className="stat-subtitle" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.50)', marginTop: '4px' }}>Industry Partner</p>
      </div>

    </section>
  )
}

export default StatsBar