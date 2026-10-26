import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Navigation />
      <Hero />
      <Work />
      <Stack />
      <About />
      <Contact />
    </main>
  );
}
