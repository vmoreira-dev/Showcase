// app/components/FeaturedProjects.tsx
import ProjectCard from "./ProjectCard";
import { projects } from "../_data/projects";

export default function FeaturedProjects() {
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-semibold tracking-tight text-center mb-32">
        Featured Projects
      </h2>

      <div className="space-y-40">
        {projects.map((project, index) => (
          <ProjectCard
            key={`${project.slug}-${index}`}
            title={project.title}
            tagline={project.tagline}
            image={project.image}
            href={project.href}
            featured
          />
        ))}
      </div>
    </section>
  );
}
