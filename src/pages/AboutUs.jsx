import Navbar from '../components/Navbar'
import WhatIsSprintX from '../components/WhatIsSprintX'
import Edge from '../components/Edge'
import Footer from '../components/Footer'

function AboutUs() {
  return (
    <div>
      <div style={{ background: '#080c14' }}>
        <Navbar />
      </div>
      <div style={{ background: '#0a0f1e' }}>
        <WhatIsSprintX />
      </div>
      <div style={{ background: '#0d1117' }}>
        <Edge />
      </div>
      <div style={{ background: '#080c14' }}>
        <Footer />
      </div>
    </div>
  )
}

export default AboutUs