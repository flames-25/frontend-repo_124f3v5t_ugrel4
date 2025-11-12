import { Menu, ShoppingBag } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 ring-2 ring-white/20" />
          <span className="text-white text-lg font-semibold tracking-wide">Aurora Atelier</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#collections" className="hover:text-white transition-colors">Collections</a>
          <a href="#bestsellers" className="hover:text-white transition-colors">Best Sellers</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-black font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.2)] hover:brightness-110 transition">
            <ShoppingBag className="h-4 w-4" />
            Cart
          </button>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
