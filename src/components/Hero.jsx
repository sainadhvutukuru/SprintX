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
    btnText: 'Connect Your Startup',
    btnColor: '#e05c1a',
    borderTopColor: '#e25a1c',
    hoverBorderColor: 'rgba(226,90,28,0.4)',
    glowColor: 'rgba(226,90,28,0.10)',
    modal: 'founder',
  },
  {
    icon: '🎯',
    tag: 'For Mentors',
    tagColor: '#1db97a',
    title: 'Built Something Worth Sharing?',
    desc: 'Help the next wave of sports-tech founders build smarter, faster, better.',
    btnText: 'Connect as a Mentor',
    btnColor: '#1db97a',
    borderTopColor: '#19a574',
    hoverBorderColor: 'rgba(25,165,116,0.4)',
    glowColor: 'rgba(25,165,116,0.10)',
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
    borderTopColor: '#f5a623',
    hoverBorderColor: 'rgba(245,166,35,0.4)',
    glowColor: 'rgba(245,166,35,0.10)',
    modal: 'investor',
  },
]

function Hero() {
  const [activeModal, setActiveModal] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <>
    <section style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '80px 24px 30px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* HERO TITLE */}
      <h1 style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: '130px',
        fontWeight: '700',
        textTransform: 'uppercase',
        lineHeight: '0.92',
        letterSpacing: '2px',
        position: 'relative',
        zIndex: '1',
      }}>
        <span style={{
          display: 'block',
          color: '#fff',
        }}>
          INDIA'S SPORTS
        </span>
        <span style={{
          display: 'block',
          color: '#1586c8',
        }}>
          INNOVATION
        </span>
        <span style={{
          display: 'block',
          color: '#f15b26',
        }}>
          ACCELERATOR
        </span>
      </h1>

      {/* SUBTITLE */}
      <p style={{
        marginTop: '32px',
        maxWidth: '620px',
        fontSize: '16px',
        lineHeight: '1.7',
        color: '#999',
        position: 'relative',
        zIndex: '1',
      }}>
        The only platform in India that takes a sports-tech founder from a raw idea
        all the way to a funded, scaled company — inside a single ecosystem built for exactly this.
      </p>

      {/* TAGLINE PILLS */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        marginTop: '28px',
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '2.5px',
        textTransform: 'uppercase',
        color: '#555',
        position: 'relative',
        zIndex: '1',
      }}>
        <span>SPARK THE IDEA</span>
        <span style={{ color: '#e05c1a' }}>·</span>
        <span>STRIDE TO REVENUE</span>
        <span style={{ color: '#e05c1a' }}>·</span>
        <span>SPRINT TO SCALE</span>
      </div>

      {/* CARDS GRID */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        textAlign: 'left',
        marginTop: '48px',
        maxWidth: '1000px',
        width: '100%',
        position: 'relative',
        zIndex: '1',
      }}>
        {cards.map((card) => (
          <div
            key={card.tag}
            onMouseEnter={() => setHoveredCard(card.tag)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              borderTop: `3px solid ${card.borderTopColor}`,
              borderRight: `1px solid ${hoveredCard === card.tag ? card.hoverBorderColor : 'rgba(255,255,255,0.08)'}`,
              borderBottom: `1px solid ${hoveredCard === card.tag ? card.hoverBorderColor : 'rgba(255,255,255,0.08)'}`,
              borderLeft: `1px solid ${hoveredCard === card.tag ? card.hoverBorderColor : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '12px',
              padding: '32px 28px',
              background: 'rgba(255,255,255,0.02)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              position: 'relative',
              overflow: 'hidden',
              transform: hoveredCard === card.tag ? 'translateY(-6px)' : 'translateY(0)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}>
            {/* HOVER GLOW */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '12px',
              opacity: hoveredCard === card.tag ? 1 : 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none',
              background: `radial-gradient(ellipse at top left, ${card.glowColor}, transparent 65%)`,
            }} />
            <div style={{
              fontSize: '28px',
              width: '48px',
              height: '48px',
              borderRadius: '10px',
              background: `${card.btnColor}22`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 1,
            }}>
              {card.icon}
            </div>
            <div style={{
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: card.tagColor,
              position: 'relative',
              zIndex: 1,
            }}>
              {card.tag}
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#fff',
              lineHeight: '1.3',
              position: 'relative',
              zIndex: 1,
            }}>
              {card.title}
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#777',
              lineHeight: '1.65',
              flex: '1',
              position: 'relative',
              zIndex: 1,
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
                position: 'relative',
                zIndex: 1,
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

export default Hero