import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CurvyDivider from './components/CurvyDivider'
import FeaturedGrid from './components/FeaturedGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <CurvyDivider />
      <FeaturedGrid />
      <Footer />
    </div>
  )
}

export default App
