// app/components/ProjectCard.tsx
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
      className="block"
    >
        <article
    className="
      relative overflow-hidden rounded-2xl
      border border-white/15
      bg-white/5 backdrop-blur-md
      transition-all duration-300
      hover:bg-white/10 hover:scale-[1.01]
      cursor-pointer

      max-w-5xl
      h-[300px]
      mx-auto
    "
>

        {image && (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* subtle contrast layer, not mud */}
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 h-full flex flex-col justify-end p-10">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-white/70">{tagline}</p>
        </div>
      </article>
    </Link>
  );
}
