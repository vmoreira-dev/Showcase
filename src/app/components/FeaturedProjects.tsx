// app/components/FeaturedProjects.tsx
import { projects } from "../_data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="mt-40 pb-48 flex flex-col gap-20"
    >
          <h2
        className="
          text-center
          text-xl md:text-2xl
          font-semibold
          tracking-tight
          text-slate-900
          transition-all duration-300
          hover:text-slate-950
        "
      >
        Selected Work
      </h2>


      {projects.map((project) => (
        <ProjectCard
          key={project.href}
          title={project.title}
          tagline={project.tagline}
          image={project.image}
          href={project.href}
        />
      ))}
    </section>
  );
}
