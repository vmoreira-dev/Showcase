// src/app/components/TechStack.tsx

export default function TechStack() {
  return (
    <section className="flex flex-col items-center gap-10 py-12">

      {/* Glow line */}
      <div className="w-full max-w-xl h-px bg-white/10 shadow-[0_0_20px_rgba(0,150,255,0.4)]"></div>

      {/* Tech icons */}
      <div className="flex items-center justify-center gap-10 opacity-80">

        {/* Next.js */}
        <img
          src="/images/tech/next.svg"
          alt="Next.js"
          className="h-10 w-auto"
        />

        {/* TypeScript */}
        <img
          src="/images/tech/typescript.svg"
          alt="TypeScript"
          className="h-10 w-auto"
        />

        {/* Whatever icon you used (the blue circles dot) */}
        <img
          src="/images/tech/ui.svg"
          alt="UI"
          className="h-10 w-auto"
        />

        {/* Node */}
        <img
          src="/images/tech/node.svg"
          alt="Node.js"
          className="h-10 w-auto"
        />

      </div>

      {/* Bottom glow line */}
      <div className="w-full max-w-xl h-px bg-white/10 shadow-[0_0_20px_rgba(0,150,255,0.4)]"></div>

    </section>
  );
}
