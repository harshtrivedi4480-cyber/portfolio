import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";
import { VictoryGameShowcase } from "./VictoryGameShowcase";

import projectShowcase from "@/assets/game.png";
import projectWeather from "@/assets/project-weather.png";
import projectAroma from "@/assets/project-aroma.jpg";
import projectUdaipur from "@/assets/project-udaipur.png";
import projectCineVault from "@/assets/project-cinevault.png";
import projectPersonal from "@/assets/project-personal.png";

interface Project {
  n: string;
  category: string;
  name: string;
  description: string;
  stack: string[];
  image?: string;
  link: string;
  github?: string;
  special?: "game";
}

const PROJECTS: Project[] = [
  {
    n: "01",
    category: "Full-Stack / Travel Platform",
    name: "Udaipur Explorer",
    description:
      "A premium travel discovery platform for exploring Udaipur, featuring places, food, stays, experiences, hidden gems, stories, trip planning and an interactive map.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Leaflet"],
    image: projectUdaipur,
    link: "https://udaipur-explorer.vercel.app/",
    github:
      "https://github.com/harshtrivedi4480-cyber/udaipur-explorer",
  },
  {
    n: "02",
    category: "Frontend / Movie Discovery",
    name: "CineVault",
    description:
      "A responsive movie discovery web application built with React.js, featuring movie search, genre filtering, pagination and detailed movie information.",
    stack: ["React", "JavaScript", "REST API", "CSS", "Responsive UI"],
    image: projectCineVault,
    link: "https://cinevault-by-harsh-trivedi.vercel.app/",
    github:
      "https://github.com/harshtrivedi4480-cyber/cinevault-harsh-trivedi",
  },
  {
    n: "03",
    category: "Frontend / UI",
    name: "Personal Portfolio",
    description:
      "A modern developer portfolio focused on clean visual design, responsive layouts, smooth interactions and an immersive browsing experience.",
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      image: projectPersonal,
    
    link:
      "https://github.com/harshtrivedi4480-cyber/Harsh-Responsive-Portfolio-Experience",
  },
  {
    n: "04",
    category: "Software / Java",
    name: "Java OOP Mini Projects",
    description:
      "A collection of practical Java projects demonstrating object-oriented programming, application logic, reusable code and problem-solving.",
    stack: ["Java", "OOP", "DSA", "Problem Solving"],
    image: projectShowcase,
    link: "https://github.com/harshtrivedi/Java-OOP-Projects",
    special: "game",
  },
  {
    n: "05",
    category: "Full-Stack / API",
    name: "Live Weather Observatory",
    description:
      "A responsive weather application that consumes live API data and presents current conditions through a clean, interactive interface.",
    stack: ["JavaScript", "REST API", "Weather API", "Responsive UI"],
    image: projectWeather,
    link: "https://live-weather-observatory-f1fopjru3.vercel.app/",
    github:
      "https://github.com/harshtrivedi4480-cyber/live-weather-observatory",
  },
  {
    n: "06",
    category: "Web / Business",
    name: "Aroma Café",
    description:
      "A premium café website designed around strong visual storytelling, responsive layouts, animated reveals and a smooth customer experience.",
    stack: ["HTML", "CSS", "JavaScript", "Formspree"],
    image: projectAroma,
    link: "https://aroma-cafe-website-sooty.vercel.app/",
    github:
      "https://github.com/harshtrivedi4480-cyber/aroma-cafe-website",
  },
];

function ProjectPreviewFallback({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="w-full">
      <div
        className="
          relative
          w-full
          h-[240px]
          sm:h-[320px]
          md:h-[430px]
          lg:h-[500px]
          flex
          items-center
          justify-center
          rounded-[28px]
          sm:rounded-[35px]
          md:rounded-[45px]
          border
          border-white/10
          bg-gradient-to-br
          from-white/[0.08]
          via-white/[0.04]
          to-transparent
          overflow-hidden
        "
      >
        <span className="text-white/20 uppercase tracking-[0.3em] text-sm md:text-base">
          {project.category}
        </span>
      </div>
    </div>
  );
}

