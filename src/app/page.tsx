// app/page.tsx
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[url('/background.webp')] bg-cover bg-center bg-no-repeat text-white">
      <div className="backdrop-blur-[2px] bg-black/40 min-h-screen">
        <Hero />
        <TechStack />
        <FeaturedProjects />
      </div>
    </main>
  );
}
