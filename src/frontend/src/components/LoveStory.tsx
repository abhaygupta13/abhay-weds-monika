import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function LoveStory() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="love-story" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-body text-accent mb-3">
            A Love Story
          </p>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">
            How It Began
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-card rounded-3xl p-8 sm:p-12 shadow-soft border border-border"
        >
          {/* Decorative quote */}
          <span
            className="absolute top-6 left-8 font-display text-7xl text-primary/15 leading-none select-none"
            aria-hidden="true"
          >
            "
          </span>
          <span
            className="absolute bottom-4 right-8 font-display text-7xl text-primary/15 leading-none select-none"
            aria-hidden="true"
          >
            "
          </span>

          <div className="relative z-10">
            <p className="font-body text-foreground/80 leading-relaxed text-lg text-center mb-6">
              Two families, one dream — united by love, tradition, and the
              promise of a shared tomorrow. When Abhay and Monika's paths first
              crossed, their families sensed something extraordinary blossoming
              between them.
            </p>
            <p className="font-body text-foreground/70 leading-relaxed text-base text-center mb-6">
              Their bond grew quietly, rooted in mutual respect and shared
              values. Through laughter, festive gatherings, and quiet evenings,
              their love deepened into something enduring. Today, with joyful
              hearts and the blessings of their elders, they step forward
              together — into a lifetime of love and togetherness.
            </p>
            <div className="flex flex-col items-center gap-3 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent/60" />
                <span className="font-display text-2xl text-primary italic">
                  Abhay & Monika
                </span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent/60" />
              </div>
              <span className="text-xs font-body tracking-widest uppercase text-muted-foreground">
                #TheMohaySaga
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
