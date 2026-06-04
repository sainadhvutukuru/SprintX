import { useState, useEffect, useRef } from 'react'
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
  const [showSuccess, setShowSuccess] = useState(false)
  const prevIsOpen = useRef(isOpen)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else if (prevIsOpen.current) {
      document.body.style.overflow = ''
      setFormData({
        fullName: '', email: '', orgName: '',
        investorType: '', otherInvestorType: '', sectors: '', anything: '',
      })
      setErrors({})
      setShowSuccess(false)
    }
    prevIsOpen.current = isOpen
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

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
      await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ ...formData, formType: 'Investor Form' }),
      })

      await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ ...formData, formType: 'Investor Form' }),
      })

      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
        setFormData({
          fullName: '', email: '', orgName: '',
          investorType: '', otherInvestorType: '', sectors: '', anything: '',
        })
        setErrors({})
        onClose()
      }, 3400)

    } catch (error) {
      console.log('Error:', error)
      alert('Something went wrong. Please try again!')
    }
    setSubmitting(false)
  }

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '12px 14px',
    border: hasError ? '1px solid #ff4444' : '1px solid rgba(255,255,255,0.08)',
    borderRadius: '9px',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: "'DM Sans', sans-serif",
    outline: 'none',
    backgroundColor: 'rgba(255,255,255,0.05)',
    WebkitAppearance: 'none',
    transition: 'border-color 0.2s',
  })

  const errorMsgStyle = {
    fontSize: '12px', color: '#ff4444', marginTop: '4px', fontFamily: "'DM Sans', sans-serif",
  }

  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '11.5px',
    fontWeight: '600',
    color: 'rgba(255,255,255,0.50)',
    letterSpacing: '0.3px',
    display: 'block',
    marginBottom: '6px',
  }

  const overlayStyle = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(3,8,16,0.92)',
    backdropFilter: 'blur(16px)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    transition: 'opacity 0.26s',
  }

  const modalStyle = {
    background: '#0A1525',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: '18px',
    padding: '44px',
    width: '100%',
    maxWidth: '520px',
    maxHeight: '94vh',
    overflowY: 'auto',
    position: 'relative',
  }

  const closeBtnStyle = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    width: '34px',
    height: '34px',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '8px',
    background: 'rgba(255,255,255,0.04)',
    color: 'rgba(255,255,255,0.50)',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'all 0.18s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1',
  }

  const selectStyle = (hasError) => ({
    ...inputStyle(hasError),
    cursor: 'pointer',
  })

  const textareaStyle = (hasError) => ({
    ...inputStyle(hasError),
    resize: 'vertical',
    minHeight: '90px',
  })

  return (
    <>
      <style>{`
@media (max-width: 767px) {
  .modal-overlay { padding: 12px !important; }
  .modal-box { padding: 28px 20px !important; border-radius: 14px !important; max-height: 92vh !important; }
  .modal-title { font-size: 28px !important; }
  .modal-subtitle { font-size: 13px !important; margin-bottom: 22px !important; }
  .modal-row-2 { grid-template-columns: 1fr !important; }
  .modal-input { padding: 10px 12px !important; font-size: 13px !important; }
  .modal-label { font-size: 11px !important; }
  .modal-btn { padding: 12px !important; font-size: 14px !important; }
  .modal-success-title { font-size: 26px !important; }
  .modal-success-icon { font-size: 44px !important; }
  .modal-success-msg { font-size: 13px !important; }
  .modal-close { width: 30px !important; height: 30px !important; font-size: 18px !important; }
}
`}</style>
      <div className="modal-overlay" onClick={onClose} style={overlayStyle}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()} style={modalStyle}>
          <button className="modal-close" onClick={onClose} style={closeBtnStyle}>✕</button>

          {showSuccess ? (
            <div style={{ textAlign: 'center', padding: '40px 16px' }}>
              <span className="modal-success-icon" style={{ fontSize: '56px', display: 'block', marginBottom: '18px' }}>📡</span>
              <h3 className="modal-success-title" style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: '34px',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginBottom: '10px',
              }}>
                You're on Our Radar
              </h3>
              <p className="modal-success-msg" style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '15px',
                fontWeight: '300',
                color: 'rgba(255,255,255,0.50)',
                lineHeight: '1.7',
              }}>
                Your details are with us. We'll make sure the right opportunities reach you first.
              </p>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: '30px' }}>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '1.6px',
                  textTransform: 'uppercase',
                  color: '#F5A623',
                  marginBottom: '8px',
                }}>
                  For Investors
                </p>
                <h2 className="modal-title" style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontSize: '38px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  lineHeight: '1',
                  marginBottom: '8px',
                }}>
                  Connect as an Investor
                </h2>
                <p className="modal-subtitle" style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  fontWeight: '300',
                  color: 'rgba(255,255,255,0.50)',
                  lineHeight: '1.7',
                }}>
                  Tell us who you are and what you're looking for. We'll make sure the right opportunities reach you first.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="modal-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                  <div>
                    <label className="modal-label" style={labelStyle}>Full Name *</label>
                    <input className="modal-input" name="fullName" placeholder="Your name"
                      value={formData.fullName} onChange={handleChange} style={inputStyle(!!errors.fullName)} />
                    {errors.fullName && <p style={errorMsgStyle}>{errors.fullName}</p>}
                  </div>
                  <div>
                    <label className="modal-label" style={labelStyle}>Email *</label>
                    <input className="modal-input" name="email" placeholder="you@fund.com"
                      value={formData.email} onChange={handleChange} style={inputStyle(!!errors.email)} />
                    {errors.email && <p style={errorMsgStyle}>{errors.email}</p>}
                  </div>
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label className="modal-label" style={labelStyle}>Organisation / Fund Name *</label>
                  <input className="modal-input" name="orgName" placeholder="Fund or company name"
                    value={formData.orgName} onChange={handleChange} style={inputStyle(!!errors.orgName)} />
                  {errors.orgName && <p style={errorMsgStyle}>{errors.orgName}</p>}
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label className="modal-label" style={labelStyle}>Investor Type *</label>
                  <select className="modal-input" name="investorType" value={formData.investorType}
                    onChange={handleChange} style={selectStyle(!!errors.investorType)}>
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
                  <div style={{ marginBottom: '14px' }}>
                    <label className="modal-label" style={labelStyle}>Please specify your investor type *</label>
                    <input className="modal-input" name="otherInvestorType"
                      placeholder="Tell us about your investment type..."
                      value={formData.otherInvestorType} onChange={handleChange} style={inputStyle(!!errors.otherInvestorType)} />
                    {errors.otherInvestorType && <p style={errorMsgStyle}>{errors.otherInvestorType}</p>}
                  </div>
                )}

                <div style={{ marginBottom: '14px' }}>
                  <label className="modal-label" style={labelStyle}>Sectors of Interest *</label>
                  <input className="modal-input" name="sectors" placeholder="e.g. Sports Tech, eSports, Wellness"
                    value={formData.sectors} onChange={handleChange} style={inputStyle(!!errors.sectors)} />
                  {errors.sectors && <p style={errorMsgStyle}>{errors.sectors}</p>}
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label className="modal-label" style={labelStyle}>Anything else we should know? *</label>
                  <textarea className="modal-input" name="anything"
                    placeholder="Typical check size, stage preference, or how you'd like to engage with SprintX..."
                    value={formData.anything} onChange={handleChange}
                    rows={3} style={textareaStyle(!!errors.anything)} />
                  {errors.anything && <p style={errorMsgStyle}>{errors.anything}</p>}
                </div>

                <button
                  className="modal-btn"
                  onClick={handleSubmit}
                  disabled={submitting}
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '9px',
                    border: 'none',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '15px',
                    fontWeight: '700',
                    background: submitting ? '#aaa' : '#F5A623',
                    color: '#ffffff',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    marginTop: '8px',
                    transition: 'all 0.2s',
                  }}>
                  {submitting ? 'Submitting...' : 'Get First Look →'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default InvestorFormModal
