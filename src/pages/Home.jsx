import { SkillSection } from "../components/UI/SkillSection";
import { Hero } from "../components/UI/Hero";
import Protfolio from "../components/UI/Protfolio";
import InternshipSection from "../components/UI/InternshipSection";

export const Home = () => {
  return (
    <>
      <Hero />
      <SkillSection />
      <Protfolio />
      <InternshipSection />
    </>
  );
};
