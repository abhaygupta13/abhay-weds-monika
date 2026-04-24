import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Couple", href: "#couple" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Venues", href: "#venues" },
  { label: "RSVP", href: "#rsvp" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/90 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <button
          type="button"
          data-ocid="nav.logo"
          onClick={() => handleNavClick("#home")}
          className="font-display text-2xl text-primary transition-smooth hover:opacity-80"
        >
          A <span className="text-accent">♥</span> M
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                data-ocid={`nav.${link.label.toLowerCase()}_link`}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-body tracking-widest uppercase text-foreground/70 hover:text-primary transition-smooth"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          type="button"
          data-ocid="nav.mobile_menu_toggle"
          className="md:hidden p-2 text-foreground/70 hover:text-primary transition-smooth"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-card/95 backdrop-blur-md border-b border-border px-6 pb-6"
          >
            <ul className="flex flex-col gap-4 pt-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    data-ocid={`nav.mobile.${link.label.toLowerCase()}_link`}
                    onClick={() => handleNavClick(link.href)}
                    className="text-base font-body text-foreground/70 hover:text-primary transition-smooth w-full text-left py-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
