import { useState } from 'react'
import StartupFormModal from './StartupFormModal'
import MentorFormModal from './MentorFormModal'
import InvestorFormModal from './InvestorFormModal'

const cards = [
  {
    tag: 'FOR FOUNDERS',
    tagColor: '#E25A1C',
    title: 'Connect Your Startup',
    desc: "Tell us what you're building. We'll reach out when there's a program that fits.",
    linkColor: '#E25A1C',
    modal: 'founder',
    cls: 'cta-big-s',
  },
  {
    tag: 'FOR MENTORS',
    tagColor: '#19A574',
    title: 'Connect as a Mentor',
    desc: "Share your expertise with the founders building India's sports future.",
    linkColor: '#19A574',
    modal: 'mentor',
    cls: 'cta-big-m',
  },
  {
    tag: 'FOR INVESTORS',
    tagColor: '#F5A623',
    title: 'Connect as an Investor',
    desc: 'Get first access to the most promising sports-tech startups in India.',
    linkColor: '#F5A623',
    modal: 'investor',
    cls: 'cta-big-i',
  },
]

function GetInvolved() {
  const [activeModal, setActiveModal] = useState(null)

  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

/* ================================
   CARD 1 — FOUNDERS (ORANGE)
================================ */
.cta-big-s {
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  transition: border-color 0.28s, background 0.28s, transform 0.28s;
}
.cta-big-s:hover {
  border-color: rgba(226, 90, 28, 0.4);
  background: rgba(226, 90, 28, 0.06);
  transform: translateY(-5px);
}

/* ================================
   CARD 2 — MENTORS (GREEN)
================================ */
.cta-big-m {
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  transition: border-color 0.28s, background 0.28s, transform 0.28s;
}
.cta-big-m:hover {
  border-color: rgba(25, 165, 116, 0.4);
  background: rgba(25, 165, 116, 0.06);
  transform: translateY(-5px);
}

/* ================================
   CARD 3 — INVESTORS (GOLD)
================================ */
.cta-big-i {
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  transition: border-color 0.28s, background 0.28s, transform 0.28s;
}
.cta-big-i:hover {
  border-color: rgba(245, 166, 35, 0.4);
  background: rgba(245, 166, 35, 0.06);
  transform: translateY(-5px);
}
`}</style>
      <section className="section-padding" style={{
        padding: '40px 80px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
      <style>{`
@media (max-width: 1023px) {
  .cta-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
}
@media (max-width: 767px) {
  .cta-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
  .cta-card { padding: 24px 18px !important; }
  .cta-label { font-size: 10px !important; }
  .cta-heading { font-size: 19px !important; }
  .cta-paragraph { font-size: 12.5px !important; }
  .cta-action { font-size: 12.5px !important; }
}
`}</style>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '16px',
        }}>
          <div style={{ width: '28px', height: '2px', background: '#E25A1C' }} />
          <span className="section-eyebrow" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#E25A1C' }}>
            Get Involved
          </span>
          <div style={{ width: '28px', height: '2px', background: '#E25A1C' }} />
        </div>
        <h2 className="section-heading" style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: 'clamp(44px,6vw,72px)',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '-1px',
          lineHeight: '0.92',
          color: '#ffffff',
          marginBottom: '12px',
        }}>
          YOUR MOVE. <br />
          <span style={{ color: '#E25A1C' }}>MAKE IT.</span>
        </h2>
        <p className="section-subtitle" style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '15.5px',
          fontWeight: '300',
          color: 'rgba(255,255,255,0.50)',
          lineHeight: '1.75',
          marginBottom: '40px',
        }}>
          India's sports innovation era is starting. Be part of it from day one.
        </p>
        <div className="cta-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '14px',
          textAlign: 'left',
        }}>
          {cards.map((c) => (
            <div key={c.tag} className={'cta-big cta-card ' + c.cls} style={{
              padding: '30px 22px',
              borderRadius: '14px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <span className="cta-label" style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '10.5px',
                fontWeight: '700',
                letterSpacing: '1.6px',
                textTransform: 'uppercase',
                color: c.tagColor,
                marginBottom: '10px',
              }}>
                {c.tag}
              </span>
              <h3 className="cta-heading" style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: '22px',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '8px',
              }}>
                {c.title}
              </h3>
              <p className="cta-paragraph" style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: '300',
                color: 'rgba(255,255,255,0.50)',
                lineHeight: '1.6',
                marginBottom: '22px',
              }}>
                {c.desc}
              </p>
              <span
                className="cta-action"
                onClick={() => setActiveModal(c.modal)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  color: c.linkColor,
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                Get started →
              </span>
            </div>
          ))}
        </div>
      </section>

      <StartupFormModal
        isOpen={activeModal === 'founder'}
        onClose={() => setActiveModal(null)}
      />
      <MentorFormModal
        isOpen={activeModal === 'mentor'}
        onClose={() => setActiveModal(null)}
      />
      <InvestorFormModal
        isOpen={activeModal === 'investor'}
        onClose={() => setActiveModal(null)}
      />
    </>
  )
}

export default GetInvolved
