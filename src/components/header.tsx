"use client";
import { Link } from "@tanstack/react-router";
import { Menu, MoveRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import NavigationMenuDemo from "./navigation-menu-demo";

const menuItems = [
  { name: "Programs", href: "#link" },
  { name: "Products", href: "#link" },
  { name: "Community", href: "#link" },
  { name: "Ou Hub", href: "/our-hub" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl"
      >
        <div className="mx-auto max-w-6xl transition-all duration-300">
          {/* Grid layout for large screens */}
          <div className="relative flex flex-wrap items-center justify-between py-3 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:py-4">
            {/* LEFT COLUMN — Logo */}
            <div className="flex items-center w-full px-2 justify-between lg:justify-start">
              <Link
                to="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <img
                  src="/logo.png"
                  alt="Tailark Logo"
                  className="h-10 w-auto"
                />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            {/* MIDDLE COLUMN — Navigation Links */}
            <div className="hidden lg:flex justify-center items-center overflowx-auto no-scrollbar px-4">
              <NavigationMenuDemo />
            </div>

            {/* RIGHT COLUMN — Login Buttons */}
            <div className="hidden lg:flex justify-end items-center space-x-3">
              <Button
                asChild
                variant="link"
                size="lg"
                className="text-[#E68E40] font-bold text-[18px] p-0 leading-[100%] flex items-center gap-2"
              >
                <Link to="/contact">
                  <MoveRight className="text-[#E68E40] w-5 h-5" strokeWidth={3} />
                  Contact
                </Link>
              </Button>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            <div
              className={`${
                menuState ? "block" : "hidden"
              } lg:hidden w-full mt-4 border-t border-gray-200 pt-4`}
            >
              <ul className="space-y-4 text-base">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col space-y-3">
                <Button asChild variant="outline" size="sm">
                  <Link to="/">Login</Link>
                </Button>
                <Button asChild size="sm">
                  <Link to="/">Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
