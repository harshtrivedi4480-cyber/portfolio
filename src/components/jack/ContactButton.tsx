export function ContactButton({
  href = "mailto:harshtrivedi4480@gmail.com",
}: {
  href?: string;
}) {
  return (
    <a
      href={href}
      className="
        group
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border border-white/15
        bg-white/[0.06]
        px-8 py-3.5
        sm:px-10 sm:py-4
        md:px-12 md:py-4.5
        text-xs
        sm:text-sm
        md:text-base
        font-semibold
        uppercase
        tracking-[0.25em]
        text-white
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:scale-[1.04]
        hover:border-white/30
        hover:bg-white/[0.10]
        active:scale-95
      "
      style={{
        boxShadow: `
          0 0 25px rgba(168, 85, 247, 0.25),
          0 0 55px rgba(236, 72, 153, 0.12),
          inset 0 1px 1px rgba(255,255,255,0.12)
        `,
      }}
    >
      <span
        className="
          pointer-events-none
          absolute
          -inset-10
          opacity-0
          blur-2xl
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.22), transparent 65%)",
        }}
      />

      <span
        className="
          pointer-events-none
          absolute
          inset-y-0
          -left-full
          w-1/2
          rotate-12
          bg-gradient-to-r
          from-transparent
          via-white/15
          to-transparent
          transition-all
          duration-700
          group-hover:left-[120%]
        "
      />

      <span className="relative z-10 flex items-center gap-3">
        <span>Contact Me</span>

        <span
          className="
            inline-flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            border border-white/15
            text-xs
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          ↗
        </span>
      </span>
    </a>
  );
}