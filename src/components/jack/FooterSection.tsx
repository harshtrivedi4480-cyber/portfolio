import { FadeIn } from "./FadeIn";

export function FooterSection() {
  return (
    <footer
      className="
        relative
        bg-[#0C0C0C]
        px-5
        sm:px-8
        md:px-10
        pt-10
        sm:pt-12
        pb-8
      "
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn y={20}>
          <div className="h-px bg-white/10 mb-8" />
        </FadeIn>

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
          {/* Copyright */}
          <span className="text-white/35 text-xs sm:text-sm text-center md:text-left">
            © 2026 Harsh Trivedi. All rights reserved.
          </span>

          {/* Credit */}
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
        </div>
      </div>
    </footer>
  );
}