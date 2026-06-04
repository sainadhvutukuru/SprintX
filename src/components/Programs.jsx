const programs = [
  {
    number: '01',
    stage: 'Idea Stage',
    name: 'SPARK',
    desc: 'From idea to validated MVP',
    body: 'Built for the sports-tech idea that deserves more than just feedback. Through structured mentorship and hands-on sessions, on campus or online, you leave with a validated MVP, a business model that holds up, and a clear path to what comes next.',
    btnText: 'Check Spark Programs →',
    btnColor: '#c94f1a',
    headerBg: 'linear-gradient(135deg, rgba(226,90,28,0.15), rgba(226,90,28,0.04))',
  },
  {
    number: '02',
    stage: 'MVP Stage',
    name: 'STRIDE',
    desc: 'From first product to first revenue',
    body: 'The gap between a working product and real revenue is where most sports-tech startups stall. Stride closes it, with structured support on market fit, sales strategy, and the pilot deployments that make the business real.',
    btnText: 'Check Stride Programs →',
    btnColor: '#1aa88a',
    headerBg: 'linear-gradient(135deg, rgba(25,165,116,0.15), rgba(25,165,116,0.04))',
  },
  {
    number: '03',
    stage: 'Scale Stage',
    name: 'SPRINTX',
    desc: 'From revenue to scale',
    body: 'The flagship program for founders who are done testing and ready to scale. A structured 24-week journey of deep mentorship, curated investor access, and strategic accountability that turns a promising sports-tech startup into a company worth funding.',
    btnText: 'Check Sprintx Programs →',
    btnColor: '#4aacef',
    headerBg: 'linear-gradient(135deg, rgba(27,126,200,0.15), rgba(27,126,200,0.04))',
  },
]

import { useState } from 'react'

function Programs() {
  const [hoveredCard, setHoveredCard] = useState(null)
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
          <div key={p.name}
            onMouseEnter={() => setHoveredCard(p.name)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              border: `1px solid ${hoveredCard === p.name ? p.btnColor : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              minWidth: '360px',
              transform: hoveredCard === p.name ? 'translateY(-6px)' : 'translateY(0)',
              boxShadow: hoveredCard === p.name ? `0 12px 40px ${p.btnColor}30` : 'none',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}>

            {/* HEADER with tint */}
            <div style={{
              padding: '32px 28px 0',
              background: p.headerBg,
              position: 'relative',
            }}>

              <div>
                <div>
                  <p style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#555', marginBottom: '8px' }}>
                    {p.stage}
                  </p>
                  <h3 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: '48px',
                    fontWeight: '800',
                    color: '#ffffff',
                    lineHeight: '1',
                    textTransform: 'uppercase',
                  }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#555', marginTop: '6px' }}>{p.desc}</p>
                </div>
                <span style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontSize: '72px',
                  fontWeight: '700',
                  lineHeight: '1',
                  opacity: '0.08',
                  position: 'absolute',
                  top: '16px',
                  right: '24px',
                }}>
                  {p.number}
                </span>
              </div>

              <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginTop: '20px' }} />

            </div>

            {/* BODY — neutral */}
            <div style={{
              padding: '20px 28px 32px',
              background: hoveredCard === p.name ? `${p.btnColor}08` : 'rgba(255,255,255,0.02)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              flex: '1',
            }}>

              <p style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: '1.7',
                fontWeight: '400',
              }}>
                {p.body}
              </p>

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
                {p.btnText}
              </button>

            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Programs