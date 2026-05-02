import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Recognition } from "@/components/Recognition";
import { Skills } from "@/components/Skills";
import { Hackathons } from "@/components/Hackathons";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Recognition />
        <Projects />
        <Hackathons />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
