import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ProjectNav } from "@/components/projectnav";
import { FaApple } from "react-icons/fa";

export default function ID() {
  return (
    <section className="max-w-5xl mx-auto">
      <NavLink to="/projects" className="text-white/40 text-xs flex items-center gap-1 pb-10">
        <div className="text-white/40 text-xs hover:text-white transition duration-300">
          <MdArrowBackIosNew />
        </div>
        <div className="text-white/40 text-sm">Back</div>
      </NavLink>

      <div className="transition duration-300 flex flex-row items-center gap-1">
        <span className="text-white"><FaApple /></span>
        Music Dynamic Island <span className="text-white/50">Nav</span>
      </div>
      <h1 className="text-xs text-white/80">September 2024</h1>

      <p className="text-white/80 text-xs md:text-sm py-5">
        A creative component ideally for a Musician's Porfolio website, this Apple Music Dynamic Island clone functions as a navigation bar,
        with the skip button cycling through different sections and the play button offering a smooth transition into the selected page.
      </p>
      <p className="text-white/80 text-xs md:text-sm pb-5">
        With this project, I dove deeper into responsive design and interactive UI elements, focusing on clean, functional code and intuitive navigation.
        It’s a simple yet effective showcase of how design and interaction can come together to create a fluid user experience.
      </p>

      <div className="p-10 bg-white/5 rounded-md ring-1 ring-white/10">
        <ProjectNav />
      </div>
      <h1 className="text-xs text-white/40 py-10">Interactive Design</h1>

    </section>
  );
}
