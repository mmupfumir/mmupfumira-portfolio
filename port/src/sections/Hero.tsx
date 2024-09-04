import { motion } from 'framer-motion';
import Clock from '@/components/clock';
import { GiPauseButton } from "react-icons/gi";
import { BsSkipForwardFill } from "react-icons/bs";
import { BsSkipBackwardFill } from "react-icons/bs";
import { GiSoundWaves } from "react-icons/gi";
import music from "@/assets/music.png";
import Image from "next/image";

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
        <div className=" sm:pt-24 md:pt-40">
          <div className="flex flex-col">

            <div className="py-5 md:py-10 tracking-tighter">
              <h1 className="text-xs">Selected Work</h1>
              <Clock />
              <div className="flex gap-2 items-center">
                <div className="h-1.5 w-1.5 bg-[#7CB342] shadow-[0px_0px_10px_#7CB342] animate-pulse rounded-full"></div>
                <h1 className="text-xs text-white/70 font-mono">Soft. Eng & Product Designer</h1>
              </div>
              <p className="text-4xl pt-5 tracking-tighter font-sans font-normal">
                <span className="bg-gradient-to-l from-white to-black text-transparent bg-clip-text md:max-w-lg">
                  Hello.
                </span>{" "}
                I'm a Full-Stack <span className="text-white/70">Software Engineer</span>, studying Computer Science at the University of Hartford. I craft{" "}
                <span className="text-white/70">modest</span> solutions to the unbuilt <span className="bg-gradient-to-r from-white to-black text-transparent bg-clip-text">environment.</span>
              </p>
              <div className='py-10'>

                <div className='bg-gradient-to-bl from-blue-500 to-white p-2 pb-24 rounded-3xl'>
                  <div className='bg-black rounded-3xl py-5 px-5 md:px-10'>
                    <div className='flex justify-between'>
                        <div className='flex justify-left gap-4'>
                          <Image src={music} alt="music" className='sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg'/>
                          <div className='flex flex-col'>
                            <h1>Elohim</h1>
                            <h2 className='text-white/70'>Sondae</h2>
                          </div>
                        </div>
                        <div className='text-3xl'>
                          <GiSoundWaves />
                        </div>
                    </div>

                      <div className='flex justify-between items-center pt-2'>
                        <h1 className='text-xs'>0:56</h1>
                        <div className='h-1 md:w-4/5 sm:w-4/6 rounded-full bg-white/70'></div>
                        <h1 className='text-xs'>-2:29</h1>
                      </div>
                      <div className='text-3xl pt-2 flex justify-center items-center gap-10'>
                        <BsSkipBackwardFill />
                        <GiPauseButton />
                        <BsSkipForwardFill />
                      </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
