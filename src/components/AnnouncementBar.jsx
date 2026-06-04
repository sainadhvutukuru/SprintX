import { useState, useEffect } from 'react'

function AnnouncementBar() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{
      backgroundColor: '#c94f1a',
      textAlign: 'center',
      padding: '10px 20px',
      fontSize: '13px',
      fontWeight: '500',
      letterSpacing: '0.3px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      cursor: 'pointer',
      transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'transform 0.3s ease',
    }}>
      ⚡ Press Launch Event — June 15, 2026 · Hyderabad · India's Sports Innovation Era Begins →
    </div>
  )
}

export default AnnouncementBar