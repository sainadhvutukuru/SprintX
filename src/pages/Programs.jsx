import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const programs = [
  {
    icon: '🚀',
    badge: 'ACTIVE',
    badgeColor: '#1aa88a',
    name: 'Spark',
    stage: 'Idea Stage',
    desc: 'From raw idea to validated MVP. Built for students, athletes and early founders entering sports-tech.',
    duration: '3–8 Months',
    fee: 'Rs 10,000–15,000',
    who: 'Students · Athletes · Early Founders',
    tracks: 'University + Open',
    domain: 'idea',
    btnColor: '#f15b26',
    headerBg: '#1a0e06',
  },
  {
    icon: '⚡',
    badge: 'ACTIVE',
    badgeColor: '#1aa88a',
    name: 'Stride',
    stage: 'MVP Stage',
    desc: 'From first product to first revenue. Built for founders who have a working MVP and need market access.',
    duration: '16–20 Weeks',
    fee: 'Rs 25,000–30,000',
    who: 'Founders with Working MVP',
    equity: '1%–2%',
    domain: 'mvp',
    btnColor: '#1586c8',
    headerBg: '#061a10',
  },
  {
    icon: '🏆',
    badge: 'ACTIVE',
    badgeColor: '#1aa88a',
    name: 'SprintX Acceleration',
    stage: 'Scale Stage',
    desc: 'From revenue to scale. Built for revenue-stage founders ready to raise and expand across India.',
    duration: '24 Weeks',
    fee: 'No Fee — Cohorts 1–3',
    who: 'Revenue-Stage Founders',
    equity: '3%–5% (Cohorts 1–3)',
    domain: 'scale',
    btnColor: '#f15b26',
    headerBg: '#061018',
  },
]

function ProgramsPage() {
  const [search, setSearch] = useState('')
  const [domain, setDomain] = useState('')
  const [hoveredCard, setHoveredCard] = useState(null)

  const filtered = programs.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase())
    const matchDomain = domain === '' || p.domain === domain
    return matchSearch && matchDomain
  })

  const inputStyle = {
    padding: '12px 20px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    backgroundColor: '#0d1220',
    cursor: 'pointer',
  }

  return (
    <div>

      {/* STICKY NAV */}
      <div style={{
        position: 'sticky',
        top: '0',
        zIndex: '100',
        background: '#080c14',
      }}>
        <Navbar />
      </div>

      {/* HEADER */}
      <div style={{
        background: '#080c14',
        padding: '60px 80px 40px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '13px',
          color: '#555',
          marginBottom: '32px',
          justifyContent: 'flex-start',
        }}>
          <Link to="/" style={{ color: '#555', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <span style={{ color: '#fff' }}>Programs</span>
        </div>

        <div style={{
          display: 'inline-block',
          background: '#f15b26',
          color: '#fff',
          fontSize: '12px',
          fontWeight: '700',
          letterSpacing: '2px',
          padding: '8px 24px',
          borderRadius: '999px',
          marginBottom: '24px',
        }}>
          OUR PROGRAMS
        </div>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(40px, 5vw, 64px)',
          color: '#fff',
          marginBottom: '16px',
          letterSpacing: '1px',
        }}>
          Explore Our Accelerator Programs
        </h1>

        <p style={{
          fontSize: '16px',
          color: '#777',
          lineHeight: '1.7',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          Find the perfect program for your startup's current stage and goals. Each program offers tailored mentorship, funding access, and strategic resources.
        </p>
      </div>

      {/* FILTER SECTION */}
      <div style={{ background: '#0d1220', padding: '32px 80px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '12px',
          padding: '32px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '8px', textAlign: 'center' }}>
            Find the right program for your startup
          </h3>
          <p style={{ fontSize: '14px', color: '#666', textAlign: 'center', marginBottom: '24px' }}>
            Explore and find the perfect program to fast-track your startup's growth.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            <select value={domain} onChange={(e) => setDomain(e.target.value)}
              style={{ ...inputStyle, width: '100%' }}>
              <option value="">Choose stage</option>
              <option value="idea">Idea Stage</option>
              <option value="mvp">MVP Stage</option>
              <option value="scale">Scale Stage</option>
            </select>

            <select style={{ ...inputStyle, width: '100%' }}>
              <option value="">Choose sector</option>
              <option value="sportstech">Sports Tech</option>
              <option value="wellness">Wellness & Fitness</option>
              <option value="esports">eSports & Gaming</option>
              <option value="commerce">Sports Commerce</option>
              <option value="education">Sports Education</option>
            </select>

            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute', left: '14px', top: '50%',
                transform: 'translateY(-50%)', color: '#555', fontSize: '16px',
              }}>🔍</span>
              <input placeholder="Search programs..."
                value={search} onChange={(e) => setSearch(e.target.value)}
                style={{ ...inputStyle, width: '100%', paddingLeft: '40px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* PROGRAMS LIST */}
      <div style={{ background: '#080c14', padding: '40px 80px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#fff' }}>
            Current Programs <span style={{ color: '#555', fontWeight: '400' }}>({filtered.length})</span>
          </h2>
          <p style={{ fontSize: '13px', color: '#555', marginTop: '4px' }}>
            Active programs currently accepting applications
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {filtered.map((p) => (
            <div key={p.name}
              onMouseEnter={() => setHoveredCard(p.name)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                border: `1px solid ${hoveredCard === p.name ? p.btnColor : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transform: hoveredCard === p.name ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hoveredCard === p.name ? `0 12px 40px ${p.btnColor}30` : 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}>

              {/* HEADER with tint */}
              <div style={{
                padding: '28px 28px 0',
                background: p.headerBg,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{
                    fontSize: '28px', width: '48px', height: '48px',
                    borderRadius: '10px', background: 'rgba(255,255,255,0.05)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {p.icon}
                  </div>
                  <span style={{
                    fontSize: '11px', fontWeight: '700', letterSpacing: '1px',
                    background: `${p.badgeColor}20`, color: p.badgeColor,
                    padding: '4px 12px', borderRadius: '999px',
                    border: `1px solid ${p.badgeColor}40`,
                  }}>
                    {p.badge}
                  </span>
                </div>

                <div>
                  <p style={{ fontSize: '11px', color: '#555', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {p.stage}
                  </p>
                  <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff' }}>{p.name}</h3>
                </div>

                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.65' }}>{p.desc}</p>

                <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

              </div>

              {/* BODY — neutral */}
              <div style={{
                padding: '14px 28px 28px',
                background: hoveredCard === p.name ? `${p.btnColor}10` : 'rgba(255,255,255,0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                flex: '1',
              }}>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { label: 'Duration', value: p.duration },
                    { label: p.tracks ? 'Tracks' : 'Equity', value: p.tracks || p.equity },
                    { label: 'Fee', value: p.fee },
                    { label: 'Who', value: p.who },
                  ].map((row) => (
                    <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px', color: '#555' }}>{row.label}</span>
                      <span style={{ fontSize: '12px', color: '#ccc', fontWeight: '500', textAlign: 'right', maxWidth: '60%' }}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                <button style={{
                  padding: '12px', borderRadius: '7px', fontSize: '14px',
                  fontWeight: '600', border: 'none', background: p.btnColor,
                  color: '#fff', width: '100%', cursor: 'pointer', marginTop: '4px',
                }}>
                  Apply Now →
                </button>

              </div>

            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background: '#060910' }}>
        <Footer />
      </div>

    </div>
  )
}

export default ProgramsPage