import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import Programs from '../components/Programs'
import Partners from '../components/Partners'
import GetInvolved from '../components/GetInvolved'
import Footer from '../components/Footer'
import Sectors from '../components/Sectors'
import Edge from '../components/Edge'

function Home() {
  return (
    <div>

      {/* STICKY HEADER */}
      <div style={{
        position: 'sticky',
        top: '0',
        zIndex: '100',
        background: '#080c14',
      }}>
        <AnnouncementBar />
        <Navbar />
      </div>

      <div style={{ background: '#0d1117' }}>
        <Hero />
      </div>

      <div style={{ background: '#0a0f1e' }}>
        <StatsBar />
      </div>

      <div style={{ background: '#0d1117' }}>
        <Programs />
      </div>

      <div style={{ background: '#0a0f1e' }}>
        <Sectors />
      </div>

      <div style={{ background: '#0d1117' }}>
        <Edge />
      </div>

      <div style={{ background: '#0a0f1e' }}>
        <Partners />
      </div>

      <div style={{ background: '#0d1117' }}>
        <GetInvolved />
      </div>

      <div style={{ background: '#080c14' }}>
        <Footer />
      </div>

    </div>
  )
}

export default Home