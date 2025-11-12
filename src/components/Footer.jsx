export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 ring-2 ring-white/20" />
            <span className="text-white text-lg font-semibold tracking-wide">Aurora Atelier</span>
          </div>
          <p className="text-white/70 mt-4 max-w-sm">Luxurious jewelry crafted with precision and passion. Timeless designs, contemporary elegance.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-white/70">
            <li><a className="hover:text-white" href="#about">About</a></li>
            <li><a className="hover:text-white" href="#collections">Collections</a></li>
            <li><a className="hover:text-white" href="#bestsellers">Best Sellers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <p className="text-white/70 mb-3">Join to receive new drops and limited editions.</p>
          <form className="flex gap-2">
            <input placeholder="Email address" className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 placeholder-white/50 outline-none focus:ring-2 focus:ring-yellow-500" />
            <button className="px-5 py-2 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-black font-semibold hover:brightness-110 transition">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-white/60 text-sm">© {new Date().getFullYear()} Aurora Atelier. All rights reserved.</div>
    </footer>
  )
}
