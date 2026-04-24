import { X } from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState } from "react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    src: "https://picsum.photos/seed/wedding1/600/450",
    alt: "Wedding ceremony moment",
  },
  {
    id: "g2",
    src: "https://picsum.photos/seed/haldi2/600/450",
    alt: "Haldi celebration",
  },
  {
    id: "g3",
    src: "https://picsum.photos/seed/sangeet3/600/450",
    alt: "Sangeet night",
  },
  {
    id: "g4",
    src: "https://picsum.photos/seed/couple4/600/450",
    alt: "Couple portrait",
  },
  {
    id: "g5",
    src: "https://picsum.photos/seed/flowers5/600/450",
    alt: "Floral decorations",
  },
  {
    id: "g6",
    src: "https://picsum.photos/seed/ring6/600/450",
    alt: "Ring ceremony",
  },
  {
    id: "g7",
    src: "https://picsum.photos/seed/dance7/600/450",
    alt: "Dance performance",
  },
  {
    id: "g8",
    src: "https://picsum.photos/seed/mehndi8/600/450",
    alt: "Mehndi design",
  },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const activImg = GALLERY_IMAGES.find((img) => img.id === lightbox);

  return (
    <section id="gallery" className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-body text-accent mb-3">
            Precious Moments
          </p>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">
            Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.button
              key={img.id}
              type="button"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              data-ocid={`gallery.item.${i + 1}`}
              onClick={() => setLightbox(img.id)}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-soft hover:shadow-elevated transition-smooth"
              aria-label={`View ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-card text-xs font-body tracking-wider uppercase bg-foreground/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  View
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && activImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              data-ocid="gallery.lightbox.dialog"
              className="fixed inset-0 z-[200] flex items-center justify-center bg-foreground/80 backdrop-blur-sm px-4"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-3xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={activImg.src.replace("600/450", "900/675")}
                  alt={activImg.alt}
                  className="w-full rounded-2xl shadow-elevated"
                />
                <button
                  type="button"
                  data-ocid="gallery.lightbox.close_button"
                  onClick={() => setLightbox(null)}
                  className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-card shadow-elevated flex items-center justify-center hover:bg-muted transition-smooth"
                  aria-label="Close lightbox"
                >
                  <X size={16} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
