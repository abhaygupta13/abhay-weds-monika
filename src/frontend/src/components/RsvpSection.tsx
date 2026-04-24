import { Heart, Phone } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const CONTACTS = [
  { name: "Dinesh Gupta", phone: "8269123613", role: "Father of the Groom" },
  { name: "Shivam Gupta", phone: "9981079151", role: "Groom's family" },
];

export default function RsvpSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="rsvp" className="py-24 bg-secondary/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-body text-accent mb-3">
            Kindly Respond
          </p>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground mb-4">
            RSVP
          </h2>
          <p className="font-body text-foreground/70 text-lg leading-relaxed">
            Your presence would make our celebration complete. We would love to
            have you with us as we begin our journey together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
          {CONTACTS.map((contact, i) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              data-ocid={`rsvp.contact.${i + 1}`}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-elevated transition-smooth"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Heart size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-1">
                {contact.name}
              </h3>
              <p className="text-xs font-body text-muted-foreground mb-3">
                {contact.role}
              </p>
              <a
                href={`tel:${contact.phone}`}
                data-ocid={`rsvp.phone_link.${i + 1}`}
                className="flex items-center justify-center gap-2 gradient-gold text-card-foreground rounded-full py-2 px-5 text-sm font-body tracking-wide shadow-soft hover:shadow-elevated transition-smooth hover:scale-105 mx-auto"
              >
                <Phone size={13} />
                {contact.phone}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 font-body text-sm text-muted-foreground"
        >
          For any enquiries, please feel free to reach out to us directly.
        </motion.p>
      </div>
    </section>
  );
}
