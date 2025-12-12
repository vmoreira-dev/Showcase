// app/components/Hero.tsx

export default function Hero() {
  return (
    <section className="flex flex-col items-center pt-40 pb-32 text-center text-white">
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
        Vinicius Moreira
      </h1>

      <p className="text-lg md:text-xl mt-4 opacity-80">
        FULL-STACK DEVELOPER
      </p>

      {/* Buttons */}
      <div className="mt-12 flex items-center gap-6">
        <a
          href="#projects"
          className="px-10 py-3 rounded-lg
                     border border-white/30
                     bg-white/10 backdrop-blur-md
                     text-white hover:bg-white/20
                     transition-all"
        >
          EXPLORE
        </a>

        <a
          href="https://github.com/vmoreira-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg
                     border border-white/20
                     text-white/80 hover:text-white
                     hover:border-white/40
                     transition-all"
        >
          GitHub
        </a>
      </div>

      {/* Tech icons */}
      {/* Tech icons */}
<div className="mt-16 flex items-center gap-10 opacity-70">
  <img src="/images/tech/next.svg" alt="Next.js" className="h-7" />
  <img src="/images/tech/typescript.svg" alt="TypeScript" className="h-7" />
  <img src="/images/tech/tailwind.svg" alt="Tailwind CSS" className="h-7" />
  <img src="/images/tech/node.svg" alt="Node.js" className="h-7" />
</div>

    </section>
  );
}
