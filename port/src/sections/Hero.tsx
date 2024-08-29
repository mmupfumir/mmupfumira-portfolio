export const Hero = () => {
  return (
    <section id="Hero">
      <div className="container">
        <div className="flex sm:flex-col md:flex-row md:items-end">
          <div className="text-black text-7xl tracking-tighter">
            <h1>Hi,</h1>
            <h1>I'm Milton.</h1>
          </div>
          <div className=" text-black/45 sm:pt-10 max-w-72 md:ml-auto">
            <p>Designer & Developer currently studying <span className="text-black">Architecture</span> & <span className="text-black">CS</span> at the University of Hartford.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
