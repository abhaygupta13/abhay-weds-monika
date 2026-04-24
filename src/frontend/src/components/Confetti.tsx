import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  r: number;
  d: number;
  color: string;
  tilt: number;
  tiltSpeed: number;
  speed: number;
  opacity: number;
}

const COLORS = [
  "oklch(0.85 0.12 350)",
  "oklch(0.90 0.08 355)",
  "oklch(0.88 0.10 340)",
  "oklch(0.82 0.15 350)",
  "oklch(0.92 0.05 45)",
  "oklch(0.78 0.14 60)",
];

export default function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const petals: Petal[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 8 + 4,
      d: Math.random() * 80 + 20,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      tilt: Math.random() * 10 - 10,
      tiltSpeed: Math.random() * 0.07 + 0.05,
      speed: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
    }));

    let angle = 0;
    let frame = 0;
    let animId: number;
    const maxFrames = 240;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      angle += 0.01;
      frame++;

      for (const p of petals) {
        ctx.save();
        ctx.globalAlpha = p.opacity * Math.max(0, 1 - frame / maxFrames);
        ctx.translate(p.x + p.tilt, p.y);
        ctx.rotate((Math.PI / 180) * p.tilt);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r / 2, p.r, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.y += p.speed;
        p.tilt += p.tiltSpeed;
        p.x += Math.sin(angle + p.d) * 1.5;

        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
      }

      if (frame < maxFrames) {
        animId = requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
