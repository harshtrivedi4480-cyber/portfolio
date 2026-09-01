import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/jack/HeroSection";
import { MarqueeSection } from "@/components/jack/MarqueeSection";
import { AboutSection } from "@/components/jack/AboutSection";
import { ServicesSection } from "@/components/jack/ServicesSection";
import { ProjectsSection } from "@/components/jack/ProjectsSection";
import { SkillsSection } from "@/components/jack/SkillsSection";
import { ContactSection } from "@/components/jack/ContactSection";
import { FooterSection } from "@/components/jack/FooterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Harsh Trivedi | Computer Science Student & Software Developer",
      },
      {
        name: "description",
        content:
          "Harsh Trivedi — Computer Science student at Aravali Institute and software developer building practical, modern applications.",
      },
      {
        property: "og:title",
        content:
          "Harsh Trivedi | Computer Science Student & Software Developer",
      },
      {
        property: "og:description",
        content:
          "Harsh Trivedi — Computer Science student at Aravali Institute and software developer building practical, modern applications.",
      },
    ],

    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <main style={{ background: "#0C0C0C", overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}