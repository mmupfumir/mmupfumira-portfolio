import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Image from "next/image";
import { GiPauseButton } from "react-icons/gi";
import { BsSkipForwardFill } from "react-icons/bs";
import { BsSkipBackwardFill } from "react-icons/bs";
import { GiSoundWaves } from "react-icons/gi";
import music from "@/assets/music.png";

export default function ID() {
  return (
    <section className="max-w-5xl mx-auto">
      <NavLink to="/projects" className="text-white/40 text-xs flex items-center gap-1 pb-10">
        <div className="text-white/40 text-xs hover:text-white transition duration-300">
          <MdArrowBackIosNew />
        </div>
        <div className="text-white/40 text-sm">Back</div>
      </NavLink>

      <div className="text-white text-lg md:text-xl tracking-tighter font-medium">
        Apple Music Widget
      </div>

      <p className="text-white/80 text-xs md:text-sm py-5">
        A fun project for new React Developers.
      </p>


        <div className="bg-gradient-to-bl from-gray-900 to-black rounded-3xl py-5 md:py-10 px-5 md:px-10 tracking-tighter ring-1 ring-white/10">
          <div className="flex justify-between">
            <div className="flex justify-left gap-4">
              <Image src={music} alt="music" className="sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg" />
              <div className="flex flex-col">
                <h1>Elohim</h1>
                <h2 className="text-white/70">Sondae</h2>
              </div>
            </div>
            <div className="text-3xl">
              <GiSoundWaves />
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <h1 className="text-xs">0:56</h1>
            <div className="h-1 md:w-4/5 sm:w-4/6 rounded-full bg-white/70"></div>
            <h1 className="text-xs">-2:29</h1>
          </div>
          <div className="text-3xl pt-2 flex justify-center items-center gap-10">
            <BsSkipBackwardFill />
            <GiPauseButton />
            <BsSkipForwardFill />
          </div>
        </div>
    </section>
  );
}
