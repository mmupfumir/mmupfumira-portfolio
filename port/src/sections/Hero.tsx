export const Hero: React.FC = () => {
  return (
    <section id="Hero">
      <div className=" sm:pt-24 md:pt-40">
        <div className="flex flex-col">

          <div className="py-5 md:py-10 md:max-w-lg tracking-tighter">
            <h1 className="text-xs">Selected Work</h1>
            <h1 className="text-xs">2023 - Present Day</h1>
            <div className="flex gap-2 items-center">
              <div className="h-1.5 w-1.5 bg-[#7CB342] shadow-[0px_0px_10px_#7CB342] animate-pulse rounded-full"></div>
              <h1 className="text-xs text-white/70">Soft. Eng & Product Designer</h1>
            </div>
            <p className="text-4xl pt-5 tracking-tighter font-sans font-normal">
              <span className="bg-gradient-to-l from-white to-black text-transparent bg-clip-text">
                Hello.
              </span>{" "}
              I'm a Full Stack <span className="text-white/30">Software Engineer</span>, studying Computer Science at the University of Hartford. I craft{" "}
              <span className="text-white/70">modest</span> solutions to the unbuilt <span className="bg-gradient-to-r from-white to-black text-transparent bg-clip-text">environment.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
