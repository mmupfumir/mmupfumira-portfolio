/* eslint-disable @next/next/no-img-element */
import { NavLink } from "react-router-dom";
import Image from "next/image";
import headshot from "@/assets/headshot.jpg";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoMenu } from "react-icons/io5";


export const Header = () => {
  return (
    <header className="md:py-10 sm:py-5 sticky top-0">
      <div className="relative container flex items-center justify-between">
        <div className="group flex items-center gap-2">
          <Image
            src={headshot}
            alt="Memoji"
            width={40} // Adjust the width and height as needed
            height={40} // Adjust the width and height as needed
            className="rounded-full object-cover"
          />
          <div className="hidden group-hover:flex  items-center py-2 px-4 rounded-full font-medium text-sm bg-blue-600 backdrop-blur shadow-[0px_0px_30px_#3843A2] hover:bg-indigo-600 hover:transition duration-300 top-0 left-0">
            <a href="mailto:mmupfumir@hartford.edu" target="_blank" rel="noopener noreferrer" className="text-sm">
              <div className="flex items-center gap-1 text-white text-xs">
                Email Me
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 py-2">
        </div>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex items-center justify-center gap-x-1.5 text-sm text-white">
              <span className="text-white/40 text-xl hover:text-white hover-transition duration-300">
                <IoMenu/>
              </span>
            </MenuButton>
          </div>

          <MenuItems
            transition duration-300 ease-in-out
            className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white/5 backdrop-blur-md ring-1 ring-white/10 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="">
              <MenuItem>
                <NavLink
                  to="/"
                  className="nav-link block px-4 py-2 text-xs text-white/70 data-[focus]:bg-blue-600 m-1 rounded-md"
                >
                  Home
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  to="/Projects"
                  className="nav-link block px-4 py-2 text-xs text-white/70 data-[focus]:bg-blue-600 m-1 rounded-md "
                >
                Craft
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  to="/resume"
                  className="nav-link block px-4 py-2 text-xs text-white/80 data-[focus]:bg-blue-600 m-1 rounded-md"
                >
                  CV
                </NavLink>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </header>
  );
};
