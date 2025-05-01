import skils from "../../Api/Skils.json";
import { SectionTop } from "./SectionTop";
export const Allskills = () => {
  return (
    <section className="py-28 flex flex-col items-center justify-center text-white">
      <SectionTop title="My Digital DNA" />
      <p className="text-gray-400 lg:-mt-55 text-center max-w-xl text-sm sm:text-base">
        These are the tools and technologies I use to build fast, scalable, and
        elegant web applications.
      </p>

      {/* Skill Categories */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {["Frontend", "Backend", "Tools", "DevOps"].map((cat, i) => (
          <span
            key={i}
            className="px-4 py-1 rounded-full bg-white/10 border border-white/10 text-sm tracking-wide"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Skill Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-6xl gap-10 mt-12 px-6">
        {skils.map((data, index) => (
          <div
            key={index}
            className="group relative size-32 sm:size-36 bg-gradient-to-tr from-green-500 to-lime-400 rounded-[30px_10px_40px_5px] shadow-xl hover:scale-105 transition-all duration-500 flex flex-col items-center justify-center"
          >
            <img
              className="size-14 sm:size-16 transition-transform duration-500 group-hover:scale-110"
              src={data.logo}
              alt={data.skill}
            />
            <p className="absolute -top-6 text-sm sm:text-base font-medium opacity-0 group-hover:opacity-90 group-hover:-translate-y-1 transition-all duration-300">
              {data.skill}
            </p>

            {/* Skill Level Indicator */}
            <div className="absolute bottom-2 left-15 -translate-x-1/2 w-4/5 h-2 bg-white rounded-full overflow-hidden">
              <div
                className="h-full bg-red-600"
                style={{ width: data.level + "%" }}
              />
            </div>

          
          </div>
        ))}
      </div>
    </section>
  );
};
