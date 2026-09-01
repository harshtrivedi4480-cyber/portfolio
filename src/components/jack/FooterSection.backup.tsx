import { FadeIn } from "./FadeIn";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export function FooterSection() {
  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/harshtrivedi4480-cyber",
      Icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/harsh-trivedi-6b9725393",
      Icon: FaLinkedin,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/_pov.harsh_009",
      Icon: FaInstagram,
    },
  ];

  return (
    <footer
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#0C0C0C]
        px-5
        sm:px-8
        md:px-10
        pt-24
        sm:pt-32
        md:pt-40
        pb-8
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[400px]
          w-[400px]
          -translate-x-1/2
          rounded-full
          blur-[120px]
          opacity-20
        "
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.35), transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* CTA */}
        <FadeIn y={40}>
          <div className="text-center">
            <p className="mb-6 text-xs sm:text-sm uppercase tracking-[0.35em] text-white/40">
              Have a project in mind?
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
                fontSize: "clamp(3.2rem, 10vw, 9rem)",
              }}
            >
              Let's Build
              <br />
              <span className="text-white/80">
                Something Amazing
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Contact Button */}
        <FadeIn delay={0.2} y={30}>
          <div className="flex justify-center mt-12 sm:mt-16">
            <a
              href="mailto:harshtrivedi4480@gmail.com"
              className="
                group
                relative
                inline-flex
                items-center
                gap-4
                overflow-hidden
                rounded-full
                border border-white/15
                bg-white/[0.05]
                px-8
                py-4
                sm:px-10
                sm:py-5
                text-xs
                sm:text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-white/30
                hover:bg-white/[0.10]
                hover:shadow-[0_0_40px_rgba(168,85,247,0.18)]
              "
            >
              <span
                className="
                  absolute
                  inset-y-0
                  -left-full
                  w-1/2
                  rotate-12
                  bg-white/10
                  transition-all
                  duration-700
                  group-hover:left-[120%]
                "
              />

              <FaEnvelope className="relative z-10" />

              <span className="relative z-10">
                Get In Touch
              </span>

              <span
                className="
                  relative
                  z-10
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>
            </a>
          </div>
        </FadeIn>

        {/* Email */}
        <FadeIn delay={0.3} y={20}>
          <div className="mt-12 flex justify-center">
            <a
              href="mailto:harshtrivedi4480@gmail.com"
              className="
                group
                flex
                items-center
                gap-3
                text-white/50
                transition-all
                duration-300
                hover:text-white
              "
            >
              <FaEnvelope
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              />

              <span className="text-sm sm:text-base md:text-lg">
                harshtrivedi4480@gmail.com
              </span>
            </a>
          </div>
        </FadeIn>

        {/* Socials */}
        <FadeIn delay={0.4} y={20}>
          <div className="flex justify-center gap-3 sm:gap-4 mt-10">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="
                  group
                  flex
                  h-12
                  w-12
                  sm:h-14
                  sm:w-14
                  items-center
                  justify-center
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  text-white/50
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/25
                  hover:bg-white/[0.08]
                  hover:text-white
                  hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]
                "
              >
                <Icon
                  size={21}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Divider */}
        <div className="h-px bg-white/10 mt-20 sm:mt-24 mb-8" />

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-5
          "
        >
          <span className="text-white/35 text-xs sm:text-sm text-center md:text-left">
            © 2026 Harsh Trivedi. All rights reserved.
          </span>

          <span
            className="
              text-white/35
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.2em]
              text-center
            "
          >
            Designed & Developed by Harsh Trivedi
          </span>

          {/* Back to top */}
          <a
            href="#"
            aria-label="Back to top"
            className="
              group
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border border-white/10
              text-white/40
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white/25
              hover:text-white
            "
          >
            <FaArrowUp
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}