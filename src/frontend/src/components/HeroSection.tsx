import { motion } from "motion/react";

export default function HeroSection() {
  const scrollToNext = () => {
    document.querySelector("#couple")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/wedding-hero-bg.dim_1920x1080.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/70" />

      {/* Decorative floral SVGs */}
      <svg
        className="absolute top-10 left-10 w-32 h-32 opacity-20 text-primary animate-float"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="60" cy="60" r="20" fill="currentColor" opacity="0.3" />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <ellipse
            key={angle}
            cx={60 + 32 * Math.cos((angle * Math.PI) / 180)}
            cy={60 + 32 * Math.sin((angle * Math.PI) / 180)}
            rx="12"
            ry="20"
            transform={`rotate(${angle} ${60 + 32 * Math.cos((angle * Math.PI) / 180)} ${60 + 32 * Math.sin((angle * Math.PI) / 180)})`}
            fill="currentColor"
            opacity="0.5"
          />
        ))}
      </svg>
      <svg
        className="absolute bottom-20 right-10 w-24 h-24 opacity-15 text-accent animate-float"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
        style={{ animationDelay: "1.5s" }}
      >
        <circle cx="60" cy="60" r="20" fill="currentColor" opacity="0.3" />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <ellipse
            key={angle}
            cx={60 + 28 * Math.cos((angle * Math.PI) / 180)}
            cy={60 + 28 * Math.sin((angle * Math.PI) / 180)}
            rx="10"
            ry="18"
            transform={`rotate(${angle} ${60 + 28 * Math.cos((angle * Math.PI) / 180)} ${60 + 28 * Math.sin((angle * Math.PI) / 180)})`}
            fill="currentColor"
            opacity="0.5"
          />
        ))}
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm tracking-[0.3em] uppercase font-body text-primary mb-4"
        >
          Together with their families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl text-foreground leading-tight mb-4"
        >
          Abhay Weds Monika
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-display text-2xl sm:text-3xl text-accent italic mb-3"
        >
          #TheMohaySaga
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-body text-foreground/70 text-base sm:text-lg tracking-wide mb-8"
        >
          invite you to celebrate their wedding
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <div className="flex items-center gap-2 text-foreground/60 font-body text-sm tracking-wider">
            <span className="w-8 h-px bg-accent/60" />
            <span>10 May 2026 • Joura, Morena M.P.</span>
            <span className="w-8 h-px bg-accent/60" />
          </div>
        </motion.div>

        <motion.button
          data-ocid="hero.scroll_button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          onClick={scrollToNext}
          className="gradient-gold text-card-foreground px-8 py-3 rounded-full font-body text-sm tracking-widest uppercase shadow-elevated hover:shadow-soft transition-smooth hover:scale-105"
        >
          View Invitation
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent animate-pulse-soft" />
      </motion.div>
    </section>
  );
}
