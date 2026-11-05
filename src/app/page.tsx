import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProfileStats } from "@/components/ProfileStats";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Services } from "@/components/Services";
import { ToolsEcosystem } from "@/components/ToolsEcosystem";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import { WorkProcess } from "@/components/WorkProcess";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <ProfileStats />
        <About />
        <Experience />
        <Services />
        <ToolsEcosystem />
        <Skills />
        <Portfolio />
        <WhyWorkWithMe />
        <WorkProcess />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
