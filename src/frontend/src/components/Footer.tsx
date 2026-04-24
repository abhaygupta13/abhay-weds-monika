import { motion } from "motion/react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Logo */}
          <div className="font-display text-4xl text-primary mb-2">A ♥ M</div>
          <p className="font-display text-xl text-accent italic mb-6">
            #TheMohaySaga
          </p>

          <div className="w-16 h-px bg-accent/40 mx-auto mb-6" />

          <p className="font-body text-foreground/80 text-lg leading-relaxed mb-2">
            Thank you for being a part of our special day.
          </p>
          <p className="font-body text-muted-foreground text-sm mb-6">
            We look forward to celebrating with you —{" "}
            <strong className="text-foreground/70">10 May 2026</strong>, Joura,
            Morena M.P.
          </p>

          {/* Floral divider */}
          <div
            className="flex items-center justify-center gap-3 mb-8 text-primary/40 text-sm"
            aria-hidden="true"
          >
            <span>❀</span>
            <span className="w-16 h-px bg-primary/20" />
            <span>♥</span>
            <span className="w-16 h-px bg-primary/20" />
            <span>❀</span>
          </div>

          <p className="text-xs font-body text-muted-foreground/60">
            © {year}. Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-smooth underline-offset-2 hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
