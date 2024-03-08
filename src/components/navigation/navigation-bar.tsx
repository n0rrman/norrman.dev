"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { FaTasks, FaGithub } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineHome } from "react-icons/md";

import logo from "/public/logo.svg";
import NavigationButton from "@/components/navigation/navigation-button";
import DarkModeToggle from "@/components/navigation/dark-mode-toggle";
import NavigationLink from "@/components/navigation/navigation-link";
import HamburgerMenu from "@/components/navigation/hamburger-menu";

interface NavigationBarProps {
  thresholdY?: number;
  thresholdX?: number;

  textContent: {
    home: string;
    services: string;
    contact: string;
    lang: string;
    github: string;
  };

  langTo: string;
  langIcon: StaticImageData;
}

export default function NavigationBar({
  textContent: { home, services, contact, lang, github },

  thresholdY = 100,
  thresholdX = 870,

  langTo,
  langIcon,
}: NavigationBarProps) {
  const [stickyMode, setStickyMode] = useState(false);

  const handleScroll = () => {
    const scrollCheck = window.scrollY >= thresholdY;
    const widthCheck = window.innerWidth <= thresholdX;

    setStickyMode(scrollCheck || widthCheck);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return function () {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  });

  const renderLinkBar = () => {
    const langToggle = (
      <NavigationLink
        to={langTo}
        name={lang}
        icon={
          <Image
            src={langIcon}
            className="object-cover"
            fill
            alt="change language"
          />
        }
      />
    );

    const darkToggle = <DarkModeToggle />;

    const repoLink = (
      <NavigationLink
        to="https://github.com/n0rrman/norrman.dev"
        name={github}
        icon={<FaGithub />}
      />
    );

    return (
      <HamburgerMenu>
        <div className="flex flex-col justify-center items-end gap-4 ">
          {langToggle}
          {darkToggle}
          {repoLink}
        </div>
      </HamburgerMenu>
    );
  };

  return (
    <div className="flex justify-center h-28">
      <nav
        className={`${
          stickyMode
            ? "fixed w-full xs:w-4/5 max-w-[40rem] top-0 xs:top-2 rounded-none xs:rounded-[3rem] shadow-xl h-16 p-2 bg-slate-200/50 dark:bg-slate-950/20"
            : "relative top-0 w-full h-28 p-6 bg-transparent"
        } flex flex-row select-none items-center justify-between backdrop-blur-md z-50 ease-in-out transition-all duration-200`}
      >
        <Link href="#" className="relative h-full aspect-square dark:invert">
          <Image src={logo} alt="logo" fill />
        </Link>

        <div className="flex flex-row gap-5 xs:gap-8 lg:gap-16">
          <NavigationButton
            name={home}
            icon={<MdOutlineHome />}
            to="#"
            className="group-hover:text-fuchsia-700"
            stickyMode={stickyMode}
          />
          <NavigationButton
            name={services}
            icon={<FaTasks className="p-1" />}
            to="#services"
            className="group-hover:text-blueTo"
            stickyMode={stickyMode}
          />
          <NavigationButton
            name={contact}
            icon={<MdOutlineEmail />}
            to="#contact"
            className="group-hover:text-orange-400"
            stickyMode={stickyMode}
          />
        </div>

        {renderLinkBar()}
      </nav>
    </div>
  );
}
