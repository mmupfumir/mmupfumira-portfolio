/* eslint-disable react/no-unescaped-entities */
import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ProjectNav } from "@/components/projectnav";
import { FaApple } from "react-icons/fa";
import { Back } from "@/components/back";

export default function ID() {
  return (
    <section className="max-w-5xl mx-auto">

      <div className="py-14 sticky top-0">
        <Back />
      </div>

      <div className="transition duration-300 flex flex-row items-center gap-1">
        <span className="text-white"><FaApple /></span>
        Music <span className="text-white/50">Nav</span>
      </div>
      <h1 className="text-xs text-white/80">September 2024</h1>

      <p className="text-white/80 text-xs md:text-sm py-5">
        A creative component ideally for a Musician's Portfolio website, this Apple Music Dynamic Island clone functions as a navigation bar,
        with the skip button cycling through different sections and the play button offering a smooth transition into the selected page.
      </p>
      <p className="text-white/80 text-xs md:text-sm pb-5">
        With this project, I dove deeper into responsive design and interactive UI elements, focusing on clean, functional code and intuitive navigation.
        It’s a simple yet effective showcase of how design and interaction can come together to create a fluid user experience.
      </p>

        <ProjectNav />
      <h1 className="text-xs text-white/40 py-10">Interactive Design</h1>

    </section>
  );
}
