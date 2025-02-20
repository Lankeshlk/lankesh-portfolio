"use client";
import Link from "next/link";
import { title } from "process";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink";
import { motion, stagger } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/About", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/Contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topline = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };
  const middleline = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomline = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };
  const menu = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: { duration: 0.4, staggerChildren: 0.2 },
    },
  };
  const menuitem = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48  ">
      <div className=" hidden md:flex gap-4 text-xl ">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      <div className="md:hidden lg:flex lg:w-1/3 lg:justify-center">
        <Link
          href="/"
          className=" text-sm bg-blue-300 rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Lankesh</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            lk
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        <Link href="https://github.com/Lankeshlk">
          <Image src="/github.png" alt="github" width={30} height={30} />
        </Link>
        <Link href="https://www.linkedin.com/in/lankesh-pathmaraj/">
          <Image src="/linkedin.png" alt="linkedin" width={30} height={30} />
        </Link>
      </div>

      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topline}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-gray-300 rounded origin-left"
          ></motion.div>
          <motion.div
            variants={middleline}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-gray-300 rounded"
          ></motion.div>
          <motion.div
            variants={bottomline}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-gray-300 rounded origin-left"
          ></motion.div>
        </button>

        {open && (
          <motion.div
            variants={menu}
            initial="closed"
            animate="opened"
            className=" absolute top-0 left-0 w-screen h-screen bg-black text-gray-300 text-4xl gap-8 flex flex-col items-center justify-center z-40"
          >
            {links.map((link) => (
              <motion.div
                className=""
                variants={menuitem}
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
