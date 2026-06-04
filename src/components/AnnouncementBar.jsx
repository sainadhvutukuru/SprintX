import { useState, useEffect } from 'react'

function AnnouncementBar() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <style>{`
@media (max-width: 767px) {
  .ann-bar {
    font-size: 11px !important;
    padding: 8px 4% !important;
    text-align: center !important;
    letter-spacing: 0.4px !important;
  }
}
`}</style>
    <div className="ann-bar" style={{
      backgroundColor: '#E25A1C',
      textAlign: 'center',
      padding: '10px 20px',
      fontSize: '12.5px',
      fontWeight: '600',
      letterSpacing: '0.6px',
      fontFamily: "'DM Sans', sans-serif",
      color: '#ffffff',
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
    </>
  )
}

export default AnnouncementBar