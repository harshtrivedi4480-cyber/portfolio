import { FadeIn } from "./FadeIn";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/harshtrivedi4480-cyber", Icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harsh-trivedi-6b9725393", Icon: FaLinkedin },
  { label: "Instagram", href: "https://instagram.com/_pov.harsh_009", Icon: FaInstagram },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[400px] w-[400px] -translate-x-1/2 rounded-full blur-[120px] opacity-20" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.35), transparent 65%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <FadeIn y={40}>
          <div className="text-center">
            <p className="mb-6 text-xs sm:text-sm uppercase tracking-[0.35em] text-white/40">Have a project in mind?</p>
            <h2 className="hero-heading font-black uppercase leading-[0.88] tracking-tight text-white" style={{ fontSize: "clamp(3.2rem, 10vw, 9rem)" }}>
              Let&apos;s Build
              <br />
              <span className="text-white/80">Something Amazing</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={30}>
          <div className="flex justify-center mt-12 sm:mt-16">
            <a href="mailto:harshtrivedi4480@gmail.com" className="inline-flex items-center gap-4 rounded-full border border-white/15 bg-white/[0.05] px-8 py-4 sm:px-10 sm:py-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.10]">
              <FaEnvelope />
              <span>Get In Touch</span>
              <span>↗</span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <div className="mt-12 flex justify-center">
            <a href="mailto:harshtrivedi4480@gmail.com" className="flex items-center gap-3 text-white/50 transition-all duration-300 hover:text-white">
              <FaEnvelope size={17} />
              <span className="text-sm sm:text-base md:text-lg">harshtrivedi4480@gmail.com</span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} y={20}>
          <div className="flex justify-center gap-3 sm:gap-4 mt-10">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08] hover:text-white">
                <Icon size={21} />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
