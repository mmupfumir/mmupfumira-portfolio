import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink } from "react-router-dom";

/**
 * Work is a Next.js page component that displays a page for a personal project.
 *
 * @returns A JSX element representing the Work page.
 */
export default function YTDownloader() {
  return (
    <section className="max-w-5xl mx-auto">

      <NavLink to="/projects" className="text-white/40 text-xs flex items-center gap-1 pb-10">
        <div className="text-white/40 text-xs hover:text-white transition duration-300"><MdArrowBackIosNew /></div>
        <div className="text-white/40 text-sm">Back</div>
      </NavLink>

      <div className="text-white text-lg md:text-xl tracking-tighter font-medium">Youtube MP4 Downloader</div>

      <p className="text-white/80 text-xs md:text-sm tracking tighter pt-5">A fun first project for beginmer python developers. This python script uses the Pytube library to download videos from youtube.</p>
    </section>
  );
}
