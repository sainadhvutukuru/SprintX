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
  { others: 'No grassroots pipeline', sprintx: 'South Clan network' },
  { others: 'Event or course only', sprintx: 'Full accelerator program' },
]

function Edge() {
  return (
    <section style={{
      padding: '40px 80px',
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
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
          <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#c94f1a' }}>
            The SprintX Edge
          </span>
        </div>

        {/* TITLE */}
        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(48px, 5vw, 72px)',
          lineHeight: '1.05',
          color: '#fff',
          marginBottom: '20px',
        }}>
          THE GAP NO ONE <br />
          ELSE <span style={{ color: '#c94f1a' }}>FILLS</span>
        </h2>

        {/* SUBTITLE */}
        <p style={{
          fontSize: '15px',
          color: '#777',
          lineHeight: '1.7',
          marginBottom: '40px',
          maxWidth: '480px',
        }}>
          Every other platform in India picks a lane. SprintX is the only one that covers the full journey — and the only one built exclusively for sports.
        </p>

        {/* FEATURE LIST */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {features.map((f) => (
            <div key={f.title} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              padding: '20px',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.02)',
            }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                background: 'rgba(26,168,138,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0',
                color: '#1aa88a',
                fontSize: '14px',
                fontWeight: '700',
              }}>
                ✓
              </div>
              <div>
                <p style={{ fontSize: '15px', fontWeight: '600', color: '#fff', marginBottom: '4px' }}>{f.title}</p>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* RIGHT SIDE — COMPARISON TABLE */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
            <div key={i} style={{
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