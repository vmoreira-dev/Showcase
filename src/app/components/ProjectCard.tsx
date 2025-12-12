// app/components/ProjectCard.tsx
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  tagline: string;
  image?: string;
  href?: string;
  featured?: boolean;
};

export default function ProjectCard({
  title,
  tagline,
  image,
  href,
  featured = false,
}: ProjectCardProps) {
  const Card = (
    <article
      className={`
        relative overflow-hidden rounded-2xl
        border border-white/15
        bg-white/5 backdrop-blur-md
        transition-all duration-300
        ${href ? "hover:bg-white/10 hover:scale-[1.01] cursor-pointer" : ""}
        ${featured ? "aspect-[21/9]" : "aspect-[16/10]"}
      `}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover opacity-80 pointer-events-none"
          // 🔧 THIS LINE FIXES IT
        />
      )}

      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{tagline}</p>
      </div>
    </article>
  );

  return href ? <Link href={href}>{Card}</Link> : Card;
}
