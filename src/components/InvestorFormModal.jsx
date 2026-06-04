import { useState } from 'react'
import { GOOGLE_SHEETS_WEB_APP_URL, FORMSPREE_URL } from '../config'

function InvestorFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    orgName: '',
    investorType: '',
    otherInvestorType: '',
    sectors: '',
    anything: '',
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
    if (!formData.orgName.trim()) newErrors.orgName = 'Organisation name is required'
    if (!formData.investorType) newErrors.investorType = 'Investor type is required'
    if (formData.investorType === 'other' && !formData.otherInvestorType.trim()) {
      newErrors.otherInvestorType = 'Please specify your investor type'
    }
    if (!formData.sectors.trim()) newErrors.sectors = 'Sectors of interest is required'
    if (!formData.anything.trim()) newErrors.anything = 'This field is required'
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
        body: JSON.stringify({ ...formData, formType: 'Investor Form' }),
      })

      // Send to Google Sheets (no-cors is needed because Google Apps Script doesn't support CORS preflight)
      const sheetsRes = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ ...formData, formType: 'Investor Form' }),
      })

      alert('Form submitted successfully!')
      setFormData({
        fullName: '', email: '', orgName: '',
        investorType: '', otherInvestorType: '', sectors: '', anything: '',
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
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#d4a017', marginBottom: '8px' }}>
            For Investors
          </p>
          <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
            CONNECT AS AN INVESTOR
          </h2>
          <p style={{ fontSize: '14px', color: '#777', lineHeight: '1.6' }}>
            Tell us who you are and what you're looking for. We'll make sure the right opportunities reach you first.
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
              <input name="email" placeholder="you@fund.com"
                value={formData.email} onChange={handleChange} style={inputStyle(!!errors.email)} />
              {errors.email && <p style={errorMsgStyle}>{errors.email}</p>}
            </div>
          </div>

          <div>
            <label style={labelStyle}>Organisation / Fund Name *</label>
            <input name="orgName" placeholder="Fund or company name"
              value={formData.orgName} onChange={handleChange} style={inputStyle(!!errors.orgName)} />
            {errors.orgName && <p style={errorMsgStyle}>{errors.orgName}</p>}
          </div>

          <div>
            <label style={labelStyle}>Investor Type *</label>
            <select name="investorType" value={formData.investorType}
              onChange={handleChange} style={{ ...inputStyle(!!errors.investorType), cursor: 'pointer' }}>
              <option value="">Select type</option>
              <option value="angel">Angel Investor</option>
              <option value="vc">Venture Capital Fund</option>
              <option value="family">Family Office</option>
              <option value="corporate">Corporate Venture</option>
              <option value="government">Government Fund</option>
              <option value="other">Other</option>
            </select>
            {errors.investorType && <p style={errorMsgStyle}>{errors.investorType}</p>}
          </div>

          {formData.investorType === 'other' && (
            <div>
              <label style={labelStyle}>Please specify your investor type *</label>
              <input name="otherInvestorType"
                placeholder="Tell us about your investment type..."
                value={formData.otherInvestorType} onChange={handleChange} style={inputStyle(!!errors.otherInvestorType)} />
              {errors.otherInvestorType && <p style={errorMsgStyle}>{errors.otherInvestorType}</p>}
            </div>
          )}

          <div>
            <label style={labelStyle}>Sectors of Interest *</label>
            <input name="sectors" placeholder="e.g. Sports Tech, eSports, Wellness"
              value={formData.sectors} onChange={handleChange} style={inputStyle(!!errors.sectors)} />
            {errors.sectors && <p style={errorMsgStyle}>{errors.sectors}</p>}
          </div>

          <div>
            <label style={labelStyle}>Anything else we should know? *</label>
            <textarea name="anything"
              placeholder="Typical check size, stage preference, or how you'd like to engage with SprintX..."
              value={formData.anything} onChange={handleChange}
              rows={3} style={{ ...inputStyle(!!errors.anything), resize: 'none' }} />
            {errors.anything && <p style={errorMsgStyle}>{errors.anything}</p>}
          </div>

          <button
            onClick={handleSubmit}
            disabled={submitting}
            style={{
              padding: '13px', borderRadius: '8px', fontSize: '15px',
              fontWeight: '700', border: 'none',
              background: submitting ? '#aaa' : '#d4a017',
              color: '#fff', width: '100%',
              cursor: submitting ? 'not-allowed' : 'pointer', marginTop: '4px',
            }}>
            {submitting ? 'Submitting...' : 'Get First Look →'}
          </button>

        </div>
      </div>
    </>
  )
}

export default InvestorFormModal