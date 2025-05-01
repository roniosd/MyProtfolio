import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SectionTop } from "./SectionTop";
import { ProjectCard } from "./ProjectCard";
import projects from "../../Api/projects.json";
import { Button } from "./Button";

export default function Portfolio() {
  return (
    <section id="portfolio" className="container mx-auto py-28 px-4">
      <SectionTop title="From Vision to Version" />
      <div className="flex justify-end gap-4 lg:-mt-70">
        <button className="custom-prev size-[52px] border border-[#6C6E7933] rounded-full flex items-center justify-center text-[#22C55E] hover:bg-green hover:text-white">
          <FaArrowLeft />
        </button>
        <button className="custom-next size-[52px] border border-[#6C6E7933] rounded-full flex items-center justify-center text-[#22C55E] hover:bg-green hover:text-white">
          <FaArrowRight />
        </button>
      </div>

      <div className="py-5 px-3 border-e border-l border-amber-300 ">
        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          modules={[Navigation]}
          className="mySwiper border-e border-l border-amber-400"
          slidesPerView={1}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <ProjectCard project={project} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
     <div className="flex justify-end"> <Button label="More Project" to="/portfolio" /></div>
    </section>
  );
}
