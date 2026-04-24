import { Calendar, Clock, MapPin } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Event {
  date: string;
  day: string;
  name: string;
  time: string;
  venue: string;
  mapUrl: string;
  icon: string;
}

const EVENTS: Event[] = [
  {
    date: "9 May 2026",
    day: "Saturday",
    name: "Haldi",
    time: "10:00 AM",
    venue: "Agarwal Dharamshala, Joura Dist. Morena M.P.",
    mapUrl: "https://maps.app.goo.gl/pynmDrgmLU2bihpf9?g_st=iw",
    icon: "🌼",
  },
  {
    date: "9 May 2026",
    day: "Saturday",
    name: "Lagan",
    time: "5:00 PM",
    venue: "Agarwal Dharamshala, Joura Dist. Morena M.P.",
    mapUrl: "https://maps.app.goo.gl/pynmDrgmLU2bihpf9?g_st=iw",
    icon: "🪔",
  },
  {
    date: "9 May 2026",
    day: "Saturday",
    name: "Ring Ceremony & Sangeet",
    time: "7:00 PM",
    venue: "Agarwal Dharamshala, Joura Dist. Morena M.P.",
    mapUrl: "https://maps.app.goo.gl/pynmDrgmLU2bihpf9?g_st=iw",
    icon: "💍",
  },
  {
    date: "10 May 2026",
    day: "Sunday",
    name: "Bhaat",
    time: "10:00 AM",
    venue: "Agarwal Dharamshala, Joura Dist. Morena M.P.",
    mapUrl: "https://maps.app.goo.gl/pynmDrgmLU2bihpf9?g_st=iw",
    icon: "🌸",
  },
  {
    date: "10 May 2026",
    day: "Sunday",
    name: "Wedding",
    time: "7:30 PM onwards",
    venue: "R.M. Krishna Palace, Joura Dist. Morena M.P.",
    mapUrl: "https://maps.app.goo.gl/4kZ69Jgs7TUNDFTt7?g_st=iw",
    icon: "👑",
  },
];

function EventCard({ event, index }: { event: Event; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <div className="flex items-center gap-4 md:gap-8">
      {/* Left side content (desktop) */}
      <div className={`flex-1 hidden md:flex ${isLeft ? "justify-end" : ""}`}>
        {isLeft && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            data-ocid={`events.card.${index + 1}`}
            className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-elevated hover:scale-[1.02] transition-smooth max-w-sm w-full text-right"
          >
            <EventContent event={event} align="right" />
          </motion.div>
        )}
      </div>

      {/* Center dot */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-xl shadow-soft z-10">
          {event.icon}
        </div>
      </div>

      {/* Right side content */}
      <div
        className={`flex-1 hidden md:flex ${!isLeft ? "justify-start" : ""}`}
      >
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            data-ocid={`events.card.${index + 1}`}
            className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-elevated hover:scale-[1.02] transition-smooth max-w-sm w-full"
          >
            <EventContent event={event} align="left" />
          </motion.div>
        )}
      </div>

      {/* Mobile: always show */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex-1 md:hidden bg-card rounded-2xl p-5 shadow-soft border border-border"
        data-ocid={`events.mobile.card.${index + 1}`}
      >
        <EventContent event={event} align="left" />
      </motion.div>
    </div>
  );
}

function EventContent({
  event,
  align,
}: { event: Event; align: "left" | "right" }) {
  const cls = align === "right" ? "text-right items-end" : "";
  return (
    <div className={`flex flex-col ${cls}`}>
      <div
        className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1"
        style={{
          justifyContent: align === "right" ? "flex-end" : "flex-start",
        }}
      >
        <Calendar size={12} />
        <span className="font-body">
          {event.day}, {event.date}
        </span>
      </div>
      <h3 className="font-display text-2xl text-foreground mb-3">
        {event.name}
      </h3>
      <div
        className="flex items-center gap-1.5 text-sm text-primary mb-1.5"
        style={{
          justifyContent: align === "right" ? "flex-end" : "flex-start",
        }}
      >
        <Clock size={13} />
        <span className="font-body font-medium">{event.time}</span>
      </div>
      <div
        className="flex items-start gap-1.5 text-xs text-muted-foreground mb-3"
        style={{
          justifyContent: align === "right" ? "flex-end" : "flex-start",
        }}
      >
        <MapPin size={12} className="mt-0.5 shrink-0" />
        <span className="font-body leading-relaxed">{event.venue}</span>
      </div>
      <a
        href={event.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs tracking-wider uppercase font-body text-accent hover:text-accent/80 transition-smooth underline-offset-2 hover:underline"
        style={{ alignSelf: align === "right" ? "flex-end" : "flex-start" }}
      >
        View on Map ↗
      </a>
    </div>
  );
}

export default function EventsTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="events" className="py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-body text-accent mb-3">
            Celebrations
          </p>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">
            Events Timeline
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-accent/50 to-primary/30 -translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {EVENTS.map((event, i) => (
              <EventCard key={`${event.name}-${i}`} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
