/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import headshot from "@/assets/headshot.png";

export const Header = () => {
  return (
    <header className="md:py-10 sm:py-5 sticky">
      <div className="container flex items-center justify-between">
        <Image
          src={headshot}
          alt="Memoji"
          width={50} // Adjust the width and height as needed
          height={50} // Adjust the width and height as needed
          className="rounded-full object-cover shadow-[0px_0px_20px_#E8E8E8]"
        />
        <nav className="flex gap-5">
          <a href="" target="_blank" rel="noopener noreferrer" className="text-sm">
            <div className="text-black/40 hover:text-black hover-transition duration-300">
              About
            </div>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="text-sm">
            <div className="text-black/40 hover:text-black hover-transition duration-300">
              Craft
            </div>
          </a>
        </nav>
      </div>
    </header>
  );
};
