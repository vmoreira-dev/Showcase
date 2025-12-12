import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      <Hero />
      <FeaturedProjects />
    </main>
  );
}
