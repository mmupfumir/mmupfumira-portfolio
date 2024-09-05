import React, { useState } from 'react'
import Image from 'next/image'
import { BsSkipForwardFill } from "react-icons/bs";
import { BsSkipBackwardFill } from "react-icons/bs";
import { GiSoundWaves } from "react-icons/gi";
import music from "@/assets/music.png";
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ProjectNav = () => {
  const [showCV, setShowCV] = useState(true);


  const handleSkipForward = () => {
    setShowCV(false);
  }

  const handleSkipBackward = () => {
    setShowCV(true);
  }

  return (
    <div className="p-2 tracking-tighter">
        <div className="bg-black rounded-3xl shadow-[0px_0px_30px_#000000] py-6 px-6 md:px-10">
          {showCV && (
            <div>
              <div className="flex justify-between">
                <div className="flex justify-left gap-4">
                  <Image src={music} alt="music" className="sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg" />
                  <div className="flex flex-col">
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 3 }}
                      onClick={handleSkipForward}
                    >
                      Projects
                    </motion.h1>
                    <h2 className="text-white/50 text-sm">Milton Mupfumira</h2>
                  </div>
                </div>
                <div className="text-3xl">
                  <GiSoundWaves />
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <h1 className="text-xs">2023</h1>
                <div className="h-1 md:w-4/5 sm:w-4/6 rounded-full bg-white/70"></div>
                <h1 className="text-xs">2024</h1>
              </div>
              <div className="text-3xl pt-2 flex justify-center items-center gap-10">
                <BsSkipBackwardFill onClick={handleSkipBackward} />
                <Link to="/projects"><div className='hover:text-white/50 transition duration-300 active:animate-ping'><FaPlay /></div></Link>
                <div className='animate-pulse text-white/30'><BsSkipForwardFill onClick={handleSkipForward} /></div>
              </div>
            </div>
          )}
          {!showCV && (
            <div>
              <div className="flex justify-between">
                <div className="flex justify-left gap-4">
                  <Image src={music} alt="music" className="sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg" />
                  <div className="flex flex-col">
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 3 }}
                      onClick={handleSkipForward}
                    >
                      CV
                    </motion.h1>
                    <h2 className="text-white/50 text-sm">Milton Mupfumira</h2>
                  </div>
                </div>
                <div className="text-3xl">
                  <GiSoundWaves />
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <h1 className="text-xs">2023</h1>
                <div className="h-1 md:w-4/5 sm:w-4/6 rounded-full bg-white/70"></div>
                <h1 className="text-xs">2024</h1>
              </div>
              <div className="text-3xl pt-2 flex justify-center items-center gap-10">
                <div className='animate-pulse text-white/30'><BsSkipBackwardFill onClick={handleSkipBackward} /></div>
                <Link to="/resume"><div className='hover:text-white/50 transition duration-300 active:animate-ping'><FaPlay /></div></Link>
                <BsSkipForwardFill onClick={handleSkipForward} />
              </div>
            </div>
          )}
        </div>
      </div>
  )
}
