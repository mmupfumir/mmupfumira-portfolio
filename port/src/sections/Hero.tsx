export const Hero = () => {
  return (
    <section id="Hero">
      <div className="container">
        <div className="flex sm:flex-col md:flex-row md:items-end pt-32 ">
          <div className="text-black text-7xl tracking-tighter font-medium">
            <h1>Hi,</h1>
            <h1>I'm <span className="text-black/50">Milton.</span></h1>
          </div>
          <div className=" text-black/50 sm:pt-10 max-w-72 md:ml-auto">
            <p>Designer & Developer currently studying <span className="text-black font-medium italic">Architecture</span> & <span className="text-black font-medium italic">CS</span> at the University of Hartford. I craft <span className="text-black/25 font-medium">modest</span> solutions to the unbuilt environment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
