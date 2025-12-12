import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";

export default function Home() {
  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative z-10">
        <Hero />
      </section>

      {/* PROJECTS — MUST BE ABOVE HERO */}
      <section
        id="projects"
        className="relative z-20 mt-40 pb-48"
      >
        <FeaturedProjects />
      </section>
    </main>
  );
}
