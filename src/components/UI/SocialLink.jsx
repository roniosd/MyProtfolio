import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
export const SocialLink = () => {
  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: "https://web.facebook.com/ronidev.roni.5",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/ronidev.roni.5/",
      color: "hover:text-pink-400",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/roni-dev-218baa255/",
      color: "hover:text-blue-600",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/roniosd/",
      color: "hover:text-green-400",
    },
  ];
  return (
    <div className="hidden lg:block h-180 px-13 relative">
      <div
        className="absolute top-1/2 left-6 -translate-y-1/2 
    bg-gradient-to-b from-gray-900 to-gray-800 
    border border-gray-500 
    rounded-[20px_5px_20px_5px] 
    p-4 flex flex-col items-center gap-6 
    shadow-xl overflow-hidden 
    animate-borderPulse"
      >
        {socials.map((social, index) => (
          <NavLink
            title={social.name}
            key={index}
            to={social.link}
            target="_blank"
            className={`text-white hover:text-blue-400 py-3 text-2xl transition-all duration-300 relative group ${social.color}`}
          >
            {social.icon}
          </NavLink>
        ))}
      </div>

      <div className="absolute -right-[1px] -top-20 w-[1px] h-full bg-gradient-to-b from-slate-900 via-amber-100 to-slate-950"></div>
    </div>
  );
};
