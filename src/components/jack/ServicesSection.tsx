import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const SERVICES = [
  {
    n: "01",
    name: "Software Development",
    desc: "Building reliable, well-structured software solutions tailored to real-world problems, with a focus on clean code and maintainability.",
  },
  {
    n: "02",
    name: "Web Development",
    desc: "Designing and developing modern, responsive websites and web applications using current frameworks and best practices.",
  },
  {
    n: "03",
    name: "Desktop Application Development",
    desc: "Creating efficient cross-platform desktop applications with intuitive interfaces and solid performance.",
  },
  {
    n: "04",
    name: "Database Design & Management",
    desc: "Designing, structuring, and managing databases to ensure data integrity, scalability, and efficient querying.",
  },
  {
    n: "05",
    name: "Technical Problem Solving",
    desc: "Analyzing complex technical challenges and delivering clear, efficient, and well-thought-out solutions.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="
        relative
        w-full
        px-4
        sm:px-6
        md:px-8
        lg:px-10
        py-20
        sm:py-24
        md:py-32
        bg-[#0C0C0C]
        overflow-hidden
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          top-[20%]
          left-1/2
          -translate-x-1/2
          w-[300px]
          sm:w-[500px]
          md:w-[700px]
          h-[300px]
          sm:h-[500px]
          md:h-[700px]
          rounded-full
          bg-white/[0.02]
          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          rounded-[32px]
          sm:rounded-[40px]
          md:rounded-[50px]
          border
          border-white/10
          bg-[#0C0C0C]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          py-14
          sm:py-18
          md:py-22
          shadow-[0_0_60px_rgba(255,255,255,0.03)]
          overflow-hidden
        "
      >
        {/* TITLE */}
        <FadeIn y={40}>
          <div className="text-center mb-14 sm:mb-18 md:mb-24">
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
              What I can build
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
                fontSize: "clamp(3.3rem, 11vw, 150px)",
              }}
            >
              Services
            </h2>
          </div>
        </FadeIn>

        {/* SERVICES */}
        <div className="max-w-5xl mx-auto">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.n}
              delay={index * 0.08}
              y={25}
            >
              <motion.div
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="
                  group
                  relative
                  w-full
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  gap-5
                  sm:gap-7
                  md:gap-10
                  lg:gap-14
                  px-4
                  sm:px-5
                  md:px-6
                  py-8
                  sm:py-10
                  md:py-11
                  border-b
                  border-white/10
                  transition-all
                  duration-500
                "
                style={{
                  borderTop:
                    index === 0
                      ? "1px solid rgba(255,255,255,0.12)"
                      : undefined,
                }}
              >
                {/* Hover background */}
                <motion.div
                  variants={{
                    rest: {
                      opacity: 0,
                      scaleX: 0.96,
                    },
                    hover: {
                      opacity: 1,
                      scaleX: 1,
                    },
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className="
                    absolute
                    inset-0
                    -z-10
                    rounded-[28px]
                    bg-white/[0.045]
                    border
                    border-white/10
                  "
                />

                {/* NUMBER */}
                <motion.div
                  variants={{
                    rest: {
                      x: 0,
                      opacity: 0.15,
                    },
                    hover: {
                      x: 8,
                      opacity: 0.38,
                    },
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className="
                    shrink-0
                    font-black
                    text-white
                  "
                  style={{
                    fontSize: "clamp(3.5rem, 7vw, 100px)",
                    lineHeight: 0.8,
                    minWidth: "clamp(100px, 12vw, 150px)",
                  }}
                >
                  {service.n}
                </motion.div>

                {/* CONTENT */}
                <div className="flex-1 min-w-0">
                  <motion.h3
                    variants={{
                      rest: {
                        x: 0,
                      },
                      hover: {
                        x: 8,
                      },
                    }}
                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                    className="
                      font-medium
                      uppercase
                      text-white
                      leading-tight
                    "
                    style={{
                      fontSize: "clamp(1.15rem, 2.3vw, 2rem)",
                    }}
                  >
                    {service.name}
                  </motion.h3>

                  <p
                    className="
                      mt-3
                      max-w-3xl
                      font-light
                      leading-relaxed
                      text-white/60
                    "
                    style={{
                      fontSize: "clamp(0.85rem, 1.35vw, 1.15rem)",
                    }}
                  >
                    {service.desc}
                  </p>
                </div>

                {/* Arrow */}
                <motion.div
                  variants={{
                    rest: {
                      x: 0,
                      opacity: 0.3,
                    },
                    hover: {
                      x: 8,
                      opacity: 1,
                    },
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    hidden
                    md:flex
                    shrink-0
                    w-12
                    h-12
                    rounded-full
                    border
                    border-white/10
                    items-center
                    justify-center
                    text-white
                    text-xl
                  "
                >
                  →
                </motion.div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom label */}
        <FadeIn delay={0.35} y={20}>
          <div className="flex justify-center mt-12 sm:mt-14">
            <div
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.025]
                px-5
                sm:px-7
                py-3
                text-white/40
                uppercase
                tracking-[0.25em]
                text-[9px]
                sm:text-[10px]
              "
            >
              Turning ideas into working solutions
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}