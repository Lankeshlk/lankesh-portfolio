"use client";

import React from "react";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion

const projects = [
  {
    num: "01",
    category: "Individual Project",
    title: "Postify - Blog Web Application",
    description:
      "LKWrites is a full-featured blog application with key features such as infinite scroll for seamless content loading, role-based access control for administrators, editors, and readers, and advanced filters to improve content discoverability. This project highlights expertise in full-stack development, RESTful API integration, and user-focused design, showcasing the ability to create dynamic and scalable web applications.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    img: "/LKW.png",
    githubLink: "https://github.com/Lankeshlk/LKWrites",
  },
];

const PortfolioPage = () => {
  return (
    <div className="min-h-[80vh] py-12 px-8">
      <div className="container mx-auto">
        <div className="space-y-8">
          {projects.map((project) => (
            <motion.div
              key={project.num}
              className="flex flex-col md:flex-row bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Project Image (Left side) */}
              <div className="md:w-1/2 h-[350px] mt-25 relative flex justify-center items-center">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[300px] object-contain"
                  whileHover={{ scale: 1.05 }} // Slight zoom effect on hover
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Project Details (Right side) */}
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                {/* Project Number */}
                <motion.div
                  className="text-xl font-bold text-white"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.num}
                  &nbsp;
                  {project.title}
                </motion.div>

                {/* Project Category */}
                <div className="text-lg text-gray-300 mt-2">
                  {project.category}
                </div>

                {/* Project Description */}
                <p className="text-gray-300 mt-4">{project.description}</p>

                {/* Stack */}
                <ul className="flex flex-wrap gap-4 text-sm text-accent mt-4">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-accent">
                      {item}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>

                {/* GitHub Button */}
                <motion.div
                  className="mt-6 flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={project.githubLink} target="_blank">
                    <button className="flex items-center gap-2 bg-black text-white py-2 px-4 rounded-lg hover:bg-accent transition-colors">
                      <BsGithub size={20} /> GitHub
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
