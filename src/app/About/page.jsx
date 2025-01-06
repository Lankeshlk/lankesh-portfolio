"use client";
import { delay, motion, useInView, useScroll } from "framer-motion";
import Brain from "../../components/Brain.jsx";
import { useRef } from "react";

const Aboutpage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/*container*/}
      <div className="h-full lg:flex ">
        {/*text container*/}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-3/5">
          {/*bio container*/}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-4xl">Profile</h1>
            <p className="text-lg">
              I am a software engineering undergraduate passionate about
              full-stack web and mobile development. With expertise in Next.js,
              React Native, and Spring Boot, I focus on building scalable and
              user-centric applications. Currently, I'm seeking a software
              engineering internship to expand my skills and contribute to
              innovative projects.
            </p>
            <svg
              width={50}
              height={50}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.29289ZM5.70711 11.2929C5.31658 10.9024 4.68342 10.9024 4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929C19.3166 10.9024 18.6834 10.9024 18.2929 11.2929L12 17.5858L5.70711 11.2929Z"
                fill="#fff"
              />
            </svg>
          </div>
          {/*skill container*/}
          <div className="w-full flex flex-col gap-12 justify-center">
            <motion.h1 className="font-bold text-4xl text-white ">
              Skills
            </motion.h1>

            <motion.div className="flex flex-col gap-10  ">
              {/* Programming Languages Card */}
              <div className="flex  gap-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl shadow-xl p-8 cursor-pointer hover:scale-105 transform transition-all duration-300 ease-in-out">
                <h2 className="font-semibold text-2xl text-white p-4 border-b-4 border-transparent hover:border-blue-400 transition-all duration-300">
                  Programming Languages
                </h2>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="text-white text-lg hover:text-blue-400 transition-all duration-300">
                    Java
                  </div>
                  <div className="text-white text-lg hover:text-blue-400 transition-all duration-300">
                    JavaScript
                  </div>
                </div>
              </div>

              {/* Frontend Card */}
              <div className="flex  gap-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl shadow-xl p-8 cursor-pointer hover:scale-105 transform transition-all duration-300 ease-in-out">
                <h2 className="font-semibold text-2xl text-white p-4 border-b-4 border-transparent hover:border-blue-400 transition-all duration-300">
                  Frontend
                </h2>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="text-white text-lg hover:text-blue-400 transition-all duration-300">
                    React
                  </div>
                  <div className="text-white text-lg hover:text-blue-400 transition-all duration-300">
                    Next.Js
                  </div>
                </div>
              </div>

              {/* Backend Card */}
              <div className="flex  gap-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl shadow-xl p-8 cursor-pointer hover:scale-105 transform transition-all duration-300 ease-in-out">
                <h2 className="font-semibold text-2xl text-white p-4 border-b-4 border-transparent hover:border-blue-400 transition-all duration-300">
                  Backend
                </h2>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="text-white text-lg hover:text-blue-400 transition-all duration-300">
                    Node.js
                  </div>
                  <div className="text-white text-lg hover:text-blue-400 transition-all duration-300">
                    Spring Boot
                  </div>
                </div>
              </div>

              {/* Databases Card */}
              <div className="flex  gap-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl shadow-xl p-8 cursor-pointer hover:scale-105 transform transition-all duration-300 ease-in-out">
                <h2 className="font-semibold text-2xl text-white p-4 border-b-4 border-transparent hover:border-blue-400 transition-all duration-300">
                  Databases
                </h2>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="text-white text-lg hover:text-blue-400 transition-all duration-300">
                    MySQL
                  </div>
                  <div className="text-white text-lg hover:text-blue-400 transition-all duration-300">
                    MongoDB
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/*exp container*/}
          <div className="flex flex-col gap-12 justify-center pb-48">
            <motion.h1 className="font-bold text-4xl text-white ">
              Education
            </motion.h1>
            <motion.div className="flex flex-col justify-between h-48">
              {/* EDUCATION LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* EDU TITLE */}
                  <div className="bg-white p-3 text-gray-500 font-semibold rounded-b-lg rounded-s-lg">
                    B.Sc. (Hons) in Software Engineering
                  </div>
                  {/* SCHL */}
                  <div className="p-3 text-sm italic">
                    Sabaragamuwa University of Sri Lanka{" "}
                  </div>
                  {/* DATE */}
                  <div className="p-3 text-blue-400 text-sm font-semibold">
                    2021 - Present
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>

              {/* EDU LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* EDU TITLE */}
                  <div className="bg-white p-3 text-gray-500 font-semibold rounded-r-lg rounded-b-lg">
                    G.C.E. Advanced Level – Physical Science Stream
                  </div>
                  {/* SCHL */}
                  <div className="p-3 text-sm italic">Highlands College </div>
                  {/* DATE */}
                  <div className="p-3 text-blue-400 text-sm font-semibold">
                    2019{" "}
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block top-0 right-0 top-0 sticky z-30 w-1/3 xl:w-2/5 h-screen">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};
export default Aboutpage;
