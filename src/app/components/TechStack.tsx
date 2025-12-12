export default function TechStack() {
  const tech = [
    { name: "Next.js", icon: "/images/tech/next.svg" },
    { name: "TypeScript", icon: "/images/tech/typescript.svg" },
    { name: "Tailwind", icon: "/images/tech/tailwind.svg" },
    { name: "Node.js", icon: "/images/tech/node.svg" },
  ];

  return (
    <div className="mt-12 flex items-center justify-center gap-10">
      {tech.map((t) => (
        <div
          key={t.name}
          className="
            group relative flex flex-col items-center
            opacity-60 transition-all duration-300
            hover:opacity-100
          "
        >
          <img
            src={t.icon}
            alt={t.name}
            className="
              h-7 w-auto
              transition-all duration-300
              group-hover:scale-110
              group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]
            "
          />

          <span
            className="
              mt-2 text-xs tracking-wide text-white/70
              opacity-0 translate-y-1
              transition-all duration-300
              group-hover:opacity-100 group-hover:translate-y-0
            "
          >
            {t.name}
          </span>
        </div>
      ))}
    </div>
  );
}
