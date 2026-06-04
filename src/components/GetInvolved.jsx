import { useState } from 'react'
import StartupFormModal from './StartupFormModal'
import MentorFormModal from './MentorFormModal'
import InvestorFormModal from './InvestorFormModal'

const cards = [
  {
    tag: 'For Founders',
    tagColor: '#f15b26',
    title: 'Connect Your Startup',
    desc: "Tell us what you're building. We'll reach out when there's a program that fits.",
    linkColor: '#f15b26',
    modal: 'founder',
  },
  {
    tag: 'For Mentors',
    tagColor: '#1aa88a',
    title: 'Connect as a Mentor',
    desc: "Share your expertise with the founders building India's sports future.",
    linkColor: '#1aa88a',
    modal: 'mentor',
  },
  {
    tag: 'For Investors',
    tagColor: '#d4a017',
    title: 'Connect as an Investor',
    desc: 'Get first access to the most promising sports-tech startups in India.',
    linkColor: '#d4a017',
    modal: 'investor',
  },
]

function GetInvolved() {
  const [activeModal, setActiveModal] = useState(null)

  return (
    <>
      <section style={{
        padding: '40px 80px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '16px',
        }}>
          <div style={{ width: '32px', height: '2px', background: '#f15b26' }} />
          <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#f15b26' }}>
            Get Involved
          </span>
          <div style={{ width: '32px', height: '2px', background: '#f15b26' }} />
        </div>
        <h2 style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: '96px',
          fontWeight: '700',
          textTransform: 'uppercase',
          lineHeight: '1',
          color: '#fff',
          marginBottom: '12px',
        }}>
          YOUR MOVE. <br />
          <span style={{ color: '#f15b26' }}>MAKE IT.</span>
        </h2>
        <p style={{
          fontSize: '15px',
          color: '#777',
          lineHeight: '1.7',
          marginBottom: '40px',
        }}>
          India's sports innovation era is starting. Be part of it from day one.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          textAlign: 'left',
        }}>
          {cards.map((c) => (
            <div key={c.tag} style={{
              padding: '28px',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.02)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              <span style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: c.tagColor,
              }}>
                {c.tag}
              </span>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#fff',
                lineHeight: '1.3',
              }}>
                {c.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.7',
                flex: '1',
              }}>
                {c.desc}
              </p>
              <span
                onClick={() => setActiveModal(c.modal)}
                style={{
                  fontSize: '14px',
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
