import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 shadow-[0_0_30px_rgba(234,179,8,0.35)]" />
          <span className="text-white text-lg tracking-[0.2em] font-semibold">AURORA ATELIER</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {['Home','Collections','Best Sellers','About','Contact'].map((i)=> (
            <a key={i} href="#" className="text-sm text-white/80 hover:text-amber-400 transition-colors">{i}</a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="rounded-full px-4 py-2 text-sm font-medium text-black bg-amber-400 hover:bg-amber-300 transition-colors">Shop Now</button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[88vh] bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24">
        <div className="max-w-2xl rounded-[28px] p-1 bg-gradient-to-br from-white/10 via-white/0 to-white/10">
          <div className="rounded-[26px] p-8 bg-black/50 backdrop-blur-md">
            <p className="text-amber-300 tracking-[0.35em] text-xs uppercase">Fine Jewelry</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight text-white">Timeless Elegance, Modern Craft</h1>
            <p className="mt-4 text-white/70">Curated rings, necklaces, and bracelets crafted in 18K gold. Discover pieces that glow in every light.</p>
            <div className="mt-8 flex items-center gap-4">
              <button className="rounded-full px-6 py-3 text-black bg-amber-400 hover:bg-amber-300 font-medium transition">Explore Collection</button>
              <button className="rounded-full px-6 py-3 text-white/90 border border-white/20 hover:border-white/40 transition">View Best Sellers</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedGrid() {
  const [items, setItems] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/featured`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      }
    }
    fetchData()
  }, [])

  const fallback = [
    { id: '1', title: 'Halo Ring', price: 1299, images: ['https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=1200&auto=format&fit=crop'] },
    { id: '2', title: 'Gold Chain', price: 899, images: ['https://images.unsplash.com/photo-1617038260897-3fa91df9ad52?q=80&w=1200&auto=format&fit=crop'] },
    { id: '3', title: 'Pearl Bracelet', price: 499, images: ['https://images.unsplash.com/photo-1603575449299-1f2b5a76e2ad?q=80&w=1200&auto=format&fit=crop'] },
    { id: '4', title: 'Statement Necklace', price: 1599, images: ['https://images.unsplash.com/photo-1612392061792-22edc1806bd3?q=80&w=1200&auto=format&fit=crop'] },
  ]

  const list = items.length ? items : fallback

  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-amber-300 tracking-[0.35em] text-xs uppercase">Featured</p>
            <h2 className="text-white text-2xl md:text-4xl font-semibold mt-2">Best Sellers</h2>
          </div>
          <a href="#" className="text-amber-300 hover:text-amber-200">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((item) => (
            <div key={item.id} className="group rounded-[22px] overflow-hidden bg-gradient-to-b from-white/10 to-white/0 p-1">
              <div className="rounded-[20px] bg-zinc-950/70 backdrop-blur-xl">
                <div className="aspect-[4/5] overflow-hidden rounded-[20px]">
                  <img src={item.images?.[0]} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="text-amber-300 mt-1">${'{'}item.price{'}'}</p>
                  <button className="mt-4 w-full rounded-full px-4 py-2 text-sm font-medium text-black bg-amber-400 hover:bg-amber-300 transition-colors">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CurvyDivider() {
  return (
    <div className="bg-black">
      <svg className="w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60C120 20 360 -20 720 60C1080 140 1320 100 1440 60V120H0V60Z" fill="url(#g)"/>
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE68A"/>
            <stop offset="0.5" stopColor="#F59E0B"/>
            <stop offset="1" stopColor="#FCD34D"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h4 className="text-white font-semibold">AURORA ATELIER</h4>
          <p className="text-white/60 mt-2">Elevating everyday luxury with meticulously crafted gold jewelry.</p>
        </div>
        <div>
          <h5 className="text-white/80 font-medium">Explore</h5>
          <ul className="mt-3 space-y-2 text-white/60">
            <li><a href="#">Rings</a></li>
            <li><a href="#">Necklaces</a></li>
            <li><a href="#">Bracelets</a></li>
            <li><a href="#">Earrings</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white/80 font-medium">Newsletter</h5>
          <div className="mt-3 flex items-center gap-2">
            <input placeholder="Your email" className="flex-1 rounded-full px-4 py-2 bg-white/5 border border-white/10 text-white placeholder-white/40 outline-none focus:border-amber-400"/>
            <button className="rounded-full px-4 py-2 text-sm font-medium text-black bg-amber-400 hover:bg-amber-300 transition-colors">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="pb-10 text-center text-white/50">© {new Date().getFullYear()} Aurora Atelier. All rights reserved.</div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />
      <Hero />
      <CurvyDivider />
      <FeaturedGrid />
      <Footer />
    </div>
  )
}
