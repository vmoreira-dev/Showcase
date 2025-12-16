import Link from "next/link";

type ProjectCardProps = {
  title: string;
  tagline: string;
  image?: string;
  href: string;
};

export default function ProjectCard({
  title,
  tagline,
  image,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
      <article
        className="
          group relative mx-auto max-w-5xl
          h-[220px]
          rounded-3xl
          bg-white/60 backdrop-blur-xl
          border border-black/5
          transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)]
          hover:-translate-y-1
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          hover:cursor-pointer
        "
      >
        {/* White veil — lighter so gradient does the work */}
        <div
          className="
            absolute inset-0 rounded-3xl
            bg-white/40
            transition-opacity duration-400 ease-[cubic-bezier(.16,1,.3,1)]
            group-hover:opacity-0
            pointer-events-none
          "
        />

        {/* Product preview */}
        {image && (
          <div
            className="
              absolute right-8 top-1/2 -translate-y-1/2
              w-[300px] h-[170px]
              rounded-xl overflow-hidden
              bg-white/70 backdrop-blur-sm
              opacity-55
              transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)]
              group-hover:opacity-85
              group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.14)]
            "
          >
            {/* Diffusion mask — strong left → clear right */}
            <div
              className="
                absolute inset-0 z-10
                bg-gradient-to-r
                from-white/90
                via-white/55 via-30%
                to-white/0
                transition-opacity duration-400 ease-[cubic-bezier(.16,1,.3,1)]
                group-hover:opacity-0
                pointer-events-none
              "
            />

            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-10">
          <h3 className="text-2xl font-semibold text-slate-900 transition-colors group-hover:text-slate-950">
            {title}
          </h3>
          <p className="mt-2 text-slate-600">
            {tagline}
          </p>
        </div>
      </article>
    </Link>
  );
}
