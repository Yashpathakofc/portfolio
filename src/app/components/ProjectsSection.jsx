"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "CraveKart.com",
    description: "Full Stack Food delivery Application",
    image: "/images/projects/20.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "WeatherWatch",
    description: "Real time weather and news updates",
    image: "/images/projects/12.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Yashpathakofc/WeatherWatch",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "PricePulse",
    description: "E-commerce webscrapping price tracker",
    image: "/images/projects/14.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Yashpathakofc/Price_pulse",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "EcoDrone",
    description: "Smart Agriculture monitoring system using AI-IOT and Drone Technology",
    image: "/images/projects/15.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Yashpathakofc/EcoDrone",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Automatic number plate detection",
    description: "An ANPR and OCR based deep learning model used to detect vehicle registration plate",
    image: "/images/projects/16.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Automatic hand gesture detection",
    description: "This deepleaning and CNN based model is able to detect various hand gestures using the realtime basis and respond on the basis of these gestures.",
    image: "/images/projects/17.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
