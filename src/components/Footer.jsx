function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '60px 80px 32px',
    }}>

      {/* TOP SECTION */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
        gap: '60px',
        marginBottom: '60px',
      }}>

        {/* LOGO + DESC */}
        <div>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '22px',
            letterSpacing: '3px',
            color: '#fff',
            marginBottom: '20px',
          }}>
            SPRINT<span style={{ color: '#c94f1a' }}>X</span>
          </div>
          <p style={{
            fontSize: '14px',
            color: '#666',
            lineHeight: '1.8',
            marginBottom: '16px',
          }}>
            India's first full-stack Sports Innovation Accelerator. Building the sports innovation backbone of India — from grassroots to global.
          </p>
          <p style={{ fontSize: '12px', color: '#444' }}>
            An Inve Sports Venture initiative · sprintxcel.com
          </p>
        </div>

        {/* PROGRAMS */}
        <div>
          <p style={{
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#555',
            marginBottom: '20px',
            fontWeight: '600',
          }}>
            Programs
          </p>
          {['Spark', 'Stride', 'SprintX Acceleration', 'Sports Tech Podium'].map((item) => (
            <a key={item} href="#" style={{
              display: 'block',
              fontSize: '14px',
              color: '#777',
              marginBottom: '12px',
              textDecoration: 'none',
            }}>
              {item}
            </a>
          ))}
        </div>

        {/* ECOSYSTEM */}
        <div>
          <p style={{
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#555',
            marginBottom: '20px',
            fontWeight: '600',
          }}>
            Ecosystem
          </p>
          {['Inve Sports Venture', 'South Clan', 'Network+', 'Sports Tech Podium'].map((item) => (
            <a key={item} href="#" style={{
              display: 'block',
              fontSize: '14px',
              color: '#777',
              marginBottom: '12px',
              textDecoration: 'none',
            }}>
              {item}
            </a>
          ))}
        </div>

        {/* CONNECT */}
        <div>
          <p style={{
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#555',
            marginBottom: '20px',
            fontWeight: '600',
          }}>
            Connect
          </p>
          {['Connect Your Startup', 'Connect as a Mentor', 'Connect as an Investor', 'hello@sprintxcel.com'].map((item) => (
            <a key={item} href="#" style={{
              display: 'block',
              fontSize: '14px',
              color: '#777',
              marginBottom: '12px',
              textDecoration: 'none',
            }}>
              {item}
            </a>
          ))}
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <p style={{ fontSize: '12px', color: '#444' }}>
          © 2026 SprintX · Inve Sports Venture · Hyderabad, India
        </p>
        <p style={{ fontSize: '12px', color: '#444' }}>
          sprintxcel.com
        </p>
      </div>

    </footer>
  )
}

export default Footer