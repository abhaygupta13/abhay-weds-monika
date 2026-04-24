import { Music, Pause } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  return (
    <button
      type="button"
      data-ocid="music.toggle_button"
      onClick={onToggle}
      aria-label={isPlaying ? "Pause music" : "Play music"}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-gold shadow-elevated flex items-center justify-center transition-smooth hover:scale-110 hover:shadow-soft"
    >
      <span
        className={`transition-smooth ${isPlaying ? "animate-pulse-soft" : ""}`}
      >
        {isPlaying ? (
          <Pause size={20} className="text-card fill-card" />
        ) : (
          <Music size={20} className="text-card" />
        )}
      </span>
    </button>
  );
}
