import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/Sprintx Official Logo.png'

function Navbar() {
  const location = useLocation()

  const linkStyle = (path) => ({
    color: location.pathname === path ? '#f15b26' : '#ccc',
    fontSize: '14px',
    fontWeight: location.pathname === path ? '700' : '500',
    textDecoration: 'none',
    borderBottom: location.pathname === path ? '2px solid #f15b26' : '2px solid transparent',
    paddingBottom: '4px',
  })

  return (
    <nav style={{
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
          style={{
            height: '90px',
            width: '240px',
            objectFit: 'contain',
            objectPosition: 'left',
          }}
        />
      </Link>

      {/* NAV LINKS */}
      <ul style={{
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
        <button style={{
          padding: '8px 18px',
          border: '1.5px solid #1586c8',
          borderRadius: '6px',
          background: 'transparent',
          color: '#1586c8',
          fontSize: '13px',
          fontWeight: '500',
          cursor: 'pointer',
        }}>
          Connect as a Mentor
        </button>
        <button style={{
          padding: '8px 18px',
          border: 'none',
          borderRadius: '6px',
          background: '#f15b26',
          color: '#fff',
          fontSize: '13px',
          fontWeight: '600',
          cursor: 'pointer',
        }}>
          Connect Your Startup
        </button>
      </div>

    </nav>
  )
}

export default Navbar