import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Person {
  name: string;
  relation: string;
  family: string;
  parents: string;
  side: "groom" | "bride";
}

const PEOPLE: Person[] = [
  {
    name: "Abhay",
    relation: "Groom",
    side: "groom",
    family: "Grandson of Late Durgaprasad Gupta & Smt. Shantibai Gupta",
    parents: "Son of Mr. Dinesh Gupta & Mrs. Uma Gupta",
  },
  {
    name: "Monika",
    relation: "Bride",
    side: "bride",
    family: "Granddaughter of Late Kedar Lal Agarwal & Smt. Kiran Devi Agarwal",
    parents: "Daughter of Mr. Rajesh Agarwal & Mrs. Ekta Agarwal",
  },
];

function PersonCard({ person, index }: { person: Person; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      data-ocid={`couple.card.${index + 1}`}
      className="flex flex-col items-center text-center bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-elevated hover:scale-[1.02] transition-smooth"
    >
      {/* Avatar */}
      <div className="relative mb-6">
        <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-accent/40 ring-offset-2 ring-offset-card shadow-elevated">
          <img
            src="/assets/generated/couple-placeholder.dim_400x400.jpg"
            alt={person.name}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full gradient-gold flex items-center justify-center text-card text-xs font-body font-semibold shadow-soft">
          {person.side === "groom" ? "♂" : "♀"}
        </span>
      </div>

      <p className="text-xs tracking-[0.25em] uppercase font-body text-primary/70 mb-1">
        {person.relation}
      </p>
      <h3 className="font-display text-4xl text-foreground mb-4">
        {person.name}
      </h3>

      <div className="w-12 h-px bg-accent/60 mb-4" />

      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-2">
        {person.family}
      </p>
      <p className="font-body text-sm text-foreground/80 leading-relaxed">
        {person.parents}
      </p>
    </motion.div>
  );
}

export default function CoupleSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="couple" className="py-24 bg-secondary/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-body text-accent mb-3">
            The Happy Couple
          </p>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">
            Meet the Bride & Groom
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {PEOPLE.map((person, i) => (
            <PersonCard key={person.name} person={person} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <span className="font-display text-3xl text-primary italic">
            Together forever ♥
          </span>
        </motion.div>
      </div>
    </section>
  );
}
