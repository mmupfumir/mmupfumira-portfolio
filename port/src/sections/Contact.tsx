import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { TfiAngleDoubleDown } from "react-icons/tfi";
export const Contact: React.FC = () => {
  return (
    <section className="py-16">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex items-center justify-center gap-x-1.5 text-sm text-white">
                <span className="text-white/40  hover:text-white hover-transition duration-300">
                  <TfiAngleDoubleDown />
                </span>
              </MenuButton>
            </div>

            <MenuItems
              transition duration-300 ease-in-out
              className="absolute z-10 mt-2 w-36 origin-top-right rounded-md bg-white/5 backdrop-blur-md ring-1 ring-white/10 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="">
                <MenuItem>
                  <a href="mailto:mmupfumir@hartford.edu" target="_blank" rel="noopener noreferrer" className="nav-link block px-4 py-2 text-xs text-white/70 data-[focus]:bg-blue-600 m-1 rounded-md">
                    Email
                  </a>
                </MenuItem>

                <MenuItem>
                  <a href="https://www.linkedin.com/in/milton-mupfumira/" target="_blank" rel="noopener noreferrer" className="nav-link block px-4 py-2 text-xs text-white/70 data-[focus]:bg-blue-600 m-1 rounded-md">
                    Linked In
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
    </section>
  );
};
