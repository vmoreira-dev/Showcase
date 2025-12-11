// app/components/Hero.tsx

export default function Hero() {
  return (
    <section className="flex flex-col items-center pt-32 pb-24 text-center">
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
        Vinicius Moreira
      </h1>

      <p className="text-lg md:text-xl mt-4 opacity-80">
        FULL-STACK DEVELOPER
      </p>

      <button
        className="mt-10 px-10 py-3 rounded-lg border border-white/30 
                   bg-white/10 backdrop-blur-md text-white hover:bg-white/20
                   transition-all"
      >
        EXPLORE
      </button>
    </section>
  );
}
