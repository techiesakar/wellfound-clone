"use client";
import React, { useState } from "react";
import { Logo } from "../logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/app/lib/utils";

const NavData = [
  {
    name: "discover",
    path: "/",
  },
  {
    name: "for job seekers",
    path: "/",
  },
  {
    name: "for companies",
    path: "/",
  },
];

export const Header = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);
  return (
    <header className="relative h-24 py-5  bg-white border-b gray-50">
      <div className="site-container flex justify-between h-full items-center">
        <div className="relative  bg-white">
          <Logo className="w-[180px]" />
        </div>
        <div
          className={cn(
            "p-3  cursor-pointer relative z-[100] text-gray-900 rounded",
            isMenuOpen && "bg-active-red text-white"
          )}
        >
          <Menu
            onClick={() => setIsmenuOpen(!isMenuOpen)}
            className="h-8 w-8 lg:hidden cursor-pointer"
          />
        </div>
        <ul
          className={cn(
            "flex lg:flex-row transition-all duration-300 py-10 lg:py-0 -top-full lg:top-0 lg:h-auto h-full flex-col z-50 justify-start lg:items-center lg:justify-end gap-6 lg:relative fixed w-full bg-white",
            isMenuOpen && "top-24 "
          )}
        >
          {NavData.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="capitalize transition-all  duration-300 hover:border-link-touch hover:text-link-touch hover:border-b py-3"
              >
                {item.name}
              </Link>
            </li>
          ))}

          <li>
            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/">Login</Link>
            </Button>
          </li>
          <li>
            <Button asChild className="rounded-xl" variant="primary">
              <Link href="/">Sign up</Link>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};
