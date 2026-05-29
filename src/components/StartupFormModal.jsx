import { useState } from 'react'

function MentorFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    roleOrg: '',
    expertise: '',
    otherExpertise: '',
    linkedin: '',
    contribution: '',
  })

  if (!isOpen) return null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    backgroundColor: '#1a2035',
  }

  const labelStyle = {
    fontSize: '13px',
    fontWeight: '600',
    color: '#ccc',
    marginBottom: '6px',
    display: 'block',
  }

  return (
    <>
      <div onClick={onClose} style={{
        position: 'fixed', inset: '0',
        background: 'rgba(0,0,0,0.7)', zIndex: '100',
      }} />

      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#0f1520',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px', padding: '40px',
        width: '580px', maxHeight: '90vh',
        overflowY: 'auto', zIndex: '101',
      }}>

        <button onClick={onClose} style={{
          position: 'absolute', top: '16px', right: '16px',
          background: 'rgba(255,255,255,0.05)', border: 'none',
          color: '#fff', width: '32px', height: '32px',
          borderRadius: '50%', fontSize: '16px', cursor: 'pointer',
        }}>✕</button>

        <div style={{ marginBottom: '28px' }}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#1aa88a', marginBottom: '8px' }}>
            For Mentors
          </p>
          <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>
            CONNECT AS A MENTOR
          </h2>
          <p style={{ fontSize: '14px', color: '#777', lineHeight: '1.6' }}>
            Tell us who you are and how you'd like to contribute. We'll reach out when there are founders who can benefit from exactly what you bring.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

          {/* FULL NAME + EMAIL */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Full Name *</label>
              <input name="fullName" placeholder="Your name"
                value={formData.fullName} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Email *</label>
              <input name="email" placeholder="you@domain.com"
                value={formData.email} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          {/* CURRENT ROLE & ORG */}
          <div>
            <label style={labelStyle}>Current Role & Organisation *</label>
            <input name="roleOrg" placeholder="e.g. CEO at XYZ Sports"
              value={formData.roleOrg} onChange={handleChange} style={inputStyle} />
          </div>

          {/* AREA OF EXPERTISE */}
          <div>
            <label style={labelStyle}>Area of Expertise *</label>
            <select name="expertise" value={formData.expertise}
              onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
              <option value="">Select expertise</option>
              <option value="federation">Sports Federation & League Operations</option>
              <option value="athlete">Professional Athlete / Coach</option>
              <option value="science">Sports Science & Performance</option>
              <option value="esports">eSports & Gaming</option>
              <option value="media">Sports Media & Broadcasting</option>
              <option value="finance">Startup Finance & Investment</option>
              <option value="sales">Sales & Business Development</option>
              <option value="tech">Technology & Product</option>
              <option value="marketing">Marketing & Brand Strategy</option>
              <option value="legal">Legal & Compliance</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* OTHER EXPERTISE */}
          {formData.expertise === 'other' && (
            <div>
              <label style={labelStyle}>Please specify your expertise *</label>
              <textarea name="otherExpertise"
                placeholder="Tell us about your area of expertise..."
                value={formData.otherExpertise} onChange={handleChange}
                rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
            </div>
          )}

          {/* LINKEDIN */}
          <div>
            <label style={labelStyle}>LinkedIn Profile</label>
            <input name="linkedin" placeholder="linkedin.com/in/yourprofile"
              value={formData.linkedin} onChange={handleChange} style={inputStyle} />
          </div>

          {/* CONTRIBUTION */}
          <div>
            <label style={labelStyle}>How would you like to contribute?</label>
            <textarea name="contribution"
              placeholder="Tell us about your experience and how you'd like to support sports-tech founders..."
              value={formData.contribution} onChange={handleChange}
              rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
          </div>

          <button style={{
            padding: '14px', borderRadius: '8px', fontSize: '15px',
            fontWeight: '700', border: 'none', background: '#1aa88a',
            color: '#fff', width: '100%', cursor: 'pointer', marginTop: '8px',
          }}>
            Submit Your Interest →
          </button>

        </div>
      </div>
    </>
  )
}

export default MentorFormModal