"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CustomLink from "./CustomLink";

type Props = {
  items: { href: string; label: string }[];
};

const Navbar = ({ items }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-purple-500 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <CustomLink
            href="/"
            className="text-white font-bold text-xl text-center"
          >
            Exam Timetable
          </CustomLink>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <FaTimes
              onClick={toggleNavbar}
              className="text-white text-xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={toggleNavbar}
              className="text-white text-xl cursor-pointer"
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-white block py-2 px-4">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
