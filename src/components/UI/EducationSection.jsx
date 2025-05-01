import { SectionTop } from "./SectionTop";

export function EducationSection() {
  return (
    <section className="py-20">
      <div className="lg:max-w-5xl mx-auto px-6">
        <SectionTop title="My Learning Curve" />

        <div className="relative lg:-mt-55 border-l-4 border-green-500 ml-4 space-y-10">
          {/* Diploma */}
          <div className="ml-6 relative">
            <div className="absolute -left-[22px] top-1 w-5 h-5 bg-green-500 rounded-full border-4 border-gray-900"></div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Diploma in Computer Science & Technology
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Habiganj Polytechnic Institute &middot; 2021 - 2025
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Currently pursuing my final year in Computer Science & Technology.
              This 4-year program helped me build a strong foundation in
              software development, databases, networking, and real-world
              project collaboration.
            </p>
          </div>

          {/* SSC */}
          <div className="ml-6 relative">
            <div className="absolute -left-[22px] top-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"></div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Secondary School Certificate (SSC)
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              2021 &middot; Science Group
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              After completing SSC in Science in 2021, I directly enrolled into
              the Diploma program to pursue my passion for technology and
              software engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
