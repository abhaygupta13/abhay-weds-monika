import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WEDDING_DATE = new Date("2026-05-10T19:30:00+05:30");

function getTimeLeft(): TimeLeft {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function TimeUnit({
  value,
  label,
  pulse = false,
}: { value: number; label: string; pulse?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-card shadow-soft border border-border flex items-center justify-center ${pulse ? "animate-pulse-soft" : ""}`}
        data-ocid={`countdown.${label.toLowerCase()}`}
      >
        <span className="font-display text-3xl sm:text-4xl text-primary tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 text-xs tracking-[0.2em] uppercase font-body text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase font-body text-accent mb-3">
            Counting Down
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-2">
            The Big Day
          </h2>
          <p className="font-body text-muted-foreground text-sm mb-10">
            10 May 2026 • 7:30 PM IST • R.M. Krishna Palace
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap"
        >
          <TimeUnit value={timeLeft.days} label="Days" />
          <span className="font-display text-3xl text-accent/60 mb-6">:</span>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <span className="font-display text-3xl text-accent/60 mb-6">:</span>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <span className="font-display text-3xl text-accent/60 mb-6">:</span>
          <TimeUnit value={timeLeft.seconds} label="Seconds" pulse />
        </motion.div>
      </div>
    </section>
  );
}
