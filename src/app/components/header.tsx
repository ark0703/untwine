"use client";
import React, { useState, useEffect } from "react";
import { menu } from "@/app/data";
import untwineLogo from "@/assets/untwineImg/Untwine_Logo-removebg-preview 1.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`sticky top-0 w-full z-50 transition-colors duration-300  ${
        isScrolled ? "bg-base-100 shadow-sm " : "bg-transparent"
      }`}
    >
      <div className="navbar page-width flex justify-between items-center">
        <div className="navbar-start animate-slideInLeft">
          <Link aria-label="untwine logo" href={"/"}>
            <Image
              src={untwineLogo}
              width={untwineLogo.width}
              height={untwineLogo.height}
              alt="untwineLogo logo"
              className=" max-w-60 "
            />
          </Link>
        </div>

       <div className="navbar-center hidden md:flex items-center justify-center">
          <ul className="flex w-full items-center justify-center gap-8">
            {menu.map((item) => (
              <li key={item.url}>
                <Link
                  aria-label={item.text}
                  className="header-class captilize font-medium "
                  href={item.url}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-4">
          <div className="bg-primary text-white">

          </div>
          <details className="dropdown block md:hidden dropdown-end">
            <summary
              onClick={toggleMenu}
              className="btn-ghost btn btn-circle swap swap-rotate"
            >
              <div
                aria-label="menu"
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle margin pr-0"
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                )}
              </div>
            </summary>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-8 z-[1] p-2 shadow bg-base-100 rounded-box w-[90vw] h-[50vh]"
            >
              {menu.map((item) => (
                <li key={item.url}>
                  <Link
                    aria-label={item.text}
                    className="ml-auto header-class hover:text-primary "
                    href={item.url}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Header;
