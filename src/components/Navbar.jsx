import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MentorFormModal from './MentorFormModal'
import StartupFormModal from './StartupFormModal'
// import logo from '../assets/Sprintx Official Logo.png'
import logo from '../assets/Sprintx.png'

function Navbar() {
  const location = useLocation()
  const [isMentorModalOpen, setIsMentorModalOpen] = useState(false)
  const [isStartupModalOpen, setIsStartupModalOpen] = useState(false)

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setIsMentorModalOpen(false)
        setIsStartupModalOpen(false)
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [])

  const linkStyle = (path) => ({
    color: location.pathname === path ? '#ffffff' : 'rgba(255,255,255,0.70)',
    fontSize: '13.5px',
    fontWeight: '500',
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: '0.3px',
    textDecoration: 'none',
    borderBottom: location.pathname === path ? '2px solid #E25A1C' : '2px solid transparent',
    paddingBottom: '4px',
  })

  return (
    <>
    <style>{`
@media (max-width: 1023px) {
  .nav-links { display: none !important; }
  .navbar { padding: 0 4% !important; }
}
@media (max-width: 767px) {
  .navbar { padding: 0 4% !important; height: 60px !important; }
  .nav-links { display: none !important; }
  .nav-logo { height: 28px !important; }
  .nav-btn-mentor { display: none !important; }
  .nav-btn-startup {
    display: block !important;
    font-size: 11px !important;
    padding: 7px 12px !important;
    border-radius: 6px !important;
  }
}
`}</style>
    <nav className="navbar" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 48px',
      position: 'sticky',
      top: '0',
      zIndex: '100',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: '#080c14',
      backdropFilter: 'blur(10px)',
    }}>

      {/* LOGO */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img
          src={logo}
          alt="SprintX Logo"
          className="nav-logo"
          style={{
            height: '40px',
            width: 'auto',
            objectFit: 'contain',
            objectPosition: 'left',
          }}
        />
      </Link>

      {/* NAV LINKS */}
      <ul className="nav-links" style={{
        display: 'flex',
        gap: '36px',
        listStyle: 'none',
      }}>
        <li><Link to="/" style={linkStyle('/')}>Home</Link></li>
        <li><Link to="/programs" style={linkStyle('/programs')}>Programs</Link></li>
        <li><Link to="/about" style={linkStyle('/about')}>About Us</Link></li>
      </ul>

      {/* BUTTONS */}
      <div style={{ display: 'flex', gap: '12px' }}>
        <button className="nav-btn-mentor" onClick={() => setIsMentorModalOpen(true)} style={{
          padding: '9px 20px',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: '8px',
          background: 'transparent',
          color: 'rgba(255,255,255,0.90)',
          fontSize: '13px',
          fontWeight: '600',
          fontFamily: "'DM Sans', sans-serif",
          cursor: 'pointer',
        }}>
          Connect as a Mentor
        </button>
        <button className="nav-btn-startup" onClick={() => setIsStartupModalOpen(true)} style={{
          padding: '9px 20px',
          border: 'none',
          borderRadius: '8px',
          background: '#E25A1C',
          color: '#ffffff',
          fontSize: '13px',
          fontWeight: '600',
          fontFamily: "'DM Sans', sans-serif",
          cursor: 'pointer',
        }}>
          Connect Your Startup
        </button>
      </div>

    </nav>

      <MentorFormModal
        isOpen={isMentorModalOpen}
        onClose={() => setIsMentorModalOpen(false)}
      />
      <StartupFormModal
        isOpen={isStartupModalOpen}
        onClose={() => setIsStartupModalOpen(false)}
      />
    </>
  )
}

export default Navbar