import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa6";
export const VerticalSocialLink = () => {
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
    <div className="flex gap-6 mt-10 text-2xl border py-2 rounded-[10px_20px_30px_35px] px-9 animate-borderPulse w-62">
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
  );
};
