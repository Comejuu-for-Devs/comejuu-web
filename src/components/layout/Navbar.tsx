"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiMenu2Line, RiSearch2Line } from "react-icons/ri";

import Button from "@/components/Button";
import Menu from "@/components/layout/Menu";
import Navlink from "@/components/layout/Navlink";

import logo from "@/assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="w-full
      fixed bg-white left-0 z-50 flex items-center"
      >
        {/* LINE */}
        <div className="absolute h-px w-full bg-gray-900/20 left-0" />

        {/* NAV */}
        <div className="relative z-10 container flex items-center justify-between bg-white">
          <Link href="/" className="w-max bg-white rounded-xl py-1.5 px-2">
            <Image
              src={logo}
              width={412}
              height={166}
              alt=""
              className="h-16 w-auto"
            />
          </Link>

          <div
            className="hidden lg:flex items-center gap-3 bg-white/90 py-3 px-5 border
          border-gray-900/20 backdrop-blur-md rounded-full"
          >
            <Navlink name="Home" url="/" />
            <Navlink name="About Comejuu" url="/about" />
            <Navlink name="Curriculum" url="/curriculum" />
            <Navlink name="Admissions" url="/admissions" />
            <Navlink name="Media Room" url="/mediaroom" />
            <Navlink name="Contact" url="/contact" />
          </div>

          <div className="flex items-center gap-1">
            <Button
              size="icon"
              className="justify-center text-base border border-white/5"
            >
              <RiSearch2Line />
            </Button>

            <Button
              size="icon"
              className="justify-center text-base border border-white/5"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <RiMenu2Line />
            </Button>
          </div>
        </div>
      </nav>

      <Menu open={menuOpen} setOpen={setMenuOpen} />
    </>
  );
};

export default Navbar;
