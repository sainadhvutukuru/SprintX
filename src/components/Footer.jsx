import { useState, useEffect } from 'react'
import logo from '../assets/Sprintx.png'
import StartupFormModal from './StartupFormModal'
import MentorFormModal from './MentorFormModal'
import InvestorFormModal from './InvestorFormModal'

const socialIcons = [
  {
    name: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    name: 'X',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    name: 'YouTube',
    path: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    name: 'LinkedIn',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
]

function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null)
  const [hoveredSocial, setHoveredSocial] = useState(null)
  const [isStartupModalOpen, setIsStartupModalOpen] = useState(false)
  const [isMentorModalOpen, setIsMentorModalOpen] = useState(false)
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false)

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setIsStartupModalOpen(false)
        setIsMentorModalOpen(false)
        setIsInvestorModalOpen(false)
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <>

    <footer className="footer" style={{
      background: '#030810',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '72px 5% 36px',
    }}>
    <style>{`
@media (max-width: 1023px) {
  .footer-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; }
}
@media (max-width: 767px) {
  .footer { padding: 48px 4% 24px !important; }
  .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
  .footer-desc { font-size: 13px !important; max-width: 100% !important; }
  .footer-col-heading { font-size: 10px !important; }
  .footer-link { font-size: 13px !important; margin-bottom: 9px !important; }
  .footer-bottom { flex-direction: column !important; align-items: center !important; gap: 8px !important; text-align: center !important; }
  .footer-copyright { font-size: 11px !important; }
}
`}</style>

      {/* TOP SECTION */}
      <div className="footer-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
        gap: '60px',
        marginBottom: '60px',
      }}>

        {/* LOGO + DESC */}
        <div>
          <img
            src={logo}
            alt="SprintX Logo"
            style={{
              height: '56px',
              objectFit: 'contain',
              objectPosition: 'left',
              marginBottom: '20px',
            }}
          />
          <p className="footer-desc" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '14px',
            fontWeight: '300',
            color: 'rgba(255,255,255,0.50)',
            lineHeight: '1.8',
            marginBottom: '16px',
          }}>
            India's first full-stack Sports Innovation Accelerator. Building the sports innovation backbone of India — from grassroots to global.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
            An Inve Sports Venture initiative · sprintxcel.com
          </p>
        </div>

        {/* PROGRAMS */}
        <div>
          <p className="footer-col-heading" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10.5px',
            fontWeight: '700',
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.30)',
            marginBottom: '18px',
          }}>
            Programs
          </p>
          {['Spark', 'Stride', 'SprintX Acceleration'].map((item) => (
            <a
              key={item}
              href="#"
              className="footer-link"
              onMouseEnter={() => setHoveredLink(item)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                display: 'block',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13.5px',
                fontWeight: '300',
                color: hoveredLink === item ? '#E25A1C' : 'rgba(255,255,255,0.70)',
                marginBottom: '11px',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* ECOSYSTEM */}
        <div>
          <p className="footer-col-heading" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10.5px',
            fontWeight: '700',
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.30)',
            marginBottom: '18px',
          }}>
            Ecosystem
          </p>
          {['Inve Sports Venture', '360DSports', 'Sports Tech Podium', 'Network+'].map((item) => (
            <a
              key={item}
              href="#"
              className="footer-link"
              onMouseEnter={() => setHoveredLink(item)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                display: 'block',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13.5px',
                fontWeight: '300',
                color: hoveredLink === item ? '#E25A1C' : 'rgba(255,255,255,0.70)',
                marginBottom: '11px',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CONNECT */}
        <div>
          <p className="footer-col-heading" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10.5px',
            fontWeight: '700',
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.30)',
            marginBottom: '18px',
          }}>
            Connect
          </p>
          {[
            { label: 'Connect Your Startup', onClick: () => setIsStartupModalOpen(true) },
            { label: 'Connect as a Mentor', onClick: () => setIsMentorModalOpen(true) },
            { label: 'Connect as an Investor', onClick: () => setIsInvestorModalOpen(true) },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              className="footer-link"
              onClick={(e) => { e.preventDefault(); item.onClick() }}
              onMouseEnter={() => setHoveredLink(item.label)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                display: 'block',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13.5px',
                fontWeight: '300',
                color: hoveredLink === item.label ? '#E25A1C' : 'rgba(255,255,255,0.70)',
                marginBottom: '11px',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                cursor: 'pointer',
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            className="footer-link"
            href="mailto:hello@sprintxcel.com"
            onMouseEnter={() => setHoveredLink('hello@sprintxcel.com')}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              display: 'block',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13.5px',
              fontWeight: '300',
              color: hoveredLink === 'hello@sprintxcel.com' ? '#E25A1C' : 'rgba(255,255,255,0.70)',
              marginBottom: '11px',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
          >
            hello@sprintxcel.com
          </a>
        </div>

        {/* SOCIAL ICONS — centered below Programs, Ecosystem, Connect */}
        <div style={{
          gridColumn: '2 / -1',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          paddingTop: '12px',
        }}>
          {socialIcons.map((icon) => (
            <a
              key={icon.name}
              href="#"
              onMouseEnter={() => setHoveredSocial(icon.name)}
              onMouseLeave={() => setHoveredSocial(null)}
              style={{
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: hoveredSocial === icon.name ? '#E25A1C' : 'rgba(255,255,255,0.5)',
                transition: 'color 0.2s ease',
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                <path d={icon.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom" style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <p className="footer-copyright" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
          © 2026 SprintX · Inve Sports Venture · Hyderabad, India
        </p>
        <p className="footer-copyright" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
          sprintxcel.com
        </p>
      </div>

    </footer>

      <StartupFormModal
        isOpen={isStartupModalOpen}
        onClose={() => setIsStartupModalOpen(false)}
      />
      <MentorFormModal
        isOpen={isMentorModalOpen}
        onClose={() => setIsMentorModalOpen(false)}
      />
      <InvestorFormModal
        isOpen={isInvestorModalOpen}
        onClose={() => setIsInvestorModalOpen(false)}
      />
    </>
  )
}

export default Footer
