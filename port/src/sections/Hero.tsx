/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import Image from "next/image";
import headshot from "@/assets/headshot.jpg";
import { NavLink } from 'react-router-dom';


const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
};

const pageTransition = {
  duration: 2,
};


export const Hero: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <section id="Hero">
        <div>
          <div className="flex flex-col">
            <div className="tracking-tighter">
              <p className="text-4xl py-28 tracking-tighter font-normal md:max-w-2xl text-white/80">
                Hello - I'm a New Jersey-based  <span className="text-white/50">Software Developer</span>, studying Computer Science & Architecture at the University of Hartford. I craft{" "}
                <span className="text-white/50">modest</span> solutions to the unbuilt
                <span className="bg-gradient-to-r from-white to-black text-transparent bg-clip-text"> environment.</span>
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-2 pt-4 pb-20">
          <Image
            src={headshot}
            alt="Memoji"
            width={40} // Adjust the width and height as needed
            height={40} // Adjust the width and height as needed
            className="rounded-full object-cover"
          />
          <div className="flex animate-pulse items-center py-2 px-4 rounded-full font-medium text-sm bg-blue-600 backdrop-blur shadow-[0px_0px_30px_#3843A2] hover:bg-indigo-600 hover:transition duration-300 top-0 left-0">
            <a href="mailto:mmupfumir@hartford.edu" target="_blank" rel="noopener noreferrer" className="text-sm">
              <div className="flex flex-row items-center text-white text-xs font-mono">
                Let's Talk!
              </div>
            </a>
          </div>
        </div>
        </div>

        <div className="grid grid-cols-1 gap-8 text-sm">

        <div className='flex sm:justify-center md:justify-end gap-3  border-t border-white/15 pt-10 text-xs text-yellow-500  py-10 font-mono'>
          <a href="https://www.linkedin.com/in/milton-mupfumira" target="_blank" rel="noopener noreferrer">
            <h1 className='hover:text-white transition duration-300'>Linked In</h1>
          </a>
          <p>|</p>
          <NavLink to={"projects"}>
            <h1 className='hover:text-white transition duration-300'>Selected Works</h1>
          </NavLink>
          <p>|</p>
          <a href="mailto:mmupfumir@hartford.edu" target="_blank" rel="noopener noreferrer">
            <h1 className='hover:text-white transition duration-300'>Email</h1>
          </a>
        </div>
        </div>
      </section>
    </motion.div>
  );
};
