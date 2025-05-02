import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
export const ProjectCard = ({ project, index }) => {
  return (
    <div className=" flex flex-col md:flex-row items-center gap-26 text-white px-6 py-10">
      {/* Left Content */}
      <div className="max-w-xl space-y-4 ">
        <h1 className="text-8xl font-black font-noto text-gray-900 text-outline">
          {index < 9 ? `0 ${index + 1}` : index + 1}
        </h1>

        <h2 className="text-4xl font-bold">{project.title}</h2>
        <h3 className="text-xl text-gray-400">{project.type}</h3>
        <p className="text-gray-300">{project.description}</p>
        <p className="text-green-400 font-mono">{project.tech.join(', ')}</p>

        <div className="flex gap-4 pt-4 ">
          <NavLink to={project.github} target="_blank">
            <div
              className={`relative group p-3 rounded-full  hover:bg-green-500 transition duration-300 shadow-lg ${
                !project.github ? "bg-gray-400 hover:bg-red-600" : "bg-gray-800"
              }`}
            >
              <FaGithub size={20} />
              <span className="absolute -bottom-10 w-40 bg-slate-600 rounded-full px-3 opacity-0 group-hover:opacity-100">
                {!project.github ? "Privete" : "Get Github Code"}
              </span>
            </div>
          </NavLink>
          <NavLink to={project.live} target="_blank">
            <div className="group relative p-3 rounded-full bg-gray-800 hover:bg-green-500 transition duration-300 shadow-lg">
              <LuExternalLink size={20} />
              <span className="absolute -bottom-10 w-21 bg-slate-600 rounded-full px-3 opacity-0 group-hover:opacity-100">
                Go Live
              </span>
            </div>
          </NavLink>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
        <img
          src={project.image}
          alt={project.title}
          className="w-full lg:w-190 lg:h-120 rounded-xl"
        />
      </div>
    </div>
  );
};
