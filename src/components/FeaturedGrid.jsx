import { useEffect, useState } from 'react'

const FALLBACK = [
  {
    id: '1',
    title: 'Solstice Hoop Earrings',
    price: 220,
    images: ['https://images.unsplash.com/photo-1603565816278-c8e20b6ceacb?q=80&w=1200&auto=format&fit=crop'],
  },
  {
    id: '2',
    title: 'Luna Pendant Necklace',
    price: 340,
    images: ['https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1200&auto=format&fit=crop'],
  },
  {
    id: '3',
    title: 'Eclipse Signet Ring',
    price: 180,
    images: ['https://images.unsplash.com/photo-1617038260897-3e18f7dc32ef?q=80&w=1200&auto=format&fit=crop'],
  },
  {
    id: '4',
    title: 'Aurora Stacking Rings',
    price: 260,
    images: ['https://images.unsplash.com/photo-1615253726733-4cfa2bfe2fbd?q=80&w=1200&auto=format&fit=crop'],
  },
]

export default function FeaturedGrid() {
  const [items, setItems] = useState(FALLBACK)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/featured`)
        if (res.ok) {
          const data = await res.json()
          if (Array.isArray(data.items) && data.items.length) {
            setItems(data.items)
          }
        }
      } catch (e) {
        // keep fallback
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="bestsellers" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Best Sellers</h2>
            <p className="text-white/70 mt-2">Our most-loved pieces, crafted to shine.</p>
          </div>
          <a href="#collections" className="hidden sm:inline-flex px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <article key={item.id} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="aspect-square overflow-hidden">
                <img src={(item.images && item.images[0]) || FALLBACK[0].images[0]} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-white/70 text-sm">${item.price}</p>
                </div>
                <button className="px-4 py-2 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-black font-medium hover:brightness-110 transition">Add</button>
              </div>
            </article>
          ))}
        </div>

        {loading && (
          <p className="text-white/60 text-sm mt-6">Loading featured items...</p>
        )}
      </div>
    </section>
  )
}
