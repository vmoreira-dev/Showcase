// app/components/ProjectCard.tsx

export default function ProjectCard({ title, tagline, image }: {
  title: string;
  tagline: string;
  image: string;
}) {
  return (
    <div className="rounded-xl bg-glass border border-glassBorder 
                    overflow-hidden backdrop-blur-md shadow-glass 
                    hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover opacity-90"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm opacity-70 mt-1">{tagline}</p>
      </div>
    </div>
  );
}
