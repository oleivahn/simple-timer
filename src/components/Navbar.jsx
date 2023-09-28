import React, { useEffect, useState } from "react";
import ThemeBar from "./Themebar";

const Navbar = () => {
  const [themeColor, setThemeColor] = useState(true);

  // Tailwind dark mode
  useEffect(() => {
    document
      .querySelector("html")
      .setAttribute("data-theme", themeColor ? "dark" : "cupcake");
  }, [themeColor]);

  const [open, setOpen] = useState(false);

  return (
    <header className="bg-dark flex w-full items-center">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full bg-red-400 px-4 text-xl text-white">
            <a href="/dashboard" className="block w-full py-5">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="w-full"
              />
              {/* LOGO */}
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              {/* Hamburger button */}
              <button
                onClick={() => setOpen(!open)}
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              {/* Hamburger menu */}
              <nav
                className={`absolute right-4 top-full z-50 w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/#">Home</ListItem>
                  <ListItem NavLink="/#">Payment</ListItem>
                  <ListItem NavLink="/#">About</ListItem>
                  <ListItem NavLink="/#">Blog</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <ThemeBar themeColor={themeColor} setThemeColor={setThemeColor} />
              <a
                href="/#"
                className="px-7 py-3 text-base font-medium  hover:text-primary"
              >
                Sign in
              </a>

              <a
                href="/#"
                className="text-dark rounded-lg bg-white px-7 py-3 text-base font-medium hover:bg-opacity-90"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="text-dark flex py-2 text-base font-medium hover:text-primary lg:ml-12 lg:inline-flex "
        >
          {children}
        </a>
      </li>
    </>
  );
};
