import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export function Back() {
  return (
    <NavLink to="/projects" className="text-white/40">
      <div className="relative w-10 h-10 rounded-full bg-white/10 hover:bg-white/5 transition duration-300 backdrop-blur-md">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FaArrowLeft className="text-white text-sm hover:text-white transition duration-300" />
        </div>
      </div>
    </NavLink>
  );
}
