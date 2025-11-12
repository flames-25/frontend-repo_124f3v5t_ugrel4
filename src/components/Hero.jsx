import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-black text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" />
      </div>

      <div className="absolute inset-0 -z-[5] bg-gradient-to-b from-black/60 via-black/60 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            New Collection
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold leading-tight">
            Radiant pieces for every moment
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Handcrafted jewelry in gold and silver with timeless silhouettes and a modern edge.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#bestsellers" className="px-6 py-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-black font-semibold hover:brightness-110 transition shadow-[0_0_0_1px_rgba(255,255,255,0.2)]">
              Shop best sellers
            </a>
            <a href="#collections" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
              Explore collections
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
