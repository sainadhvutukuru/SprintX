import { useState } from 'react'

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

  if (!isOpen) return null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.05)',
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
      {/* OVERLAY */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: '0',
          background: 'rgba(0,0,0,0.7)',
          zIndex: '100',
        }}
      />

      {/* MODAL */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#0f1520',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '40px',
        width: '580px',
        maxHeight: '90vh',
        overflowY: 'auto',
        zIndex: '101',
      }}>

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(255,255,255,0.05)',
            border: 'none',
            color: '#fff',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>

        {/* HEADER */}
        <div style={{ marginBottom: '28px' }}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#d4a017', marginBottom: '8px' }}>
            For Investors
          </p>
          <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>
            CONNECT AS AN INVESTOR
          </h2>
          <p style={{ fontSize: '14px', color: '#777', lineHeight: '1.6' }}>
            Tell us who you are and what you're looking for. We'll make sure the right opportunities reach you first.
          </p>
        </div>

        {/* FORM */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

          {/* FULL NAME + EMAIL */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Full Name *</label>
              <input
                name="fullName"
                placeholder="Your name"
                value={formData.fullName}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Email *</label>
              <input
                name="email"
                placeholder="you@fund.com"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>

          {/* ORG NAME */}
          <div>
            <label style={labelStyle}>Organisation / Fund Name</label>
            <input
              name="orgName"
              placeholder="Fund or company name"
              value={formData.orgName}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* INVESTOR TYPE */}
          <div>
            <label style={labelStyle}>Investor Type *</label>
            <select
              name="investorType"
              value={formData.investorType}
              onChange={handleChange}
              style={{ ...inputStyle, cursor: 'pointer' }}
            >
              <option value="">Select type</option>
              <option value="angel">Angel Investor</option>
              <option value="vc">Venture Capital Fund</option>
              <option value="family">Family Office</option>
              <option value="corporate">Corporate Venture</option>
              <option value="government">Government Fund</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* OTHER INVESTOR TYPE */}
          {formData.investorType === 'other' && (
            <div>
              <label style={labelStyle}>Please specify your investor type *</label>
              <textarea
                name="otherInvestorType"
                placeholder="Tell us about your investment type..."
                value={formData.otherInvestorType}
                onChange={handleChange}
                rows={3}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>
          )}

          {/* SECTORS OF INTEREST */}
          <div>
            <label style={labelStyle}>Sectors of Interest</label>
            <input
              name="sectors"
              placeholder="e.g. Sports Tech, eSports, Wellness"
              value={formData.sectors}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* ANYTHING ELSE */}
          <div>
            <label style={labelStyle}>Anything else we should know?</label>
            <textarea
              name="anything"
              placeholder="Typical check size, stage preference, or how you'd like to engage with SprintX..."
              value={formData.anything}
              onChange={handleChange}
              rows={4}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          {/* SUBMIT */}
          <button style={{
            padding: '14px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '700',
            border: 'none',
            background: '#d4a017',
            color: '#fff',
            width: '100%',
            cursor: 'pointer',
            marginTop: '8px',
          }}>
            Get First Look →
          </button>

        </div>
      </div>
    </>
  )
}

export default InvestorFormModal