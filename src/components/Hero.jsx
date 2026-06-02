function Hero() {
  return (
    <section style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px 24px 30px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* BACKGROUND DOT GRID */}
      <div style={{
        position: 'absolute',
        inset: '0',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      {/* LAUNCH BADGE */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '999px',
        padding: '7px 18px',
        fontSize: '12px',
        fontWeight: '600',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: '#aaa',
        marginBottom: '36px',
        position: 'relative',
        zIndex: '1',
      }}>
        <div style={{
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          backgroundColor: '#4ecb71',
          boxShadow: '0 0 6px #4ecb71',
        }} />
        Launching August 2026 · Hyderabad, India
      </div>

      {/* HERO TITLE */}
      <h1 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        lineHeight: '0.92',
        letterSpacing: '2px',
        position: 'relative',
        zIndex: '1',
      }}>
        <span style={{
          display: 'block',
          fontSize: 'clamp(64px, 10vw, 120px)',
          color: '#fff',
        }}>
          INDIA'S SPORTS
        </span>
        <span style={{
          display: 'block',
          fontSize: 'clamp(64px, 10vw, 120px)',
          color: '#1586c8',
        }}>
          INNOVATION
        </span>
        <span style={{
          display: 'block',
          fontSize: 'clamp(64px, 10vw, 120px)',
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
        <span style={{ color: '#1586c8' }}>·</span>
        <span>STRIDE TO REVENUE</span>
        <span style={{ color: '#1586c8' }}>·</span>
        <span>SPRINT TO SCALE</span>
      </div>

    </section>
  )
}

export default Hero