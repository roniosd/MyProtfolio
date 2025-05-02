import img from "/profile.png";
import curve from "/curve.png";
import curve2 from "/curve2.png";
import { SocialLink } from "./SocialLink";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { IoMdDownload } from "react-icons/io";

const TypewriterEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};

export const Hero = () => {
  const texts = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
  ];
  const colors = [
    "text-red-500",
    "text-blue-400",
    "text-green-400",
    "text-yellow-300",
    "text-purple-400",
    "text-pink-400",
    "text-teal-400",
    "text-orange-400",
    "text-lime-300",
    "text-cyan-300",
    "text-fuchsia-400",
    "text-emerald-400",
    "text-rose-400",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("down");
  const [color, setColor] = useState(colors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(Math.random() > 0.5 ? "down" : "up");
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      setColor(colors[Math.floor(Math.random() * colors.length)]); // Random color
    }, 2500);

    return () => clearInterval(interval);
  });
  return (
    <section
      id="home"
      className="flex hero flex-col lg:flex-row pb-20 relative"
    >
      <SocialLink />

      <div className="flex flex-col lg:flex-row py-12 w-full md:px-9 px-4 lg:px-22 justify-between md:items-center text-white gap-10">
        <div className="relative lg:w-200">
          <h1 className="text-5xl lg:text-8xl font-bold lg:leading-30 mb-3">
            Building Tomorrow's Web
          </h1>
          <h1 className="text-4xl font-bold">
            I’m <span className="text-blue-400">Roni Dev</span>, a <br />
            <div className="h-10 overflow-hidden relative w-100 flex items-center justify-start text-amber-400">
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                  "Backend Developer",
                  1000,
                  "Web Developer",
                  1000,
                ]}
                wrapper="span"
                speed={10}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className="text-xl text-gray-400 opacity-80 mt-1">
            I turn innovative ideas into sleek, high-performing websites,
            blending modern technologies with creative design for impactful
            digital experiences.
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="Cv/Roni_Dev_CV.pdf"
              download
              class="bg-[#225bc3] hover:bg-[#2564da] hover:scale-[1.065] hover:translate-y-[-7px] hover:rounded-[23px] hover:rounded-bl-none hover:rounded-br-none px-6 py-2 rounded-2xl rounded-bl-lg rounded-br-lg transition-all text-center text-[#d8e5f9] hover:text-[#a8c1f0] font-medium cursor-pointer"
            >
              Download Resume
            </a>
            <a
              href="Cv/Roni_Dev_CV.pdf"
              target="_blank"
              class="bg-[#5350c6] hover:bg-secondary-600 hover:scale-[1.065] hover:translate-y-[7px] hover:rounded-[23px] hover:rounded-tl-none hover:rounded-tr-none px-6 py-2 rounded-2xl rounded-tl-lg rounded-tr-lg transition-all text-center text-[#d8e5f9] hover:text-[#b3aaee] font-medium cursor-pointer"
            >
              View Resume
            </a>
          </div>
        </div>

        <div
          className="group bg-slate-900 border border-amber-200 
    rounded-[50px_0px_50px_0px] p-3 md:w-110 lg:w-140 h-120 lg:h-160 relative
    transition-all duration-700 ease-in-out
    hover:scale-[1.05] hover:animate-borderPulse  hover:shadow-[0_0_25px_rgba(251,191,36,0.4)]
    before:content-[''] before:absolute before:inset-0 before:rounded-[50px_0px_50px_0px]
    before:border-[2px] before:border-transparent before:transition-all before:duration-1000
    before:hover:border-amber-400 before:hover:shadow-[inset_0_0_60px_rgba(253,230,138,0.1)]"
        >
          <img className="h-full rounded-4xl" src={img} alt="Roni Dev" />

          {/* Decorative Curves */}
          <img
            className="absolute bottom-0 w-10 h-65 left-3"
            src={curve}
            alt=""
          />
          <img
            className="absolute top-0 right-3 w-10 h-65"
            src={curve2}
            alt=""
          />

          {/* Vertical Name */}
          <h1 className="absolute rotate-90 top-23 font-semibold -right-6 text-2xl text-white group-hover:text-amber-400 transition-all duration-500">
            Roni Dev
          </h1>

          {/* Animated Text Slider */}
          <div className="absolute -rotate-90 bottom-32 font-semibold -left-24">
            <div className="h-10 overflow-hidden relative w-60 flex items-center justify-start">
              {texts.map((text, index) => (
                <span
                  key={index}
                  className={`text-xl absolute transition-all duration-700 ease-in-out w-full
            ${
              index === currentIndex
                ? `opacity-100 translate-y-0 ${color}`
                : direction === "down"
                ? "-translate-y-full opacity-0"
                : "translate-y-full opacity-0"
            }`}
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
