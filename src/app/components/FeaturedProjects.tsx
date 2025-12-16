// app/components/FeaturedProjects.tsx
import { projects } from "../_data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="mt-40 pb-48 flex flex-col gap-20"
    >
      <h2 className="text-center text-lg font-medium tracking-wide text-slate-700">
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
