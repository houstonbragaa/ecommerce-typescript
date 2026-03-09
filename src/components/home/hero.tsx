const Hero = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Luz suave roxa no hero */}
      <div
        className="absolute -bottom-20 left-1/2 h-[200px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px]"
        aria-hidden
      />
      <div className="absolute top-1/2 left-1/2 z-10 flex max-w-[1000px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 text-center">
        <div className="text-bold z-1 mt-16 rounded-full bg-white/50 px-4 py-2 text-zinc-950 shadow-xl shadow-purple-700/20">
          Promoções de suplementos até o dia 07/08
        </div>
        <h1 className="font-pump text-8xl font-bold text-white/80 text-shadow-gray-950 text-shadow-md">
          PUMP ZONE
        </h1>

        <p className="font-pump animate-purple-text text-3xl">
          Seu corpo no próximo nível
        </p>
      </div>
      <img
        src="./src/assets/hero.png"
        alt="Hero"
        className="mask h-full w-full mask-t-from-85% mask-b-from-85% object-cover object-center opacity-40"
      />
    </div>
  )
}

export default Hero
