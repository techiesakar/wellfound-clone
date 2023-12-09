"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { Logo } from "../logo";
import { Menu } from "lucide-react";

type HeaderProps = {
  navitems: {
    id: string;
    title: string;
    path: string;
  }[];

  buttons?: React.ReactNode;
};

export const Header = ({ navitems, buttons }: HeaderProps) => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsmenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative  bg-white border-b gray-50 lg:py-0 py-5">
      <div className="site-container flex justify-between   items-center">
        <div className="relative  bg-white">
          <Logo className="lg:w-[180px] w-[140px]" />
        </div>
        <div
          className={cn(
            "p-3  cursor-pointer relative z-[100] lg:hidden  text-gray-900 rounded",
            isMenuOpen && "bg-active-red text-white"
          )}
        >
          <Menu
            onClick={handleMenuClick}
            className="sm:h-8 sm:w-8 h-6 w-6 cursor-pointer"
          />
        </div>
        <ul
          className={cn(
            "flex lg:flex-row flex-col px-10 lg:px-0 transition-all  lg:h-24 h-screen lg:items-center py-10 lg:justify-end gap-6 lg:relative fixed top-0 -left-full lg:left-0  w-full bg-white",
            isMenuOpen && "left-0"
          )}
        >
          {navitems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.path}
                className="capitalize transition-all  duration-300 hover:border-link-touch hover:text-link-touch hover:border-b py-3"
              >
                {item.title}
              </Link>
            </li>
          ))}

          {buttons && (
            <div className="flex lg:flex-row flex-col gap-3">{buttons}</div>
          )}
        </ul>
      </div>
    </header>
  );
};
