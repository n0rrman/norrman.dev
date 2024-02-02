"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import { FaTasks } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineHome } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";

import { FaGithub } from "react-icons/fa";
import logo from "/public/logo.svg";
import seFlag from "/public/swedish-flag.svg";

import NavigationButton from "@/components/navigation-button";
import DarkModeToggle from "@/components/dark-mode-toggle";
import NavigationIconLink from "@/components/navigation-icon-link";
import HamburgerMenu from "@/components/hamburger-menu";

interface NavigationBarProps {
  threshold?: number;
  home?: string;
  homeLink?: string;
  services?: string;
  contact?: string;

  langTo?: string;
  langName?: string;
  langIcon?: StaticImageData;
}

export default function NavigationBar({
  threshold = 100,
  home = "Home",
  homeLink = "/en/",
  services = "Services",
  contact = "Contact",

  langTo = "/se",
  langName = "Svenska",
  langIcon = seFlag,
}: NavigationBarProps) {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return function () {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollCheck = window.scrollY >= threshold;
    const widthCheck = window.innerWidth <= 800;

    setSticky(scrollCheck || widthCheck);
  };

  return (
    <div className={`flex justify-center h-32 `}>
      <nav
        className={`${
          sticky
            ? "fixed w-[23rem] sm:w-[35rem] top-2 rounded-[3rem] shadow-xl h-16 p-2 bg-slate-200/50 dark:bg-slate-950/20"
            : "relative top-0 w-full h-28 lg:h-32 p-6 bg-transparent"
        } flex flex-row select-none items-center justify-between backdrop-blur-md z-50 ease-in-out transition-all duration-200`}
      >
        <Link
          href={homeLink}
          className="relative h-full aspect-square dark:invert"
        >
          <Image src={logo} alt="logo" fill />
        </Link>

        <div
          className={`flex flex-row ${
            sticky ? "gap-6 sm:gap-8" : "gap-6 lg:gap-8"
          }`}
        >
          <NavigationButton
            title={home}
            icon={<MdOutlineHome />}
            to="#hero"
            className="group-hover:text-fuchsia-700"
            stickyMode={sticky}
          />
          {/* <RxDividerVertical className="text-4xl" /> */}
          <NavigationButton
            title={services}
            icon={<FaTasks className="p-1" />}
            to="#services"
            className="group-hover:text-blueTo"
            stickyMode={sticky}
          />
          {/* <RxDividerVertical className="text-4xl" /> */}
          <NavigationButton
            title={contact}
            icon={<MdOutlineEmail />}
            to="#contact"
            className="group-hover:text-orange-400"
            stickyMode={sticky}
          />
        </div>

        {sticky && (
          <HamburgerMenu>
            <div className="flex flex-col justify-center items-end gap-4 ">
              <NavigationIconLink
                to={langTo}
                name={langName}
                icon={
                  <Image
                    src={langIcon}
                    className="object-cover"
                    fill
                    alt="change language"
                  />
                }
              />

              <DarkModeToggle />

              <NavigationIconLink
                to="https://github.com/n0rrman/norrman.dev"
                name="GitHub"
                icon={<FaGithub />}
              />
            </div>
          </HamburgerMenu>
        )}

        {!sticky && (
          <div className="hidden md:flex flex-row justify-center items-center gap-0 lg:gap-1 ">
            <NavigationIconLink
              to={langTo}
              name={langName}
              icon={
                <Image
                  src={langIcon}
                  className="object-cover"
                  fill
                  alt="change language"
                />
              }
            />

            <RxDividerVertical className="text-xl lg:text-2xl" />

            <DarkModeToggle />

            <RxDividerVertical className="text-xl lg:text-2xl" />

            <NavigationIconLink
              to="https://github.com/n0rrman/norrman.dev"
              name="GitHub"
              icon={<FaGithub />}
            />
          </div>
        )}
      </nav>
    </div>
  );
}
