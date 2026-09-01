import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
  FaNpm,
  FaLinux,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiMysql,
  SiFirebase,
  SiC,
  SiCplusplus,
  SiPhp,
  SiGnubash,
  SiJson,
  SiXml,
  SiMarkdown,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiRedux,
  SiNextdotjs,
  SiBootstrap,
  SiJquery,
  SiGitlab,
  SiDocker,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

const row1 = [
  { Icon: FaHtml5, name: "HTML5", color: "#E34F26" },
  { Icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
  { Icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: FaJava, name: "Java", color: "#F89820" },
  { Icon: SiC, name: "C", color: "#A8B9CC" },
  { Icon: SiCplusplus, name: "C++", color: "#00599C" },
  { Icon: FaPython, name: "Python", color: "#3776AB" },
  { Icon: SiMysql, name: "SQL", color: "#4479A1" },
  { Icon: SiPhp, name: "PHP", color: "#777BB4" },
  { Icon: SiGnubash, name: "Bash", color: "#4EAA25" },
  { Icon: SiJson, name: "JSON", color: "#FFFFFF" },
  { Icon: SiXml, name: "XML", color: "#FF6600" },
  { Icon: SiMarkdown, name: "Markdown", color: "#FFFFFF" },
  { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
];

const row2 = [
  { Icon: FaReact, name: "React", color: "#61DAFB" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { Icon: SiFramer, name: "Framer Motion", color: "#0055FF" },
  { Icon: SiVite, name: "Vite", color: "#646CFF" },
  { Icon: FaGitAlt, name: "Git", color: "#F05032" },
  { Icon: FaGithub, name: "GitHub", color: "#FFFFFF" },
  { Icon: FaFigma, name: "Figma", color: "#F24E1E" },
  { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: SiExpress, name: "Express", color: "#FFFFFF" },
  { Icon: SiPostman, name: "Postman", color: "#FF6C37" },
  { Icon: FaNpm, name: "npm", color: "#CB3837" },
  { Icon: FaLinux, name: "Linux", color: "#FCC624" },
  { Icon: SiRedux, name: "Redux", color: "#764ABC" },
];

const row3 = [
  { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { Icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
  { Icon: SiJquery, name: "jQuery", color: "#0769AD" },
  { Icon: SiGitlab, name: "GitLab", color: "#FC6D26" },
  { Icon: SiDocker, name: "Docker", color: "#2496ED" },
  { Icon: SiNetlify, name: "Netlify", color: "#00C7B7" },
  { Icon: SiVercel, name: "Vercel", color: "#FFFFFF" },
];

function SkillRow({
  skills,
  reverse = false,
  duration = 32,
}: {
  skills: typeof row1;
  reverse?: boolean;
  duration?: number;
}) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Side fade */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          bottom-0
          w-16
          sm:w-24
          md:w-36
          z-10
          bg-gradient-to-r
          from-[#0C0C0C]
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          bottom-0
          w-16
          sm:w-24
          md:w-36
          z-10
          bg-gradient-to-l
          from-[#0C0C0C]
          to-transparent
        "
      />

      <motion.div
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max gap-4 sm:gap-5 md:gap-6 whitespace-nowrap"
      >
        {[...skills, ...skills].map((skill, index) => {
          const Icon = skill.Icon;

          return (
            <motion.div
              key={`${skill.name}-${index}`}
              whileHover={{
                y: -5,
                scale: 1.04,
              }}
              className="
                group
                flex
                items-center
                gap-3
                sm:gap-4
                px-5
                sm:px-6
                md:px-7
                py-3
                sm:py-4
                rounded-full
                border
                border-white/10
                bg-white/[0.025]
                backdrop-blur-xl
                shrink-0
                transition-all
                duration-300
                hover:bg-white/[0.07]
                hover:border-white/20
                hover:shadow-[0_10px_40px_rgba(255,255,255,0.06)]
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-9
                  h-9
                  sm:w-10
                  sm:h-10
                  md:w-11
                  md:h-11
                  rounded-full
                  bg-white/[0.04]
                  border
                  border-white/5
                  transition-transform
                  duration-300
                  group-hover:rotate-6
                "
              >
                <Icon
                  size={24}
                  className="sm:w-7 sm:h-7"
                  color={skill.color}
                />
              </div>

              <span
                className="
                  text-white
                  font-medium
                  text-sm
                  sm:text-base
                  md:text-lg
                "
              >
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="
        relative
        py-24
        sm:py-28
        md:py-36
        overflow-hidden
      "
      style={{ background: "#0C0C0C" }}
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[25%]
          -translate-x-1/2
          w-[300px]
          sm:w-[500px]
          md:w-[700px]
          h-[300px]
          sm:h-[500px]
          md:h-[700px]
          rounded-full
          bg-white/[0.025]
          blur-[100px]
        "
      />

      {/* Heading */}
      <FadeIn y={40}>
        <div className="relative z-10 text-center px-5">
          <p
            className="
              text-white/40
              uppercase
              tracking-[0.35em]
              text-[10px]
              sm:text-xs
              md:text-sm
              mb-5
            "
          >
            Technologies I work with
          </p>

          <h2
            className="
              hero-heading
              font-black
              uppercase
              leading-[0.88]
              tracking-tight
              text-center
              text-white
            "
            style={{
              fontSize: "clamp(3.2rem, 12vw, 160px)",
            }}
          >
            Skills
          </h2>
        </div>
      </FadeIn>

      {/* Skill rows */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          gap-5
          sm:gap-6
          md:gap-7
          mt-14
          sm:mt-16
          md:mt-20
        "
      >
        <FadeIn delay={0.1} y={20}>
          <SkillRow
            skills={row1}
            duration={34}
          />
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <SkillRow
            skills={row2}
            reverse
            duration={38}
          />
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <SkillRow
            skills={row3}
            duration={30}
          />
        </FadeIn>
      </div>

      {/* Bottom label */}
      <FadeIn
        delay={0.3}
        y={20}
        className="relative z-10 flex justify-center mt-12 sm:mt-16"
      >
        <div
          className="
            px-5
            sm:px-7
            py-3
            rounded-full
            border
            border-white/10
            bg-white/[0.025]
            text-white/40
            uppercase
            tracking-[0.25em]
            text-[9px]
            sm:text-[10px]
          "
        >
          Always learning • Always building
        </div>
      </FadeIn>
    </section>
  );
}