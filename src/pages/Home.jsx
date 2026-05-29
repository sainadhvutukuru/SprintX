import AnnouncementBar from '../components/AnnouncementBar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
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

      <div style={{ background: '#080c14' }}>
        <Hero />
      </div>

      <div style={{ background: '#0d1220' }}>
        <Cards />
      </div>

      <div style={{ background: '#080c14' }}>
        <StatsBar />
      </div>

      <div style={{ background: '#0d1220' }}>
        <Programs />
      </div>

      <div style={{ background: '#080c14' }}>
        <Sectors />
      </div>

      <div style={{ background: '#0d1220' }}>
        <Edge />
      </div>

      <div style={{ background: '#080c14' }}>
        <Partners />
      </div>

      <div style={{ background: 'linear-gradient(180deg, #080c14 0%, #0d1525 100%)' }}>
        <GetInvolved />
      </div>

      <div style={{ background: '#060910' }}>
        <Footer />
      </div>

    </div>
  )
}

export default Home