/* eslint-disable @next/next/no-img-element */
import { NavLink, useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoMenu } from "react-icons/io5";
import Clock from '@/components/clock';


export const Header = () => {
  const location = useLocation();
  const excludedPaths = ['/projects/twm', '/projects/Carfluent', '/projects/id'];
  if (excludedPaths.includes(location.pathname)) return null;

  return (
    <header className="bg-black md:py-20 sm:py-5 sticky md:border-b border-white/15 top-0">
      <div className="relative container flex items-center justify-between">
          <div className="flex gap-2 items-center ">
            <div className="h-1.5 w-1.5 bg-[#7CB342] shadow-[0px_0px_10px_#7CB342] animate-pulse rounded-full"></div>
            <NavLink to="/" className="text-xs text-white/70 font-mono">MM | </  NavLink>
            <Clock/>
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
            className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-xl bg-white/5 backdrop-blur-lg ring-1 ring-white/10 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="">
              <MenuItem>
                <NavLink
                  to="/"
                  className="nav-link block px-4 py-2 text-xs text-white/70 data-[focus]:bg-blue-600 m-1 rounded-lg"
                >
                  Home
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  to="/Projects"
                  className="nav-link block px-4 py-2 text-xs text-white/70 data-[focus]:bg-blue-600 m-1 rounded-lg "
                >
                Craft
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  to="/resume"
                  className="nav-link block px-4 py-2 text-xs text-white/80 data-[focus]:bg-blue-600 m-1 rounded-lg"
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
