import { useState, useEffect, useRef } from 'react'
import StartupFormModal from './StartupFormModal'
import MentorFormModal from './MentorFormModal'
import InvestorFormModal from './InvestorFormModal'

const cards = [
  {
    icon: '🚀',
    tag: 'For Founders',
    tagColor: '#E25A1C',
    title: 'Building in Sports Tech?',
    desc: 'From raw idea to first revenue to scale — your home is right here.',
    btnText: 'Connect Your Startup',
    btnColor: '#E25A1C',
    borderTopColor: '#E25A1C',
    hoverBorderColor: 'rgba(226,90,28,0.4)',
    glowColor: 'rgba(226,90,28,0.10)',
    modal: 'founder',
  },
  {
    icon: '🎯',
    tag: 'For Mentors',
    tagColor: '#19A574',
    title: 'Built Something Worth Sharing?',
    desc: 'Help the next wave of sports-tech founders build smarter, faster, better.',
    btnText: 'Connect as a Mentor',
    btnColor: '#19A574',
    borderTopColor: '#19A574',
    hoverBorderColor: 'rgba(25,165,116,0.4)',
    glowColor: 'rgba(25,165,116,0.10)',
    modal: 'mentor',
  },
  {
    icon: '📈',
    tag: 'For Investors',
    tagColor: '#F5A623',
    title: 'Want Early Access to Deal Flow?',
    desc: "First look at India's most promising sports-tech startups — before anyone else.",
    btnText: 'Connect as an Investor',
    btnColor: '#F5A623',
    borderTopColor: '#F5A623',
    hoverBorderColor: 'rgba(245,166,35,0.4)',
    glowColor: 'rgba(245,166,35,0.10)',
    modal: 'investor',
  },
]

