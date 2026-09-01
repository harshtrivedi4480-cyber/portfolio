import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./ContactButton";
import harshPortrait from "@/assets/harsh-portrait.png";

const NAV_LINKS = [
  "About",
  "Skills",
  "Services",
  "Projects",
  "Contact",
];

const CORE_STACK = [
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
];

export function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        flex-col
        overflow-hidden
        bg-[#0C0C0C]
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          -translate-x-1/2
          h-[300px]
          w-[300px]
          sm:h-[450px]
          sm:w-[450px]
          md:h-[600px]
          md:w-[600px]
          rounded-full
          blur-[130px]
          opacity-20
          z-0
        "
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.32), rgba(236,72,153,0.10), transparent 68%)",
        }}
      />

      {/* Small decorative glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-100px]
          top-[20%]
          h-[220px]
          w-[220px]
          rounded-full
          bg-purple-500/10
          blur-[100px]
          z-0
        "
      />

      {/* NAVBAR */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="
          relative
          z-30
          flex
          items-center
          justify-between
          gap-3
          px-5
          sm:px-6
          md:px-10
          pt-6
          md:pt-8
          shrink-0
        "
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="
              group
              relative
              text-[#D7E2EA]
              font-medium
              uppercase
              tracking-[0.12em]
              sm:tracking-wider
              text-[10px]
              sm:text-xs
              md:text-lg
              lg:text-[1.2rem]
              transition-all
              duration-300
              hover:text-white
              hover:-translate-y-0.5
            "
          >
            {link}

            <span
              className="
                absolute
                left-0
                -bottom-1
                h-px
                w-0
                bg-white
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </a>
        ))}
      </FadeIn>

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          flex-1
          flex-col
          items-center
          justify-center
          gap-5
          sm:gap-6
          px-3
          sm:px-4
          py-6
          min-h-0
        "
      >
        {/* HERO TITLE */}
        <FadeIn delay={0.15} y={40} className="w-full flex justify-center">
          <h1
            className="
              hero-heading
              font-black
              uppercase
              tracking-tight
              leading-[0.85]
              w-full
              text-center
              whitespace-nowrap
              text-white
              select-none
            "
            style={{
              fontSize: "clamp(2.6rem, 11vw, 11rem)",
              transform: "scaleX(1.02)",
            }}
          >
            Hi, I&apos;m Harsh
          </h1>
        </FadeIn>

        {/* PROFESSIONAL ROLE */}
        <FadeIn
          delay={0.25}
          y={20}
          className="flex flex-col items-center gap-3"
        >
          <h2
            className="
              text-white
              font-semibold
              uppercase
              text-center
              tracking-[0.16em]
              sm:tracking-[0.22em]
              text-sm
              sm:text-base
              md:text-xl
            "
          >
            Full-Stack Web Developer
          </h2>

          <div
            className="
              h-px
              w-16
              sm:w-20
              bg-gradient-to-r
              from-transparent
              via-white/40
              to-transparent
            "
          />
        </FadeIn>

        {/* AVAILABILITY BADGE */}
        <FadeIn delay={0.32} y={20} className="flex justify-center">
          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.035]
              px-4
              py-2
              sm:px-5
              sm:py-2.5
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/[0.055]
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>

            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white/60">
              Open to Full-Time Opportunities
            </span>
          </div>
        </FadeIn>

        {/* PORTRAIT */}
        <FadeIn
          delay={0.45}
          y={30}
          className="
            flex
            justify-center
            items-center
            w-[150px]
            sm:w-[190px]
            md:w-[230px]
            lg:w-[270px]
            xl:w-[300px]
          "
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <div
              className="
                relative
                rounded-full
                p-1
                transition-all
                duration-500
                hover:scale-[1.04]
              "
              style={{
                boxShadow: `
                  0 0 40px rgba(168,85,247,0.18),
                  0 0 90px rgba(236,72,153,0.10),
                  0 0 150px rgba(168,85,247,0.06)
                `,
              }}
            >
              {/* Rotating ring */}
              <div
                className="
                  absolute
                  -inset-3
                  rounded-full
                  border
                  border-dashed
                  border-white/10
                  animate-[spin_20s_linear_infinite]
                "
              />

              <img
                src={harshPortrait}
                alt="Harsh Trivedi portrait"
                className="
                  relative
                  z-10
                  w-full
                  h-auto
                  select-none
                  pointer-events-none
                  rounded-full
                "
                draggable={false}
              />
            </div>
          </Magnet>
        </FadeIn>

        {/* CORE STACK */}
        <FadeIn
          delay={0.52}
          y={20}
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
            sm:gap-2.5
            max-w-xl
            px-4
          "
        >
          {CORE_STACK.map((tech, index) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.025]
                px-3
                sm:px-4
                py-1.5
                sm:py-2
                text-[8px]
                sm:text-[9px]
                uppercase
                tracking-[0.16em]
                text-white/45
                transition-all
                duration-300
                hover:border-white/25
                hover:bg-white/[0.06]
                hover:text-white/80
              "
            >
              {tech}
              {index < CORE_STACK.length - 1 && (
                <span className="hidden">•</span>
              )}
            </span>
          ))}
        </FadeIn>
      </div>

      {/* BOTTOM ROW */}
      <div
        className="
          relative
          z-20
          grid
          grid-cols-1
          md:grid-cols-3
          items-end
          gap-6
          px-5
          sm:px-6
          md:px-10
          pb-8
          sm:pb-10
          md:pb-12
          shrink-0
        "
      >
        {/* LEFT SIDE — INTRO */}
        <FadeIn delay={0.6} y={20} className="justify-self-start">
          <div className="max-w-[340px]">
            <span className="block mb-3 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/30">
              Developer / Builder
            </span>

            <p
              className="
                text-[#D7E2EA]
                font-light
                uppercase
                tracking-wide
                leading-snug
              "
              style={{
                fontSize: "clamp(0.72rem, 1.2vw, 1.25rem)",
              }}
            >
              Full-Stack Web Developer
              <br />
              Building Modern Web Applications
              <br />
              With Clean & Scalable Solutions
            </p>
          </div>
        </FadeIn>

        {/* SCROLL INDICATOR */}
        <FadeIn
          delay={0.8}
          y={10}
          className="
            hidden
            md:flex
            flex-col
            items-center
            justify-self-center
            gap-2
            text-white/25
          "
        >
          <span className="text-[9px] uppercase tracking-[0.35em]">
            Scroll
          </span>

          <span className="relative h-9 w-px overflow-hidden bg-white/10">
            <span className="absolute left-0 top-0 h-3 w-px bg-white/50 animate-[scrollLine_1.8s_ease-in-out_infinite]" />
          </span>
        </FadeIn>

        {/* RIGHT SIDE — CTA */}
        <FadeIn
          delay={0.65}
          y={20}
          className="justify-self-start md:justify-self-end"
        >
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}