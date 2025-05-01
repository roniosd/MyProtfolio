import { useEffect, useState } from "react";
import { BiPaperPlane } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Footer = () => {
  //! Show or Hide arrow..
  const [height, setHeight] = useState();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setHeight(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <footer className="text-white py-12 relative mt-10">
      <div className="h-15 w-50 lg:w-100 absolute bg-black left-1/2 -top-[10px] lg:-top-[11px] border-b-0 -translate-x-1/2  border border-amber-400 rounded-[110px_100px_0px_0px] shadow-2xs" />
      <h1 className="text-4xl lg:text-7xl text-white py-10 text-center border-amber-400 border-b hover:border-amber-600 border-t mb-10 z-100 bg-black">
        <NavLink to="/contact">
          Let’s <span className="text-amber-700">Connect</span> the{" "}
          <span className="text-amber-700">Dots</span>
        </NavLink>
      </h1>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo / Name */}
          <div>
            <h2 className="text-2xl font-bold text-orange-500">Roni Dev</h2>
            <p className="text-sm text-gray-400 mt-2">Full Stack Developer</p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-5 items-center justify-center">
            <HashLink
              smooth
              to="/"
              className="hover:text-orange-500 transition"
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to="/about"
              className="hover:text-orange-500 transition"
            >
              About
            </HashLink>
            <HashLink
              smooth
              to="/portfolio"
              className="hover:text-orange-500 transition"
            >
              Portfolio
            </HashLink>
            <HashLink
              smooth
              to="/skill"
              className="hover:text-orange-500 transition"
            >
              Skills
            </HashLink>
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-6 text-xl">
            <NavLink
              target="_blank"
              to="https://github.com/roniosd/"
              className="hover:text-orange-500 transition"
            >
              <FaGithub />
            </NavLink>
            <NavLink
              target="_blank"
              to="https://www.linkedin.com/in/roni-dev-218baa255/"
              className="hover:text-orange-500 transition"
            >
              <FaLinkedin />
            </NavLink>
            <NavLink
              target="_blank"
              to="mailto:ronidev39@gmail.com"
              className="hover:text-orange-500 transition"
            >
              <FaEnvelope />
            </NavLink>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Roni Dev. All rights reserved.
        </div>
      </div>

      {/* Scroll to Top */}
      <HashLink
        smooth
        to="#top"
        className={`animate-bounce fixed bottom-4 right-4 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg shadow-xl transition ${
          height > 900 ? "flex" : "hidden"
        }`}
        aria-label="Scroll to top"
      >
        <BiPaperPlane className="text-3xl" />
      </HashLink>
    </footer>
  );
};
