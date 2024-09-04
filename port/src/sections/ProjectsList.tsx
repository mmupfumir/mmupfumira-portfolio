import { NavLink } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdNorthEast } from "react-icons/md";
import { FaApple } from "react-icons/fa";

export const ProjectsList = () => {
  return (
    <section>
      <div className="tracking-tighter text-lg">
        <h1 className="text-white text-4xl font-sans font-semibold">Craft</h1>
        <h2 className="text-white/70 text-sm tracking-normal">My sandbox</h2>
        <p className="text-white/50 sm:text-xs md:text-sm py-10 sm:pr-10 md:pr-32 tracking-normal">This is where I experiment with UI and interaction design.
        I use this space to explore new ideas or recreate cool things.</p>

        {/* Projects */}
        <div className="pb-16">
          <div className="flex flex-col text-white/80">
            <NavLink to="id" className="hover:text-white/50 transition duration-300 flex flex-row items-center gap-1">
              <span className="text-white"><FaApple /></span>
              Music Dynamic Island <span className="text-white/30">Clone</span>
            </NavLink>
            <NavLink to="ytdownloader" className="hover:text-white/50 transition duration-300">Youtube MP4 Downloader</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
