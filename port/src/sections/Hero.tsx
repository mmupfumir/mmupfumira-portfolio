import { motion } from 'framer-motion';
import Clock from '@/components/clock';
import  { ProjectNav }  from '@/components/projectnav';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  duration: 3,
};


export const Hero: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <section id="Hero">
        <div className=" sm:pt-10 md:pt-28">
          <div className="flex flex-col">
            <div className="py-5 md:py-10 tracking-tighter">
              <h1 className="text-xs">USA</h1>
              <Clock />
              <div className="flex gap-2 items-center">
                <div className="h-1.5 w-1.5 bg-[#7CB342] shadow-[0px_0px_10px_#7CB342] animate-pulse rounded-full"></div>
                <h1 className="text-xs text-white/70 font-mono">Soft. Eng & Product Designer</h1>
              </div>
              <p className="text-4xl pt-5 tracking-tighter font-sans font-normal md:max-w-xl">
                <motion.span
                  initial={{ backgroundPosition: "50% 50%" }}
                  animate={{ backgroundPosition: "0% 0%" }}
                  transition={{ duration: 3, ease: "linear" }}
                  style={{ backgroundSize: "200% 100%" }}
                  className="bg-gradient-to-r from-black via-white to-black text-transparent bg-clip-text md:max-w-lg">
                  Hello
                </motion.span>
                . I'm a Full-Stack <span className="text-white/70">Software Engineer</span>, studying Computer Science at the University of Hartford. I craft{" "}
                <span className="text-white/70">modest</span> solutions to the unbuilt
                <span className="bg-gradient-to-r from-white to-black text-transparent bg-clip-text"> environment.</span>
              </p>
              <div className='py-10'>
                <div className="bg-gradient-to-b from-blue-500 to-black shadow-[0px_-40px_30px_#05131f]z pb-10 rounded-t-3xl">
                  <ProjectNav />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
