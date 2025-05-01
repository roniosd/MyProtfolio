import { SkillTree } from "./SkillTree";
import root from "/root.png";
import { SectionTop } from "./SectionTop";
export const SkillSection = () => {
  return (
    <section id="skill" className="py-20 overflow-hidden hidden lg:block">
      <SectionTop title="Seed to Skill" />
      <div className="container mx-auto -mt-120">
        
        <div className="relative">
          <div className="hidden lg:block">
            <SkillTree />
            <span className="border-b-4 animate-pulse border-amber-100 w-full lg:absolute bottom-29 left-0 right-0"></span>
            <img
              className="w-120 absolute animate-pulse -bottom-16 left-1/2 -translate-x-1/2"
              src={root}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