function ProjectImagePreview({
  project,
}: {
  project: Project;
}) {
  if (!project.image) {
    return <ProjectPreviewFallback project={project} />;
  }

  return (
    <div className="w-full">
      <div
        className="
          group
          relative
          w-full
          h-[240px]
          sm:h-[320px]
          md:h-[430px]
          lg:h-[500px]
          rounded-[28px]
          sm:rounded-[35px]
          md:rounded-[45px]
          overflow-hidden
          border
          border-white/10
          bg-black
        "
      >
        <img
          src={project.image}
          alt={`${project.name} preview`}
          loading="lazy"
          draggable={false}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.025]
          "
        />

        {/* Cinematic overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/40
            via-transparent
            to-transparent
          "
        />

        {/* Subtle shine */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-0
            bg-gradient-to-r
            from-transparent
            via-white/[0.06]
            to-transparent
            translate-x-[-100%]
            group-hover:translate-x-[100%]
            group-hover:opacity-100
            transition-all
            duration-1000
          "
        />

        {/* Border highlight */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[28px]
            sm:rounded-[35px]
            md:rounded-[45px]
            ring-1
            ring-inset
            ring-white/10
          "
        />
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const targetScale = 1 - (total - 1 - index) * 0.025;

  const scale = useTransform(
    progress,
    [index / total, 1],
    [1, targetScale]
  );

  return (
    <div
      className="sticky"
      style={{
        top: `${index * 28 + 96}px`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="
          group
          w-full
          rounded-[32px]
          sm:rounded-[42px]
          md:rounded-[52px]
          border
          border-white/10
          bg-[#0C0C0C]/95
          backdrop-blur-xl
          p-4
          sm:p-6
          md:p-8
          shadow-[0_0_60px_rgba(255,255,255,0.03)]
          transition-all
          duration-500
          hover:border-white/20
          overflow-hidden
        "
      >
        {/* HEADER */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-5
            md:gap-8
            mb-6
            md:mb-8
            px-1
            sm:px-2
          "
        >
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 min-w-0">
            {/* Number */}
            <motion.div
              whileHover={{ x: 6 }}
              className="
                hero-heading
                font-black
                text-white/15
                shrink-0
                select-none
                transition-colors
                duration-300
                group-hover:text-white/20
              "
              style={{
                fontSize: "clamp(3.5rem, 8vw, 110px)",
                lineHeight: 0.85,
              }}
            >
              {project.n}
            </motion.div>

            {/* Project info */}
            <div className="flex flex-col gap-2 min-w-0">
              <span
                className="
                  text-white/45
                  uppercase
                  tracking-[0.25em]
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                "
              >
                {project.category}
              </span>

              <span
                className="
                  text-white
                  font-medium
                  uppercase
                  leading-tight
                "
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.75rem)",
                }}
              >
                {project.name}
              </span>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.035]
                      px-2
                      sm:px-2.5
                      py-1
                      text-[7px]
                      sm:text-[8px]
                      uppercase
                      tracking-[0.12em]
                      text-white/35
                      transition-all
                      duration-300
                      group-hover:text-white/55
                      group-hover:border-white/15
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <LiveProjectButton href={project.link} />

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  h-10
                  sm:h-11
                  px-4
                  sm:px-5
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.04]
                  text-white/80
                  text-xs
                  sm:text-sm
                  uppercase
                  tracking-wider
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-black
                  hover:border-white
                "
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* PROJECT DESCRIPTION */}
        <div
          className="
            px-1
            sm:px-2
            mb-5
            sm:mb-6
            md:mb-7
            flex
            flex-col
            sm:flex-row
            sm:items-start
            gap-3
            sm:gap-5
          "
        >
          <span
            className="
              shrink-0
              text-white/20
              uppercase
              tracking-[0.25em]
              text-[8px]
              sm:text-[9px]
              pt-1
            "
          >
            Overview
          </span>

          <p
            className="
              max-w-3xl
              text-white/45
              font-light
              leading-relaxed
            "
            style={{
              fontSize: "clamp(0.78rem, 1.15vw, 1rem)",
            }}
          >
            {project.description}
          </p>
        </div>

        {/* PROJECT PREVIEW */}
        {project.special === "game" ? (
          <div
            className="
              w-full
              overflow-hidden
              rounded-[28px]
              sm:rounded-[35px]
              md:rounded-[45px]
              border
              border-white/10
            "
          >
            <VictoryGameShowcase />
          </div>
        ) : (
          <ProjectImagePreview project={project} />
        )}

        {/* Bottom project indicator */}
        <div className="flex items-center justify-between mt-4 px-1 sm:px-2">
          <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-white/25">
            Case Study {project.n}
          </span>

          <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-white/20">
            {project.category}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="
        px-5
        sm:px-8
        md:px-10
        py-20
        sm:py-24
        md:py-32
        bg-[#0C0C0C]
      "
    >
      {/* SECTION TITLE */}
      <FadeIn
        y={40}
        className="text-center mb-16 sm:mb-20 md:mb-28"
      >
        <span className="block mb-4 text-white/30 text-xs sm:text-sm uppercase tracking-[0.4em]">
          Selected Work
        </span>

        <h2
          className="
            hero-heading
            font-black
            uppercase
            leading-none
            tracking-tight
            text-white
          "
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
          }}
        >
          Projects
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-white/40 text-sm sm:text-base leading-relaxed">
          Full-stack applications, software projects and digital
          experiences built with modern technologies, clean architecture
          and a focus on real-world usability.
        </p>

        {/* Developer label */}
        <div className="flex justify-center mt-7">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.025]
              px-4
              py-2
              text-[8px]
              sm:text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/35
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-400/80" />
            Full-Stack Developer
          </div>
        </div>
      </FadeIn>

      {/* PROJECT CARDS */}
      <div className="max-w-7xl mx-auto">
        {PROJECTS.map((project, index) => (
          <div
            key={project.n}
            className="
              h-[82vh]
              sm:h-[86vh]
              md:h-[92vh]
            "
          >
            <ProjectCard
              project={project}
              index={index}
              total={PROJECTS.length}
              progress={scrollYProgress}
            />
          </div>
        ))}
      </div>

      {/* Bottom statement */}
      <FadeIn
        delay={0.3}
        y={25}
        className="flex justify-center mt-10 sm:mt-14 md:mt-20"
      >
        <div
          className="
            rounded-full
            border
            border-white/10
            bg-white/[0.025]
            px-5
            sm:px-7
            py-3
            text-white/35
            uppercase
            tracking-[0.25em]
            text-[8px]
            sm:text-[9px]
          "
        >
          Design â€¢ Develop â€¢ Deploy
        </div>
      </FadeIn>
    </section>
  );
}








