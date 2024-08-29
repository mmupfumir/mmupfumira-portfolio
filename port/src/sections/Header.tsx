/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import headshot from "@/assets/headshot.png";

export const Header = () => {
  return (
    <header className="py-10 sticky">
      <div className="container flex items-center">
        <Image
          src={headshot}
          alt="Memoji"
          width={50} // Adjust the width and height as needed
          height={50} // Adjust the width and height as needed
          className="rounded-full object-cover shadow-[0px_0px_20px_#E8E8E8]"
        />
        <nav className="flex justify-end text-right gap-5">
          <a href="https://www.linkedin.com/in/milton-mupfumira/" target="_blank" rel="noopener noreferrer" className="text-sm">
            <div className="text-black">
              About
            </div>
          </a>
          <a href="https://www.linkedin.com/in/milton-mupfumira/" target="_blank" rel="noopener noreferrer" className="text-sm">
            <div className="text-black">
              Ideas
            </div>
          </a>
          <a href="https://www.linkedin.com/in/milton-mupfumira/" target="_blank" rel="noopener noreferrer" className="text-sm">
            <div className="text-black">
              Read CV
            </div>
          </a>
        </nav>
      </div>

    </header>
  );
};
