"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Icon from "../components/icon";
import NavLink from "../components/navLink";
import Button from "../components/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between mt-4 px-4 lg:px-8 mb-4">
      {/* Logo / Avatar */}
      <Icon
        src={"/man.png"}
        alt={"Profile picture of a man"}
        toLink={
          "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpDrvwgWdgGVZxDjNhdsrnPNVKkrVKsvBSsmXwXqPqzGkmtKPrXvxFjnvCDfwGtQgKkVrP"
        }
      />

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-black "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navbar Menu */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row gap-6 text-black absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none p-4 lg:p-0`}
      >
        <NavLink toLink={"/"} name={"Home"} />
        <NavLink toLink={"/about"} name={"About"} />
        <NavLink toLink={"/projects"} name={"Projects"} />
        <NavLink toLink={"/contact"} name={"Contact"} />
      </div>

      {/* Hire Me Button */}

      <Button
        name={"Contact Me"}
        width={120}
        toLink={
          "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpDrvwgWdgGVZxDjNhdsrnPNVKkrVKsvBSsmXwXqPqzGkmtKPrXvxFjnvCDfwGtQgKkVrP"
        }
      />
    </nav>
  );
}
