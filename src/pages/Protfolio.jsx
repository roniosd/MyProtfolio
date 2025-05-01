import { LuExternalLink } from "react-icons/lu";
import projects from "../Api/projects.json";
import { FaGithub } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { SectionTop } from "../components/UI/SectionTop";
export const Protfolio = () => {
  return (
    <section className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTop title="Deployed Dreams" />

        <p className="text-center text-gray-400 mb-12 lg:-mt-55">
          A collection of web applications I’ve crafted with passion and
          precision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-500 group"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1 text-green-400 group-hover:underline">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-1">{project.type}</p>
                <p className="text-sm text-gray-300 mb-3">
                  {project.description}
                </p>
                <p className="text-xs text-green-200 italic mb-3">
                  {project.tech}
                </p>
                <div className="flex gap-4">
                  {project.live && (
                    <NavLink
                      to={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex gap-1 items-center text-green-400 hover:underline"
                    >
                      <LuExternalLink /> Live
                    </NavLink>
                  )}
                  {project.github && (
                    <NavLink
                      to={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex gap-1 items-center text-green-400 hover:underline"
                    >
                      <FaGithub /> GitHub
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
