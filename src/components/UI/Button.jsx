import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const Button = ({ label, to }) => {
  return (
    <NavLink
      to={to}
      className="relative inline-flex text-lg items-center gap-3 border border-amber-300 text-amber-300 py-1 pl-4 pr-2 rounded-full transition duration-300 hover:bg-amber-300 hover:text-white group"
    >
      {label}
      <span className="flex items-center justify-center w-6 h-6 bg-amber-300 text-black rounded-full transform transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-90 group-hover:bg-white">
        <FaArrowRight className="text-xs" />
      </span>
    </NavLink>
  );
};
