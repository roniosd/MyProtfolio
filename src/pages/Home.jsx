import { SkillSection } from "../components/UI/SkillSection";
import { Hero } from "../components/UI/Hero";
import Protfolio from "../components/UI/Protfolio";
import InternshipSection from "../components/UI/InternshipSection";
import { Allskills } from "../components/UI/Allskills";

export const Home = () => {
  return (
    <>
      <Hero />
      <SkillSection />
      <Allskills />

      <section className="px-2 lg:pl-0">
        <Protfolio />
      </section>
      <InternshipSection />
    </>
  );
};
