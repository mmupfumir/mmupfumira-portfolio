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

      <p className="text-white/80 text-xs md:text-sm tracking tighter pt-5">As a residential assistant, I've seen the frustration caused by misplaced student ID cards and lockouts. These issues highlight the need for a more reliable, accessible, and secure identification method.</p>
      <p className="text-white/80 text-xs md:text-sm tracking tighter pt-3">The digital student ID for Apple Wallet transforms campus credential management, eliminating the hassle of lost cards and leveraging Apple's security features like Face ID, Touch ID, and encryption. This innovative solution redefines campus life by combining security, convenience, and sustainability, offering a smarter way to manage student IDs in the digital age.</p>
    </section>
  );
}
