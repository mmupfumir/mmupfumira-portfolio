import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";

export const Hero = () => {
  return (
    <section id="Hero">
      <div className="container">
        <div className="flex flex-col pt-32 ">
          <div className="text-black text-5xl tracking-tighter font-normal">
            <h1 className="text-5xl bg-gradient-to-b from-red-600 to-blue-600 text-transparent bg-clip-text">Hi,</h1>
            <h1 className="font-normal">I'm <span className="bg-gradient-to-b from-gray-600 to-black text-transparent bg-clip-text">Milton.</span></h1>
          </div>
          <div className=" text-black/35 py-3 max-w-xl">
            <p>A Designer & Developer currently studying <span className="text-black/70">Computer Science</span> & <span className="text-black/70">Architectural Design & Tech </span> at the University of Hartford,s. I craft <span className="text-black/15 font-medium">modest</span> solutions to the unbuilt environment.</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 pt-2 ">
          <div className="relative py-4 px-5 rounded-2xl font-medium text-sm bg-blue-600 hover:shadow-[0px_0px_30px_#90CAF9] hover:bg-indigo-600 hover-transition duration-300">
              <a href="https://www.linkedin.com/in/milton-mupfumira/" target="_blank" rel="noopener noreferrer class" className="text-sm">
                <div className=" flex items-center gap-1 text-white">
                    Let's Talk<span><MdOutlineArrowOutward/></span>
                </div>
              </a>
          </div>
          <a href="https://www.linkedin.com/in/milton-mupfumira/" target="_blank" rel="noopener noreferrer class" className="text-sm">
                <div className=" flex items-center gap-1">
                  Linked In<span><IoIosArrowForward /></span>
                </div>
          </a>
        </div>
      </div>
    </section>
  );
};
