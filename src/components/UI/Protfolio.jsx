/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SectionTop } from "./SectionTop";
import { ProjectCard } from "./ProjectCard";
import projects from "../../Api/projects.json";
import { Button } from "./Button";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Portfolio() {
  return (
    <motion.section
      id="portfolio"
      className="container mx-auto py-28 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <SectionTop title="From Vision to Version" />

      {/* Navigation Buttons */}
      <motion.div
        className="flex justify-end gap-4 lg:-mt-70"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <button className="custom-prev size-[52px] border border-[#6C6E7933] rounded-full flex items-center justify-center text-[#22C55E] hover:bg-green hover:text-white">
          <FaArrowLeft />
        </button>
        <button className="custom-next size-[52px] border border-[#6C6E7933] rounded-full flex items-center justify-center text-[#22C55E] hover:bg-green hover:text-white">
          <FaArrowRight />
        </button>
      </motion.div>

      {/* Swiper */}
      <motion.div
        className="py-5 px-3 border-e border-l border-amber-300"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
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
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* More Projects Button */}
      <motion.div
        className="flex justify-end mt-6"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Button label="More Project" to="/portfolio" />
      </motion.div>
    </motion.section>
  );
}
