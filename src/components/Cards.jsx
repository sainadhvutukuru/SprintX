import { useState } from 'react'
import StartupFormModal from './StartupFormModal'
import MentorFormModal from './MentorFormModal'
import InvestorFormModal from './InvestorFormModal'

const cards = [
  {
    icon: '🚀',
    tag: 'For Founders',
    tagColor: '#e05c1a',
    title: 'Building in Sports Tech?',
    desc: 'From raw idea to first revenue to scale — your home is right here.',
    btnText: 'Get started',
    btnColor: '#e05c1a',
    modal: 'founder',
  },
  {
    icon: '🎯',
    tag: 'For Mentors',
    tagColor: '#1db97a',
    title: 'Built Something Worth Sharing?',
    desc: 'Help the next wave of sports-tech founders build smarter, faster, better.',
    btnText: 'Get started',
    btnColor: '#1db97a',
    modal: 'mentor',
  },
  {
    icon: '📈',
    tag: 'For Investors',
    tagColor: '#d4a017',
    title: 'Want Early Access to Deal Flow?',
    desc: "First look at India's most promising sports-tech startups — before anyone else.",
    btnText: 'Get started',
    btnColor: '#d4a017',
    modal: 'investor',
  },
]

function Cards() {
  const [activeModal, setActiveModal] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <>
      <style>{`
@media (max-width: 1023px) {
  .cards-grid { grid-template-columns: 1fr !important; }
}
@media (max-width: 767px) {
  .cards-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
  .cards-section { padding: 40px 4% !important; }
}
`}</style>
      <section className="cards-section" style={{
        padding: '60px 48px 80px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div className="cards-grid" style={{
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
                border: '1px solid rgba(255,255,255,0.08)',
                borderBottom: hoveredCard === card.tag ? `3px solid ${card.btnColor}` : '3px solid transparent',
                borderRadius: '12px',
                padding: '32px 28px',
                background: hoveredCard === card.tag
                  ? `${card.btnColor}0f`
                  : 'rgba(255,255,255,0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                overflow: 'hidden',
                transform: hoveredCard === card.tag ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'all 0.25s ease',
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
                <span style={{
                  display: 'inline-block',
                  transition: 'margin-left 0.25s ease',
                  marginLeft: hoveredCard === card.tag ? '4px' : '0',
                }}> →</span>
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