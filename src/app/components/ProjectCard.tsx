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
          group relative
          max-w-5xl h-[220px] mx-auto
          rounded-3xl
          bg-white/60 backdrop-blur-xl
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        "
      >
        {/* Floating preview panel */}
        {image && (
          <div
            className="
              absolute right-8 top-1/2 -translate-y-1/2
              w-[300px] h-[170px]
              rounded-xl overflow-hidden
              bg-white/70 backdrop-blur-sm
              shadow-[0_18px_40px_rgba(0,0,0,0.10)]
              transition-all duration-300 ease-out
              group-hover:-translate-y-[55%]
              group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.14)]
            "
          >
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-10">
          <h3 className="text-2xl font-semibold text-slate-900">
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
