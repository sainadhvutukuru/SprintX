import { useState } from 'react'
import { GOOGLE_SHEETS_WEB_APP_URL, FORMSPREE_URL } from '../config'

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
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  if (!isOpen) return null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.roleOrg.trim()) newErrors.roleOrg = 'Role & Organisation is required'
    if (!formData.expertise) newErrors.expertise = 'Area of expertise is required'
    if (formData.expertise === 'other' && !formData.otherExpertise.trim()) {
      newErrors.otherExpertise = 'Please specify your expertise'
    }
    if (!formData.linkedin.trim()) newErrors.linkedin = 'LinkedIn profile is required'
    if (!formData.contribution.trim()) newErrors.contribution = 'This field is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setSubmitting(true)
    try {
      await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ ...formData, formType: 'Mentor Form' }),
      })

      await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ ...formData, formType: 'Mentor Form' }),
      })

      alert('Form submitted successfully!')
      setFormData({
        fullName: '', email: '', roleOrg: '',
        expertise: '', otherExpertise: '', linkedin: '', contribution: '',
      })
      setErrors({})
      onClose()

    } catch (error) {
      console.log('Error:', error)
      alert('Something went wrong. Please try again!')
    }
    setSubmitting(false)
  }

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '12px 14px',
    border: hasError ? '1px solid #ff4444' : '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    backgroundColor: '#1a2035',
  })

  const errorMsgStyle = {
    fontSize: '12px', color: '#ff4444', marginTop: '4px',
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

      <div onClick={(e) => e.stopPropagation()} style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#0f1520',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '36px',
        width: '640px',
        zIndex: '101',
        overflow: 'hidden',
      }}>

        <button onClick={onClose} style={{
          position: 'absolute', top: '14px', right: '14px',
          background: 'rgba(255,255,255,0.05)', border: 'none',
          color: '#fff', width: '30px', height: '30px',
          borderRadius: '50%', fontSize: '14px', cursor: 'pointer',
        }}>✕</button>

        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#1aa88a', marginBottom: '8px' }}>
            For Mentors
          </p>
          <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
            CONNECT AS A MENTOR
          </h2>
          <p style={{ fontSize: '14px', color: '#777', lineHeight: '1.6' }}>
            Tell us who you are and how you'd like to contribute. We'll reach out when there are founders who can benefit from exactly what you bring.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={labelStyle}>Full Name *</label>
              <input name="fullName" placeholder="Your name"
                value={formData.fullName} onChange={handleChange} style={inputStyle(!!errors.fullName)} />
              {errors.fullName && <p style={errorMsgStyle}>{errors.fullName}</p>}
            </div>
            <div>
              <label style={labelStyle}>Email *</label>
              <input name="email" placeholder="you@domain.com"
                value={formData.email} onChange={handleChange} style={inputStyle(!!errors.email)} />
              {errors.email && <p style={errorMsgStyle}>{errors.email}</p>}
            </div>
          </div>

          <div>
            <label style={labelStyle}>Current Role & Organisation *</label>
            <input name="roleOrg" placeholder="e.g. CEO at XYZ Sports"
              value={formData.roleOrg} onChange={handleChange} style={inputStyle(!!errors.roleOrg)} />
            {errors.roleOrg && <p style={errorMsgStyle}>{errors.roleOrg}</p>}
          </div>

          <div>
            <label style={labelStyle}>Area of Expertise *</label>
            <select name="expertise" value={formData.expertise}
              onChange={handleChange} style={{ ...inputStyle(!!errors.expertise), cursor: 'pointer' }}>
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
            {errors.expertise && <p style={errorMsgStyle}>{errors.expertise}</p>}
          </div>

          {formData.expertise === 'other' && (
            <div>
              <label style={labelStyle}>Please specify *</label>
              <input name="otherExpertise" placeholder="Tell us about your expertise..."
                value={formData.otherExpertise} onChange={handleChange} style={inputStyle(!!errors.otherExpertise)} />
              {errors.otherExpertise && <p style={errorMsgStyle}>{errors.otherExpertise}</p>}
            </div>
          )}

          <div>
            <label style={labelStyle}>LinkedIn Profile *</label>
            <input name="linkedin" placeholder="linkedin.com/in/yourprofile"
              value={formData.linkedin} onChange={handleChange} style={inputStyle(!!errors.linkedin)} />
            {errors.linkedin && <p style={errorMsgStyle}>{errors.linkedin}</p>}
          </div>

          <div>
            <label style={labelStyle}>How would you like to contribute? *</label>
            <textarea name="contribution"
              placeholder="Tell us about your experience and how you'd like to support sports-tech founders..."
              value={formData.contribution} onChange={handleChange}
              rows={3} style={{ ...inputStyle(!!errors.contribution), resize: 'none' }} />
            {errors.contribution && <p style={errorMsgStyle}>{errors.contribution}</p>}
          </div>

          <button
            onClick={handleSubmit}
            disabled={submitting}
            style={{
              padding: '13px', borderRadius: '8px', fontSize: '15px',
              fontWeight: '700', border: 'none',
              background: submitting ? '#aaa' : '#1aa88a',
              color: '#fff', width: '100%',
              cursor: submitting ? 'not-allowed' : 'pointer', marginTop: '4px',
            }}>
            {submitting ? 'Submitting...' : 'Submit Your Interest →'}
          </button>

        </div>
      </div>
    </>
  )
}

export default MentorFormModal
