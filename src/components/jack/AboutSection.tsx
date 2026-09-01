import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";

const INTERESTS = [
  "Full-Stack Development",
  "React & TypeScript",
  "AI Automation",
  "REST APIs",
  "Problem Solving",
  "Modern UI/UX",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        px-5
        sm:px-8
        md:px-10
        py-24
        sm:py-28
        md:py-36
        overflow-hidden
        bg-[#0C0C0C]
      "
    >
      {/* ================= DECORATIVE ELEMENTS ================= */}

      {/* Left Top */}
      <FadeIn
        delay={0.1}
        x={-80}
        duration={0.9}
        className="
          absolute
          top-[5%]
          left-[2%]
          w-[90px]
          sm:w-[130px]
          md:w-[180px]
          lg:w-[210px]
          pointer-events-none
          select-none
          opacity-70
        "
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Left Bottom */}
      <FadeIn
        delay={0.25}
        x={-80}
        duration={0.9}
        className="
          absolute
          bottom-[6%]
          left-[3%]
          md:left-[7%]
          w-[80px]
          sm:w-[115px]
          md:w-[155px]
          lg:w-[180px]
          pointer-events-none
          select-none
          opacity-70
        "
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Right Top */}
      <FadeIn
        delay={0.15}
        x={80}
        duration={0.9}
        className="
          absolute
          top-[5%]
          right-[2%]
          w-[90px]
          sm:w-[130px]
          md:w-[180px]
          lg:w-[210px]
          pointer-events-none
          select-none
          opacity-70
        "
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Right Bottom */}
      <FadeIn
        delay={0.3}
        x={80}
        duration={0.9}
        className="
          absolute
          bottom-[6%]
          right-[3%]
          md:right-[7%]
          w-[95px]
          sm:w-[135px]
          md:w-[180px]
          lg:w-[220px]
          pointer-events-none
          select-none
          opacity-70
        "
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* HEADER */}
        <FadeIn
          delay={0}
          y={40}
          className="text-center"
        >
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
            Get to know me
          </p>

          <h2
            className="
              hero-heading
              font-black
              uppercase
              leading-[0.88]
              tracking-tight
              text-white
            "
            style={{
              fontSize: "clamp(3.2rem, 12vw, 160px)",
            }}
          >
            ABOUT ME
          </h2>
        </FadeIn>

        {/* INTRO CARD */}
        <FadeIn
          delay={0.15}
          y={30}
          className="w-full mt-10 sm:mt-14 md:mt-16"
        >
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[1100px]
              rounded-[28px]
              sm:rounded-[36px]
              md:rounded-[45px]
              border
              border-white/10
              bg-white/[0.025]
              backdrop-blur-md
              px-6
              sm:px-10
              md:px-14
              py-8
              sm:py-11
              md:py-14
              overflow-hidden
              transition-all
              duration-500
              hover:border-white/20
              hover:bg-white/[0.04]
            "
          >
            {/* Card glow */}
            <div
              className="
                pointer-events-none
                absolute
                -top-24
                left-1/2
                -translate-x-1/2
                h-48
                w-72
                rounded-full
                bg-purple-500/10
                blur-[90px]
              "
            />

            <div className="relative z-10">

              {/* Availability */}
              <div className="flex justify-center mb-7">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.035]
                    px-4
                    py-2
                  "
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                  </span>

                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white/50">
                    Open to opportunities
                  </span>
                </div>
              </div>

              <AnimatedText
                text="I am a Computer Science student at Aravali Institute of Technical Studies, Udaipur, passionate about software development and problem-solving. I enjoy building practical applications, exploring new technologies, and continuously improving my programming skills."
                className="
                  w-full
                  text-center
                  text-[#D7E2EA]
                  font-medium
                  leading-[1.8]
                  whitespace-normal
                  break-normal
                "
                style={{
                  fontSize: "clamp(1rem, 1.7vw, 1.4rem)",
                  wordBreak: "normal",
                  overflowWrap: "normal",
                  hyphens: "none",
                }}
              />
            </div>
          </div>
        </FadeIn>

        {/* STATS */}
        <FadeIn
          delay={0.25}
          y={25}
          className="w-full mt-4 sm:mt-5"
        >
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-3
              sm:gap-4
              max-w-[1100px]
              mx-auto
            "
          >
            {[
              {
                value: "3+",
                label: "Years Learning",
              },
              {
                value: "5+",
                label: "Projects Built",
              },
              {
                value: "20+",
                label: "Technologies",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="
                  group
                  rounded-[22px]
                  sm:rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.025]
                  px-5
                  py-6
                  sm:px-6
                  sm:py-7
                  text-center
                  transition-all
                  duration-300
                  hover:bg-white/[0.05]
                  hover:border-white/20
                  hover:-translate-y-1
                "
              >
                <div
                  className="
                    font-black
                    text-white
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                  style={{
                    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  }}
                >
                  {stat.value}
                </div>

                <div
                  className="
                    text-white/40
                    uppercase
                    tracking-[0.2em]
                    text-[9px]
                    sm:text-[10px]
                    mt-2
                  "
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* CURRENT FOCUS */}
        <FadeIn
          delay={0.3}
          y={25}
          className="w-full mt-4 sm:mt-5"
        >
          <div
            className="
              max-w-[1100px]
              mx-auto
              rounded-[24px]
              sm:rounded-[30px]
              border
              border-white/10
              bg-white/[0.02]
              px-5
              sm:px-8
              md:px-10
              py-6
              sm:py-8
            "
          >
            <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10">

              {/* Label */}
              <div className="shrink-0">
                <span
                  className="
                    text-white/35
                    uppercase
                    tracking-[0.3em]
                    text-[9px]
                    sm:text-[10px]
                  "
                >
                  Currently Focused On
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <span
                    key={interest}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.035]
                      px-3
                      sm:px-4
                      py-2
                      text-[9px]
                      sm:text-[10px]
                      uppercase
                      tracking-[0.12em]
                      text-white/55
                      transition-all
                      duration-300
                      hover:text-white
                      hover:border-white/25
                      hover:bg-white/[0.07]
                    "
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn
          delay={0.4}
          y={25}
          className="flex justify-center mt-8 sm:mt-10"
        >
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}