import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import ThemeBar from "./Themebar";
import Login from "./Login";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  const [themeColor, setThemeColor] = useState(true);

  // Tailwind dark mode
  useEffect(() => {
    // console.log("📗 LOG [ themeColor ]:", themeColor);

    document
      .querySelector("html")
      .setAttribute("data-theme", themeColor ? "dark" : "light");
  }, [themeColor]);

  const [open, setOpen] = useState(false);

  return (
    <header className="bg-dark flex w-full items-center border-2 border-b-red-500">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          {/* INFO: MAIN LOGO */}
          <div className="w-60 max-w-full bg-red-400 px-4 text-xl text-white">
            <Link
              to={!isAuthenticated ? `/` : `/dashboard`}
              className="block w-full py-5"
            >
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="w-full"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              {/* INFO: Hamburger button */}
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
              {/* INFO: NAV LINKS */}
              <nav
                className={`absolute right-4 top-full z-50 w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink={!isAuthenticated ? `/` : `/dashboard`}>
                    Home
                  </ListItem>
                  {isAuthenticated && (
                    <div className="block lg:flex">
                      <ListItem NavLink="/dashboard/workout">Workouts</ListItem>
                      {/* <ListItem NavLink="/#">About</ListItem>
                      <ListItem NavLink="/#">Blog</ListItem> */}
                    </div>
                  )}
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              {/* INFO: THEME BUTTON AND LOGIN */}
              <ThemeBar themeColor={themeColor} setThemeColor={setThemeColor} />
              <Login />
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
        <Link
          to={NavLink}
          className="text-dark flex py-2 text-base font-medium hover:text-primary lg:ml-12 lg:inline-flex "
        >
          {children}
        </Link>
      </li>
    </>
  );
};
