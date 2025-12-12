// app/components/FeaturedProjects.tsx
import ProjectCard from "./ProjectCard";
import { projects } from "../_data/projects";

export default function FeaturedProjects() {
  return (
    <>
      {/* Scroll anchor */}
      <div id="projects" className="relative -top-1" />

      <section className="mt-32">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-24">
          Featured Projects
        </h2>

        <div className="space-y-40 max-w-5xl mx-auto px-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.slug}-${index}`}
              title={project.title}
              tagline={project.tagline}
              image={project.image}
              featured
            />
          ))}
        </div>
      </section>
    </>
  );
}
