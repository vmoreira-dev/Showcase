// app/components/FeaturedProjects.tsx

import ProjectCard from "./ProjectCard";
import { projects } from "../_data/projects";

export default function FeaturedProjects() {
  return (
    <section className="px-6 md:px-20 pb-32">
      <h2 className="text-center text-3xl font-semibold mb-12">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer">
            <ProjectCard title={p.title} tagline={p.tagline} image={p.image} />
          </a>
        ))}
      </div>
    </section>
  );
}
