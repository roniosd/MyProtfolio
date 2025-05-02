import { SkillSection } from "../components/UI/SkillSection";
import { Hero } from "../components/UI/Hero";
import Protfolio from "../components/UI/Protfolio";
import InternshipSection from "../components/UI/InternshipSection";
import video from "/aboutme.mp4";
import { useEffect, useRef } from "react";

export const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // স্পিড কমিয়ে ৫০% করে দিলাম
    }
  }, []);
  return (
    <>
      <Hero />
      <SkillSection />
      <Protfolio />
      <InternshipSection />
      <section className="min-h-screen flex items-center justify-center py-22 relative">
        <video
          className="rounded-4xl border-2 border-amber-100"
          ref={videoRef}
          src={video}
          autoPlay
          muted
          loop
          playsInline
        />
        <h1 className="absolute top-45 border-b-3 border-amber-400 pb-4 text-6xl text-white font-bold">
          Fun Fact
        </h1>
      </section>
    </>
  );
};
