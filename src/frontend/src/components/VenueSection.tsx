import { ExternalLink, MapPin } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Venue {
  name: string;
  address: string;
  events: string[];
  mapUrl: string;
  icon: string;
}

const VENUES: Venue[] = [
  {
    name: "Agarwal Dharamshala",
    address: "Joura, Dist. Morena, Madhya Pradesh",
    events: [
      "Haldi (9 May, 10 AM)",
      "Lagan (9 May, 5 PM)",
      "Ring Ceremony & Sangeet (9 May, 7 PM)",
      "Bhaat (10 May, 10 AM)",
    ],
    mapUrl: "https://maps.app.goo.gl/pynmDrgmLU2bihpf9?g_st=iw",
    icon: "🌸",
  },
  {
    name: "R.M. Krishna Palace",
    address: "Joura, Dist. Morena, Madhya Pradesh",
    events: ["Wedding Ceremony (10 May, 7:30 PM onwards)"],
    mapUrl: "https://maps.app.goo.gl/4kZ69Jgs7TUNDFTt7?g_st=iw",
    icon: "👑",
  },
];

export default function VenueSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="venues" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-body text-accent mb-3">
            Where to Find Us
          </p>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">
            Venues
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VENUES.map((venue, i) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              data-ocid={`venues.card.${i + 1}`}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-elevated hover:scale-[1.02] transition-smooth flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl mb-5">
                {venue.icon}
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">
                {venue.name}
              </h3>
              <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
                <MapPin size={14} className="mt-0.5 shrink-0 text-accent" />
                <span className="font-body">{venue.address}</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-body tracking-wider uppercase text-accent/80 mb-2">
                  Events Here
                </p>
                <ul className="flex flex-col gap-1.5">
                  {venue.events.map((ev) => (
                    <li
                      key={ev}
                      className="text-sm font-body text-foreground/70 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                      {ev}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`venues.map_button.${i + 1}`}
                className="mt-6 flex items-center justify-center gap-2 gradient-gold text-card-foreground rounded-full py-2.5 px-6 text-sm font-body tracking-wider shadow-soft hover:shadow-elevated transition-smooth hover:scale-105"
              >
                <MapPin size={14} />
                View on Google Maps
                <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
