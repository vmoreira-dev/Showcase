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
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block w-full max-w-5xl mx-auto
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-black/20
        focus-visible:ring-offset-4
        focus-visible:ring-offset-white/60
      "
    >
      <article
        className="
          group relative w-full
          h-[220px]
          rounded-3xl
          bg-white/60 backdrop-blur-xl
          border border-black/5
          transition-all duration-300 ease-out
          hover:-translate-y-1.5
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          cursor-pointer
        "
      >
        {/* White veil */}
        <div
          className="
            absolute inset-0 rounded-3xl
            bg-white/40
            transition-opacity duration-500 ease-out

            group-hover:opacity-0
            pointer-events-none
          "
        />

        {/* Product preview — static, grounded */}
        {image && (
          <div
            className="
              absolute right-8 top-1/2 -translate-y-1/2
              w-[300px] h-[170px]
              rounded-xl overflow-hidden
              bg-white/70 backdrop-blur-sm
              opacity-70
              transition-[opacity,box-shadow] duration-500 ease-out
              group-hover:opacity-90
              group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.14)]
              pointer-events-none
            "
          >
            <div
              className="
                absolute inset-0 z-10
                bg-gradient-to-r
                from-white/90
                via-white/55 via-30%
                to-white/0
                transition-opacity duration-300 ease-out
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
          <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-slate-950">
            {title}
          </h3>
          <p className="mt-2 text-slate-600">{tagline}</p>
        </div>
      </article>
    </Link>
  );
}
