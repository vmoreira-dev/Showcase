// app/components/Hero.tsx
import TechStack from "./TechStack";

export default function Hero() {
  return (
    <section className="flex flex-col items-center pt-32 pb-28 text-center">
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
        Vinicius Moreira
      </h1>

      <p className="text-lg md:text-xl mt-4 text-slate-600">
        FULL-STACK DEVELOPER
      </p>

      {/* Buttons */}
      <div className="mt-12 flex items-center gap-6">
        <a
          href="#projects"
          className="
            px-10 py-3 rounded-xl
            bg-white/70 backdrop-blur-md
            border border-black/10
            text-slate-900
            transition-all duration-300
            hover:bg-white
            hover:border-black/20
            hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]
          "
        >
          EXPLORE
        </a>

        <a
          href="https://github.com/vmoreira-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6 py-3 rounded-xl
            bg-white/70 backdrop-blur-md
            border border-black/10
            text-slate-800
            transition-all duration-300
            hover:bg-white
            hover:border-black/20
            hover:text-slate-900
          "
        >
          GitHub
        </a>
      </div>

      {/* Tech icons */}
      <div className="mt-10">
        <TechStack />
      </div>
    </section>
  );
}
