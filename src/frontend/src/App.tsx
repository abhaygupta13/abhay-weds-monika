/* eslint-disable jsx-a11y/media-has-caption */
import { useCallback, useEffect, useRef, useState } from "react";
import Confetti from "./components/Confetti";
import CountdownTimer from "./components/CountdownTimer";
import CoupleSection from "./components/CoupleSection";
import EventsTimeline from "./components/EventsTimeline";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import LoveStory from "./components/LoveStory";
import MusicPlayer from "./components/MusicPlayer";
import Navigation from "./components/Navigation";
import RsvpSection from "./components/RsvpSection";
import VenueSection from "./components/VenueSection";

export default function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const interactedRef = useRef(false);

  const tryPlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
    tryPlay();

    const handleInteraction = () => {
      if (!interactedRef.current) {
        interactedRef.current = true;
        if (audioRef.current?.paused) {
          tryPlay();
        }
      }
    };
    document.addEventListener("click", handleInteraction, { once: true });
    document.addEventListener("touchstart", handleInteraction, { once: true });
    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, [tryPlay]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* biome-ignore lint/a11y/useMediaCaption: Background music — instrumental, no captions needed */}
      <audio ref={audioRef} src="/assets/aaj_sajeya.mp3" loop preload="auto" />
      <Confetti />
      <Navigation />
      <HeroSection />
      <CoupleSection />
      <CountdownTimer />
      <EventsTimeline />
      <LoveStory />
      <GallerySection />
      <VenueSection />
      <RsvpSection />
      <Footer />
      <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />
    </div>
  );
}
