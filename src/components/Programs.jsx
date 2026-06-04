const programs = [
  {
    number: '01',
    stage: 'Idea Stage',
    name: 'SPARK',
    desc: 'From idea to validated MVP',
    body: 'Built for the sports-tech idea that deserves more than just feedback. Through structured mentorship and hands-on sessions, on campus or online, you leave with a validated MVP, a business model that holds up, and a clear path to what comes next.',
    btnText: 'Check Spark Programs →',
    btnColor: '#E25A1C',
    headerBg: 'linear-gradient(135deg, rgba(226,90,28,0.15), rgba(226,90,28,0.04))',
    cls: 'card-spark',
  },
  {
    number: '02',
    stage: 'MVP Stage',
    name: 'STRIDE',
    desc: 'From first product to first revenue',
    body: 'The gap between a working product and real revenue is where most sports-tech startups stall. Stride closes it, with structured support on market fit, sales strategy, and the pilot deployments that make the business real.',
    btnText: 'Check Stride Programs →',
    btnColor: '#19A574',
    headerBg: 'linear-gradient(135deg, rgba(25,165,116,0.15), rgba(25,165,116,0.04))',
    cls: 'card-stride',
  },
  {
    number: '03',
    stage: 'Scale Stage',
    name: 'SPRINTX',
    desc: 'From revenue to scale',
    body: 'The flagship program for founders who are done testing and ready to scale. A structured 24-week journey of deep mentorship, curated investor access, and strategic accountability that turns a promising sports-tech startup into a company worth funding.',
    btnText: 'Check Sprintx Programs →',
    btnColor: '#1B7EC8',
    headerBg: 'linear-gradient(135deg, rgba(27,126,200,0.15), rgba(27,126,200,0.04))',
    cls: 'card-sprintx',
  },
]

function Programs() {
  return (
    <section className="section-padding" style={{
      padding: '40px 80px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

@media (max-width: 1023px) {
  .prog-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
}
@media (max-width: 767px) {
  .prog-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
  .prog-header { padding: 24px 20px 18px !important; }
  .prog-name { font-size: 32px !important; }
  .prog-number { font-size: 52px !important; }
  .prog-body { padding: 16px 20px !important; }
  .prog-btn { width: calc(100% - 40px) !important; margin: 0 20px 20px !important; padding: 10px !important; }
}

.prog-card {
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.04);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  cursor: pointer;
}
.prog-card:hover {
  transform: translateY(-8px);
}
.card-spark:hover {
  border-color: rgba(226, 90, 28, 0.4);
  box-shadow: 0 30px 60px rgba(226, 90, 28, 0.12);
}
.card-stride:hover {
  border-color: rgba(25, 165, 116, 0.4);
  box-shadow: 0 30px 60px rgba(25, 165, 116, 0.12);
}
.card-sprintx:hover {
  border-color: rgba(27, 126, 200, 0.4);
  box-shadow: 0 30px 60px rgba(27, 126, 200, 0.12);
}
`}</style>

      {/* LABEL */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '24px',
      }}>
        <div style={{ width: '28px', height: '2px', background: '#E25A1C' }} />
        <span className="section-eyebrow" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#E25A1C' }}>
          Three Programs
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
        marginBottom: '16px',
      }}>
        ONE JOURNEY. <br />
        <span style={{ color: '#1B7EC8' }}>EVERY STAGE.</span>
      </h2>

      <p className="section-subtitle" style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '15.5px',
        fontWeight: '300',
        color: 'rgba(255,255,255,0.50)',
        lineHeight: '1.75',
        maxWidth: '500px',
        marginBottom: '60px',
      }}>
        Wherever you are in building your sports-tech company, there is a SprintX program built for exactly that stage.
      </p>

      {/* CARDS */}
      <div className="prog-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
      }}>
        {programs.map((p) => (
          <div key={p.name} className={'prog-card ' + p.cls}>

            {/* HEADER with tint */}
            <div className="prog-header" style={{
              padding: '30px 26px 24px',
              background: p.headerBg,
              position: 'relative',
            }}>

              <div>
                <div>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '10.5px',
                    fontWeight: '700',
                    letterSpacing: '1.6px',
                    textTransform: 'uppercase',
                    color: p.btnColor,
                    marginBottom: '8px',
                  }}>
                    {p.stage}
                  </p>
                  <h3 className="prog-name" style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: '42px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: '#ffffff',
                    lineHeight: '1',
                  }}>
                    {p.name}
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '13px',
                    fontWeight: '300',
                    color: 'rgba(255,255,255,0.50)',
                    marginTop: '6px',
                  }}>{p.desc}</p>
                </div>
                <span className="prog-number" style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontSize: '68px',
                  fontWeight: '700',
                  lineHeight: '1',
                  opacity: '0.07',
                  position: 'absolute',
                  top: '12px',
                  right: '20px',
                }}>
                  {p.number}
                </span>
              </div>

              <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginTop: '20px' }} />

            </div>

            {/* BODY — neutral */}
            <div className="prog-body" style={{
              padding: '22px 26px',
              background: 'rgba(255,255,255,0.02)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              flex: '1',
            }}>

              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: '300',
                color: 'rgba(255,255,255,0.50)',
                lineHeight: '1.6',
              }}>
                {p.body}
              </p>

              <button className="prog-btn" style={{
                width: 'calc(100% - 52px)',
                margin: '0 26px 26px',
                padding: '11px',
                borderRadius: '8px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: '600',
                border: 'none',
                background: p.btnColor,
                color: '#fff',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
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