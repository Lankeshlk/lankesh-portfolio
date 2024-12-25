"use client";
import Link from "next/link";
import { title } from "process";
import Image from 'next/image'
import { useState } from "react";
import NavLink from "./navLink"

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
          <span className="text-white mr-1">LNKS</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
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
          <div className="w-10 h-1 bg-gray-300 rounded"></div>
          <div className="w-10 h-1 bg-gray-300 rounded"></div>
          <div className="w-10 h-1 bg-gray-300 rounded"></div>
        </button>

        {open && (
          <div className=" absolute top-0 left-0 w-screen h-screen bg-gradient-to-b to-gray-00 from-gray-900 text-gray-300 text-4xl gap-8 flex flex-col items-center justify-center">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
