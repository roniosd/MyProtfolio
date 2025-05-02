import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "/softbin.jpeg";
import { NavLink } from "react-router-dom";
import { SectionTop } from "./SectionTop";
export default function InternshipSection() {
  return (
    <section className="py-22">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTop title='Internship Experience'/>

        <div className="bg-gray-900 lg:-mt-55 rounded-xl p-6 md:p-10 shadow-lg flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:shadow-xl transition-shadow duration-300">
          <img
            src={logo}
            alt="SoftBin Logo"
            className="w-28 md:w-36 h-auto object-contain"
          />

          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">
              Intern – Full Stack Developer
            </h3>
            <NavLink
              to="https://softbin.com.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              www.softbin.com.bd
            </NavLink>

            <p className="text-gray-300 text-justify mt-4 text-sm leading-relaxed">
              <strong>SOFTBIN</strong> is a digital communication company that
              specializes in cost-effective website management systems and
              online strategy development services. Their focus lies in
              delivering high-impact websites with customized functionality
              tailored to specific project requirements. The company empowers
              clients by enhancing their competitiveness, strengthening their
              brand, and achieving measurable results through smart features,
              value-driven output, and time efficiency.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg leading-relaxed text-justify">
              Established in response to market demand for affordable yet
              high-quality web solutions, SOFTBIN has over 6 years of industry
              experience. With continuous improvements and investments in their
              infrastructure, they provide packages and custom solutions that
              make enterprise-level platforms accessible to small and medium
              businesses. Their commitment spans across web design, development,
              eCommerce, SEO, and promotional services — backed by a seasoned
              team of designers, developers, and consultants.
            </p>

            <div className="flex gap-4 mt-5 justify-center md:justify-start">
              <NavLink
                to="https://www.linkedin.com/company/softbin-bd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 text-xl"
              >
                <FaLinkedin />
              </NavLink>
              <NavLink
                to="https://web.facebook.com/softbin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                <FaFacebook />
              </NavLink>
              <NavLink
                to="https://www.instagram.com/softbin.com.bd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 text-xl"
              >
                <FaInstagram />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