function Hero() {
  const [activeModal, setActiveModal] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext('2d');
    let W, H, mx = 0, my = 0;
    let animFrameId;

    function resize() {
      W = c.width = c.offsetWidth;
      H = c.height = c.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', function(e) {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    });

    var isMobile = window.innerWidth < 768;
    var scale = isMobile ? 0.7 : 1;
    var rings = [
      {
        rx: 0.38 * scale, ry: 0.13 * scale,
        angle: 0, speed: 0.0006,
        tilt: -0.45,
        color: 'rgba(27,126,200,',
        dots: isMobile ? 3 : 5, sz: isMobile ? 1.5 : 2.5
      },
      {
        rx: 0.52 * scale, ry: 0.18 * scale,
        angle: 1.2, speed: 0.0004,
        tilt: 0.35,
        color: 'rgba(226,90,28,',
        dots: isMobile ? 2 : 3, sz: isMobile ? 1.5 : 2
      },
      {
        rx: 0.62 * scale, ry: 0.22 * scale,
        angle: 2.4, speed: 0.0003,
        tilt: -0.2,
        color: 'rgba(27,126,200,',
        dots: isMobile ? 3 : 4, sz: isMobile ? 1 : 1.5
      }
    ];

    function draw() {
      ctx.clearRect(0, 0, W, H);
      var cx = W / 2 + mx * 30;
      var cy = H / 2 + my * 30;

      rings.forEach(function(r) {
        r.angle += r.speed;
        var rx = W * r.rx;
        var ry = W * r.ry;
        var t = r.tilt + mx * 0.15;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t);
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = r.color + '0.10)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();

        for (var d = 0; d < r.dots; d++) {
          var a = r.angle + d * (Math.PI * 2 / r.dots);
          var dx = Math.cos(a) * rx;
          var dy = Math.sin(a) * ry;
          var cos = Math.cos(t);
          var sin = Math.sin(t);
          var px = dx * cos - dy * sin + cx;
          var py = dx * sin + dy * cos + cy;

          ctx.beginPath();
          ctx.arc(px, py, r.sz, 0, Math.PI * 2);
          ctx.fillStyle = r.color + '0.65)';
          ctx.fill();
        }
      });

      animFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
    <style>{`
@media (max-width: 1023px) {
  .hero-section { padding: 130px 4% 80px !important; }
  .hero-h1 { font-size: clamp(52px, 8vw, 96px) !important; }
  .hero-cards { grid-template-columns: 1fr !important; }
}
@media (max-width: 767px) {
  .hero-section { padding: 120px 4% 70px !important; }
  .hero-h1 { font-size: clamp(42px, 12vw, 64px) !important; letter-spacing: -1px !important; }
  .hero-subtitle { font-size: 14px !important; line-height: 1.65 !important; margin-bottom: 20px !important; }
  .hero-tagline { font-size: 11px !important; letter-spacing: 2px !important; margin-bottom: 40px !important; }
  .hero-cards { grid-template-columns: 1fr !important; gap: 12px !important; }
  .hero-card { padding: 22px 18px 18px !important; text-align: left !important; }
  .hero-canvas { opacity: 0.4 !important; }
}
`}</style>
    <section className="hero-section" style={{
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
      <canvas ref={canvasRef} className="hero-canvas" style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.7
      }} />

      {/* HERO TITLE */}
      <h1 className="hero-h1" style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: 'clamp(64px,10vw,130px)',
        fontWeight: '700',
        textTransform: 'uppercase',
        lineHeight: '0.92',
        letterSpacing: '2px',
        position: 'relative',
        zIndex: '1',
      }}>
        <span style={{
          display: 'block',
          color: '#ffffff',
        }}>
          INDIA'S SPORTS
        </span>
        <span style={{
          display: 'block',
          background: 'linear-gradient(90deg,#1B7EC8,#5DB8F0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          INNOVATION
        </span>
        <span style={{
          display: 'block',
          color: '#E25A1C',
        }}>
          ACCELERATOR
        </span>
      </h1>

      {/* SUBTITLE */}
      <p className="hero-subtitle" style={{
        marginTop: '32px',
        maxWidth: '620px',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '17px',
        fontWeight: '300',
        lineHeight: '1.75',
        color: 'rgba(255,255,255,0.70)',
        position: 'relative',
        zIndex: '1',
      }}>
        The only platform in India that takes a sports-tech founder from a raw idea
        all the way to a funded, scaled company — inside a single ecosystem built for exactly this.
      </p>

      {/* TAGLINE PILLS */}
      <div className="hero-tagline" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        marginTop: '28px',
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: '13px',
        fontWeight: '600',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.30)',
        position: 'relative',
        zIndex: '1',
      }}>
        <span>SPARK THE IDEA</span>
        <span style={{ color: '#E25A1C' }}>·</span>
        <span>STRIDE TO REVENUE</span>
        <span style={{ color: '#E25A1C' }}>·</span>
        <span>SPRINT TO SCALE</span>
      </div>

      {/* CARDS GRID */}
      <div className="hero-cards" style={{
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
            className="hero-card"
            onMouseEnter={() => setHoveredCard(card.tag)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              borderTop: `3px solid ${card.borderTopColor}`,
              borderRight: `1px solid ${hoveredCard === card.tag ? card.hoverBorderColor : 'rgba(255,255,255,0.08)'}`,
              borderBottom: `1px solid ${hoveredCard === card.tag ? card.hoverBorderColor : 'rgba(255,255,255,0.08)'}`,
              borderLeft: `1px solid ${hoveredCard === card.tag ? card.hoverBorderColor : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '16px',
              padding: '28px 22px 22px',
              background: 'rgba(255,255,255,0.04)',
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
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10.5px',
              fontWeight: '700',
              letterSpacing: '1.6px',
              textTransform: 'uppercase',
              color: card.tagColor,
              position: 'relative',
              zIndex: 1,
            }}>
              {card.tag}
            </div>
            <h3 style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: '20px',
              fontWeight: '700',
              color: '#ffffff',
              lineHeight: '1.2',
              position: 'relative',
              zIndex: 1,
            }}>
              {card.title}
            </h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              fontWeight: '300',
              color: 'rgba(255,255,255,0.50)',
              lineHeight: '1.6',
              flex: '1',
              position: 'relative',
              zIndex: 1,
            }}>
              {card.desc}
            </p>
            <button
              onClick={() => setActiveModal(card.modal)}
              style={{
                padding: '10px 0',
                borderRadius: '7px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
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