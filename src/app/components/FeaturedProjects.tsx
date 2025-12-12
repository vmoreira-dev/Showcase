// app/components/FeaturedProjects.tsx
import { projects } from "../_data/projects";

import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="mt-32 pb-40 flex flex-col gap-32"
    >
      <h2 className="text-center text-2xl font-semibold tracking-tight">
        Featured Projects
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
