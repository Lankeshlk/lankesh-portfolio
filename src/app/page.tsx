"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full overflow-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-screen flex flex-col lg:flex-row">
        <div className="h-1/2  relative lg:w-1/2 ">
          <Image src="/LK.png" alt=" " fill className="object-contain rounded-full" />
        </div>

        <div className="h-1/2 lg:w-1/2  flex flex-col gap-8 items-center ml-4 mr-4 justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            I AM LANKESH PATHMARAJ
          </h1>
          <p className="md:text-xl">
            Crafting seamless digital experiences as a full-stack developer with
            a passion for innovation and clean code. Let’s build something
            extraordinary together!
          </p>
          <div className="flex gap-4 lg:w-full">
            <button className="p-4 rounded-xl ring-1 ring-white  text-white">
            <Link href="/portfolio">My works</Link>
            </button>
            <button className="p-4 rounded-xl ring-1 ring-white">
              <Link href="/Contact">Contact me</Link>
            </button>
            <button className="p-4 rounded-xl ring-1 ring-white">
              <a href="/Lankesh_Pathmaraj.pdf" download="Lankesh_Pathmaraj.pdf">Download CV</a>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Homepage;
