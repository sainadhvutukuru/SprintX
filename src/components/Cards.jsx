import { useState } from 'react'
import StartupFormModal from './StartupFormModal'
import MentorFormModal from './MentorFormModal'
import InvestorFormModal from './InvestorFormModal'

const cards = [
  {
    icon: '🚀',
    tag: 'For Founders',
    tagColor: '#f15b26',
    title: 'Building in Sports Tech?',
    desc: 'From raw idea to first revenue to scale — your home is right here.',
    btnText: 'Connect Your Startup',
    btnColor: '#f15b26',
    topBorder: '#f15b26',
    modal: 'founder',
  },
  {
    icon: '🎯',
    tag: 'For Mentors',
    tagColor: '#1aa88a',
    title: 'Built Something Worth Sharing?',
    desc: 'Help the next wave of sports-tech founders build smarter, faster, better.',
    btnText: 'Connect as a Mentor',
    btnColor: '#1aa88a',
    topBorder: '#1aa88a',
    modal: 'mentor',
  },
  {
    icon: '📈',
    tag: 'For Investors',
    tagColor: '#d4a017',
    title: 'Want Early Access to Deal Flow?',
    desc: "First look at India's most promising sports-tech startups — before anyone else.",
    btnText: 'Connect as an Investor',
    btnColor: '#d4a017',
    topBorder: '#d4a017',
    modal: 'investor',
  },
]

function Cards() {
  const [activeModal, setActiveModal] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <>
      <section style={{
        padding: '60px 48px 80px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}>
          {cards.map((card) => (
            <div
              key={card.tag}
              onMouseEnter={() => setHoveredCard(card.tag)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                border: `1px solid ${hoveredCard === card.tag ? card.btnColor : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '12px',
                padding: '32px 28px',
                background: hoveredCard === card.tag
                  ? `${card.btnColor}15`
                  : 'rgba(255,255,255,0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                overflow: 'hidden',
                borderTop: `3px solid ${card.topBorder}`,
                transform: hoveredCard === card.tag ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hoveredCard === card.tag
                  ? `0 12px 40px ${card.btnColor}30`
                  : 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}>

              <div style={{
                fontSize: '28px',
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                background: `${card.btnColor}22`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {card.icon}
              </div>

              <div style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: card.tagColor,
              }}>
                {card.tag}
              </div>

              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#fff',
                lineHeight: '1.3',
              }}>
                {card.title}
              </h3>

              <p style={{
                fontSize: '14px',
                color: '#777',
                lineHeight: '1.65',
                flex: '1',
              }}>
                {card.desc}
              </p>

              <button
                onClick={() => setActiveModal(card.modal)}
                style={{
                  padding: '11px 22px',
                  borderRadius: '7px',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: 'none',
                  background: card.btnColor,
                  color: '#fff',
                  width: '100%',
                  cursor: 'pointer',
                }}>
                {card.btnText}
              </button>

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

export default Cards