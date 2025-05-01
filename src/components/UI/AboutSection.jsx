import aboutimg from "/about.png";
import { SectionTop } from "./SectionTop";
import { VerticalSocialLink } from "./VerticalSocitalLink";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen text-white px-6 py-22 flex items-center justify-center flex-col"
    >
      <SectionTop title="The Person Behind the Code" />

      <div className="lg:-mt-70 lg:max-w-7xl w-full flex flex-col lg:flex-row justify-evenly gap-22 items-center">
        {/* Left Content */}
        <div className="w-full lg:w-120"> 
          <p className="text-lg text-gray-400 mb-2">Hi There, I am</p>
          <h1 className="text-6xl font-bold mb-6">Roni Dev</h1>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I’m a passionate Full-Stack Web Developer based in Bangladesh,
            specializing in building robust frontend and backend applications. I
            love turning ideas into scalable, high-performance websites using
            modern technologies.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            With experience working across the full development stack, I deliver
            clean code, responsive interfaces, and efficient backend solutions.
            From database design to RESTful APIs and user interfaces, I bring
            everything together to launch functional digital products.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-6">
            <div>
              <h2 className="text-4xl font-bold">
                5<span className="text-red-500">+</span>
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Projects
                <br />
                Done
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">
                2<span className="text-red-500">+</span>
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Happy
                <br />
                Clients
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">
                1<span className="text-red-500">+</span>
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Years of
                <br />
                Experience
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image & Icons */}
        <div className="flex flex-col items-center">
          <div className="rounded-[2rem_5rem_2rem_5rem] animate-borderPulse border border-white/30 p-5">
            <img
              src={aboutimg}
              alt="Roni Dev"
              className="lg:w-80 h-auto rounded-[2rem_5rem_2rem_5rem] animate-pulse object-cover"
            />
          </div>
          <VerticalSocialLink />
        </div>
      </div>
    </section>
  );
};
