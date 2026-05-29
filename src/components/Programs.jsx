const programs = [
  {
    number: '01',
    stage: 'Idea Stage',
    name: 'SPARK',
    desc: 'From idea to validated MVP',
    duration: '3–8 Months',
    tracks: 'University + Open',
    fee: 'Rs 10,000–15,000',
    who: 'Students · Athletes · Early Founders',
    btnColor: '#c94f1a',
    nameColor: '#c94f1a',
  },
  {
    number: '02',
    stage: 'MVP Stage',
    name: 'STRIDE',
    desc: 'From first product to first revenue',
    duration: '16–20 Weeks',
    equity: '1%–2%',
    fee: 'Rs 25,000–30,000',
    who: 'Founders with Working MVP',
    btnColor: '#1aa88a',
    nameColor: '#4aacef',
  },
  {
    number: '03',
    stage: 'Scale Stage',
    name: 'SPRINTX',
    desc: 'From revenue to scale',
    duration: '24 Weeks',
    equity: '3%–5% (Cohorts 1–3)',
    fee: 'No Fee — Cohorts 1–3',
    who: 'Revenue-Stage Founders',
    btnColor: '#4aacef',
    nameColor: '#4aacef',
  },
]

function Programs() {
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
        <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#777' }}>
          Three Programs
        </span>
      </div>

      {/* TITLE */}
      <h2 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(48px, 6vw, 80px)',
        lineHeight: '1',
        color: '#fff',
        marginBottom: '16px',
      }}>
        ONE JOURNEY. <br />
        <span style={{ color: '#4aacef' }}>EVERY STAGE.</span>
      </h2>

      <p style={{
        fontSize: '15px',
        color: '#777',
        lineHeight: '1.7',
        maxWidth: '500px',
        marginBottom: '60px',
      }}>
        Wherever you are in building your sports-tech company, there is a SprintX program built for exactly that stage.
      </p>

      {/* CARDS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
      }}>
        {programs.map((p) => (
          <div key={p.name} style={{
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '32px 28px',
            background: 'rgba(255,255,255,0.02)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            position: 'relative',
          }}>

            {/* NUMBER + STAGE */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}>
              <div>
                <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#555', marginBottom: '8px' }}>
                  {p.stage}
                </p>
                <h3 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '48px',
                  color: p.nameColor,
                  lineHeight: '1',
                }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: '13px', color: '#555', marginTop: '6px' }}>{p.desc}</p>
              </div>
              <span style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '64px',
                color: 'rgba(255,255,255,0.06)',
                lineHeight: '1',
              }}>
                {p.number}
              </span>
            </div>

            {/* DIVIDER */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

            {/* DETAILS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Duration', value: p.duration },
                { label: p.tracks ? 'Tracks' : 'Equity', value: p.tracks || p.equity },
                { label: 'Fee', value: p.fee },
                { label: 'Who', value: p.who },
              ].map((row) => (
                <div key={row.label} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ fontSize: '13px', color: '#555' }}>{row.label}</span>
                  <span style={{ fontSize: '13px', color: '#fff', fontWeight: '500', textAlign: 'right', maxWidth: '60%' }}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <button style={{
              marginTop: 'auto',
              padding: '12px',
              borderRadius: '7px',
              fontSize: '14px',
              fontWeight: '600',
              border: 'none',
              background: p.btnColor,
              color: '#fff',
              width: '100%',
              cursor: 'pointer',
            }}>
              Connect Your Startup →
            </button>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Programs