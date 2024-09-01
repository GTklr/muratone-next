"use client";

import { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  MobileNav,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Links = [
  { path: "/music", label: "Music" },
  { path: "/links", label: "Links" },
  { path: "/link-create", label: "Create" },
  { path: "/contact", label: "Contact", isButton: true },
];

function NavList() {
  return (
    <ul className=" p-2 lg:p-0 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-xs">
      {Links.map((link, index) => (
        <li key={index} className="text-center p-1 font-medium">
          {link.isButton ? (
            <Link
              href={link.path}
              className=" text-center items-center bg-success text-dark font-bold px-3 py-1 rounded hover:bg-opacity-80 transition-colors"
            >
              {link.label}
            </Link>
          ) : (
            <Link
              href={link.path}
              className="text-center items-center hover:text-success transition-colors"
            >
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="mx-auto my-auto bg-dark text-white fixed top-0 left-0 right-0 py-0 px-5 z-20">
      <div className="flex items-center justify-between ">
        <h2 className="mr-4 cursor-pointer py-2 text-white">Muratone</h2>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className=" h-6 w-6 text-white lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </FontAwesomeIcon>
      </div>
      <MobileNav open={openNav} className="bg-opacity-25">
        <NavList className="px-10" />
      </MobileNav>
    </div>
  );
}

export default NavbarSimple;
