import { motion } from 'framer-motion';
import  { ProjectNav }  from '@/components/projectnav';
import Image from "next/image";
import headshot from "@/assets/headshot.jpg";


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
          <div className=" flex items-center gap-2 py-4">
          <Image
            src={headshot}
            alt="Memoji"
            width={40} // Adjust the width and height as needed
            height={40} // Adjust the width and height as needed
            className="rounded-full object-cover"
          />
          <div className="flex animate-pulse items-center py-2 px-4 rounded-full font-medium text-sm bg-blue-600 backdrop-blur shadow-[0px_0px_30px_#3843A2] hover:bg-indigo-600 hover:transition duration-300 top-0 left-0">
            <a href="mailto:mmupfumir@hartford.edu" target="_blank" rel="noopener noreferrer" className="text-sm">
              <div className="flex items-center gap-1 text-white text-xs font-mono">
                Email me!
              </div>
            </a>
          </div>
        </div>
        </div>
      </section>
    </motion.div>
  );
};
