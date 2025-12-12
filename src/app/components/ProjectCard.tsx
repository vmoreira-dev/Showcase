// app/components/ProjectCard.tsx
import Link from "next/link";
import { ReactNode } from "react";

type ProjectCardProps = {
  title: string;
  tagline: string;
  image?: string;
  href?: string; // OPTIONAL — so nothing breaks
  featured?: boolean;
};

export default function ProjectCard({
  title,
  tagline,
  image,
  href,
  featured = false,
}: ProjectCardProps) {
  const Wrapper = ({ children }: { children: ReactNode }) =>
    href ? (
      <Link href={href} className="block">
        {children}
      </Link>
    ) : (
      <div className="block cursor-default">{children}</div>
    );

  return (
    <Wrapper>
      <article
        className={`
          relative overflow-hidden rounded-2xl
          border border-white/15
          bg-black/40 backdrop-blur-md
          transition-all duration-300
          ${href ? "hover:bg-black/50 hover:scale-[1.01] cursor-pointer" : ""}
          ${featured ? "aspect-[21/9]" : "aspect-[16/10]"}
        `}
      >
        {image && (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
        )}

        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-white/70">{tagline}</p>
        </div>
      </article>
    </Wrapper>
  );
}
