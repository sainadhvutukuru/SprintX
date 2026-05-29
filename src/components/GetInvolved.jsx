const cards = [
  {
    tag: 'For Founders',
    tagColor: '#c94f1a',
    title: 'Connect Your Startup',
    desc: "Tell us what you're building. We'll reach out when there's a program that fits.",
    linkColor: '#c94f1a',
  },
  {
    tag: 'For Mentors',
    tagColor: '#1aa88a',
    title: 'Connect as a Mentor',
    desc: "Share your expertise with the founders building India's sports future.",
    linkColor: '#1aa88a',
  },
  {
    tag: 'For Investors',
    tagColor: '#d4a017',
    title: 'Connect as an Investor',
    desc: 'Get first access to the most promising sports-tech startups in India.',
    linkColor: '#d4a017',
  },
]

function GetInvolved() {
  return (
    <section style={{
      padding: '40px 80px',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
    }}>

      {/* LABEL */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '24px',
      }}>
        <div style={{ width: '32px', height: '2px', background: '#c94f1a' }} />
        <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#c94f1a' }}>
          Get Involved
        </span>
        <div style={{ width: '32px', height: '2px', background: '#c94f1a' }} />
      </div>

      {/* TITLE */}
      <h2 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(56px, 8vw, 100px)',
        lineHeight: '1',
        color: '#fff',
        marginBottom: '20px',
      }}>
        YOUR MOVE. <br />
        <span style={{ color: '#c94f1a' }}>MAKE IT.</span>
      </h2>

      {/* SUBTITLE */}
      <p style={{
        fontSize: '16px',
        color: '#777',
        lineHeight: '1.7',
        marginBottom: '60px',
      }}>
        India's sports innovation era is starting. Be part of it from day one.
      </p>

      {/* CARDS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        textAlign: 'left',
      }}>
        {cards.map((c) => (
          <div key={c.tag} style={{
            padding: '32px 28px',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.02)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}>

            {/* TAG */}
            <span style={{
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: c.tagColor,
            }}>
              {c.tag}
            </span>

            {/* TITLE */}
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#fff',
              lineHeight: '1.3',
            }}>
              {c.title}
            </h3>

            {/* DESC */}
            <p style={{
              fontSize: '14px',
              color: '#666',
              lineHeight: '1.7',
              flex: '1',
            }}>
              {c.desc}
            </p>

            {/* LINK */}
            <a href="#" style={{
              fontSize: '14px',
              fontWeight: '600',
              color: c.linkColor,
              textDecoration: 'none',
            }}>
              Get started →
            </a>

          </div>
        ))}
      </div>

    </section>
  )
}

export default GetInvolved