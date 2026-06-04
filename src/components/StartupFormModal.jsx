import { useState } from 'react'
import { GOOGLE_SHEETS_WEB_APP_URL, FORMSPREE_URL } from '../config'

function StartupFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    startupName: '',
    stage: '',
    sector: '',
    otherSector: '',
    city: '',
    description: '',
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
    if (!formData.startupName.trim()) newErrors.startupName = 'Startup Name is required'
    if (!formData.stage) newErrors.stage = 'Stage is required'
    if (!formData.sector) newErrors.sector = 'Sector is required'
    if (formData.sector === 'others' && !formData.otherSector.trim()) {
      newErrors.otherSector = 'Please specify your sector'
    }
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.description.trim()) newErrors.description = 'This field is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setSubmitting(true)
    try {
      // Send to Formspree
      await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ ...formData, formType: 'Startup Form' }),
      })

      // Send to Google Sheets (no-cors is needed because Google Apps Script doesn't support CORS preflight)
      const sheetsRes = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ ...formData, formType: 'Startup Form' }),
      })

      alert('Form submitted successfully!')
      setFormData({
        fullName: '', email: '', startupName: '',
        stage: '', sector: '', otherSector: '', city: '', description: '',
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
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#f15b26', marginBottom: '8px' }}>
            For Founders
          </p>
          <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
            CONNECT YOUR STARTUP
          </h2>
          <p style={{ fontSize: '14px', color: '#777', lineHeight: '1.6' }}>
            Tell us what you're building. We'll reach out when programs open and when there's an opportunity that fits exactly where you are.
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
              <input name="email" placeholder="you@startup.com"
                value={formData.email} onChange={handleChange} style={inputStyle(!!errors.email)} />
              {errors.email && <p style={errorMsgStyle}>{errors.email}</p>}
            </div>
          </div>

          <div>
            <label style={labelStyle}>Startup Name *</label>
            <input name="startupName" placeholder="What's your startup called?"
              value={formData.startupName} onChange={handleChange} style={inputStyle(!!errors.startupName)} />
            {errors.startupName && <p style={errorMsgStyle}>{errors.startupName}</p>}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={labelStyle}>Stage *</label>
              <select name="stage" value={formData.stage}
                onChange={handleChange} style={{ ...inputStyle(!!errors.stage), cursor: 'pointer' }}>
                <option value="">Select stage</option>
                <option value="idea">Idea / Pre-MVP</option>
                <option value="mvp">Working MVP</option>
              <option value="revenue">Generating Revenue</option>
            </select>
              {errors.stage && <p style={errorMsgStyle}>{errors.stage}</p>}
            </div>
            <div>
              <label style={labelStyle}>Sector *</label>
              <select name="sector" value={formData.sector}
                onChange={handleChange} style={{ ...inputStyle(!!errors.sector), cursor: 'pointer' }}>
                <option value="">Select sector</option>
                <option value="sportstech">Sports Tech</option>
                <option value="wellness">Wellness & Fitness</option>
                <option value="esports">eSports & Gaming</option>
                <option value="commerce">Sports Commerce</option>
                <option value="education">Sports Education</option>
              <option value="others">Others</option>
            </select>
              {errors.sector && <p style={errorMsgStyle}>{errors.sector}</p>}
            </div>
          </div>

          {formData.sector === 'others' && (
            <div>
              <label style={labelStyle}>Please specify your sector *</label>
              <input name="otherSector" placeholder="Tell us about your sector..."
                value={formData.otherSector} onChange={handleChange} style={inputStyle(!!errors.otherSector)} />
              {errors.otherSector && <p style={errorMsgStyle}>{errors.otherSector}</p>}
            </div>
          )}

          <div>
            <label style={labelStyle}>City *</label>
            <input name="city" placeholder="Where are you based?"
              value={formData.city} onChange={handleChange} style={inputStyle(!!errors.city)} />
            {errors.city && <p style={errorMsgStyle}>{errors.city}</p>}
          </div>

          <div>
            <label style={labelStyle}>What are you building? *</label>
            <textarea name="description" placeholder="Brief description of your startup..."
              value={formData.description} onChange={handleChange}
              rows={3} style={{ ...inputStyle(!!errors.description), resize: 'none' }} />
            {errors.description && <p style={errorMsgStyle}>{errors.description}</p>}
          </div>

          <button
            onClick={handleSubmit}
            disabled={submitting}
            style={{
              padding: '13px', borderRadius: '8px', fontSize: '15px',
              fontWeight: '700', border: 'none',
              background: submitting ? '#aaa' : '#f15b26',
              color: '#fff', width: '100%',
              cursor: submitting ? 'not-allowed' : 'pointer', marginTop: '4px',
            }}>
            {submitting ? 'Submitting...' : 'Connect Your Startup →'}
          </button>

        </div>
      </div>
    </>
  )
}

export default StartupFormModal