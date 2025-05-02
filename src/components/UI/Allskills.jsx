/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import skils from "../../Api/Skils.json";
import { SectionTop } from "./SectionTop";
import { useState } from "react";

export const Allskills = () => {
  const [action, setAction] = useState("All");
  const filderData =
    action == "All" ? skils : skils.filter((data) => data.category == action);
  return (
    <section className="py-28 flex flex-col items-center justify-center text-white relative">
      <section className="lg:-mb-55 -z-10">
        <SectionTop title="My Digital DNA" />
      </section>
      <p className="text-gray-400 text-center max-w-xl text-sm sm:text-base">
        These are the tools and technologies I use to build fast, scalable, and
        elegant web applications.
      </p>

      {/* Skill Categories */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {["All", "Frontend", "Backend", "Tools", "Programming", "Database"].map(
          (cat) => (
            <button
              onClick={() => setAction(cat)}
              key={cat}
              className={`px-4 py-1 rounded-full  border border-white/10 text-sm tracking-wide cursor-pointer ${
                action == cat ? "bg-green-500/90" : "bg-white/10"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Skill Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-6xl gap-10 mt-12 px-6">
        {filderData.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            viewport={{ once: true }}
            className="group relative size-32 sm:size-36 bg-gradient-to-tr from-green-500 to-lime-400 rounded-[30px_10px_40px_5px] shadow-xl hover:scale-105 transition-transform duration-500 flex flex-col items-center justify-center"
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
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                whileInView={{ width: data.level + "%" }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
