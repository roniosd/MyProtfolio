import { FaMinusSquare, FaPlusSquare, FaRProject } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "/public/logo.png";

import { useState } from "react";
import { FcAbout, FcHome } from "react-icons/fc";
import { SiSkillshare } from "react-icons/si";
import { HashLink } from "react-router-hash-link";
import { Button } from "../UI/Button";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { to: "/", label: "Home", icon: <FcHome /> },
    { to: "/about", label: "About", icon: <FcAbout /> },
    { to: "/skill", label: "Skills", icon: <SiSkillshare /> },
    { to: "/portfolio", label: "Portfolio", icon: <FaRProject /> },
  ];

  return (
    <header id="top" className="px-3 text-white relative">
      <div className="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-slate-900 via-amber-100 to-slate-950"></div>

      <div className="flex gap-5 items-center">
        {/* Logo */}
        <div className="py-2">
          <NavLink to="/">
            <img className="size-20" src={logo} alt="Logo" />
          </NavLink>
        </div>

        {/* Normal Navbar for Desktop */}
        <div className="flex flex-grow justify-end lg:justify-between items-center gap-6">
          <nav className="hidden lg:block fill">
            <ul className="flex text-lg font-semibold">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink className="navlink" to={item.to}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Button label="Contact Me" to="/contact" />
        </div>

        {/* Floating Action Button and Mobile Menu */}
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 lg:hidden z-50">
          <div className="relative w-20 flex items-center justify-center h-20">
            {/* Menu Items */}
            {menuItems.map((item, index) => {
              const angle = (index * 360) / menuItems.length;
              const radians = (angle * Math.PI) / 180;
              const distance = 80; 

              const x = distance * Math.cos(radians);
              const y = distance * Math.sin(radians);

              return (
                <NavLink
                  title={item.label}
                  key={index}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={`w-12 h-12 text-3xl rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md absolute transition-all duration-500 ${
                    isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                  style={{
                    transform: isOpen
                      ? `translate(${x}px, ${-y}px) scale(1)`
                      : `translate(0, 0) scale(0)`,
                  }}
                >
                  <span> {item.icon}</span>
                </NavLink>
              );
            })}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center shadow-lg relative z-10 transition-all duration-300"
            >
              <div
                className={`grid grid-cols-2 gap-2 cursor-pointer ${
                  isOpen && "[direction:rtl]"
                }`}
              >
                <span className="size-2 border-3 rounded-[2px]"></span>
                <span className="size-2 border-3 rounded-[2px]"></span>
                <span className="size-2 border-3 rounded-[2px]"></span>
                {!isOpen ? (
                  <FaPlusSquare className="size-2 font-bold rounded-[2px]" />
                ) : (
                  <FaMinusSquare className="size-2 font-bold rounded-[2px]" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
