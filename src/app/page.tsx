import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Projects />
      <Stack />
      <About />
      <Contact />
    </main>
  );
}
