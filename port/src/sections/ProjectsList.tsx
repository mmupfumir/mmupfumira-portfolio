import { NavLink } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import carfl from "@/assets/car-fluent.png";
import test from "@/assets/testimonials.png";
import Image from "next/image";

export const ProjectsList = () => {
  const projects = [
    {
      title: "Ideas",
      links: [
        {
          name: "Music Inspired Nav",
          to: "id",
          icon: <FaApple />,
        },
      ],
    },
  ];

  return (
    <section>
      <div className="tracking-tighter text-lg">
        <h1 className="text-white/80 text-4xl font-sans font-semibold pt-5">Craft</h1>
        <p className="text-white/50 sm:text-xs md:text-sm py-5 sm:pr-10 md:pr-32 tracking-normal">
          A centralized hub for my projects and ideas. In this space you will find contracted work, side projects and my sandbox experiments.
        </p>

        {/* Work Showcase */}
        <div className="grid grid-cols-1 gap-8 text-sm">
          <NavLink to="/projects/twm">
            <div className='flex flex-col pt-5 pb-3 tracking-normal '>
              <h1>Trading with Mat</h1>
              <h1 className='text-white/50 text-xs'>Now</h1>
            </div>
            <div className='bg-white/5 rounded-md hover:bg-white/10 p-5 md:p-10'>
              <Image
                src={test} alt="Testimonials"
                className="rounded-lg sm:shadow-[0px_10px_20px_#000000] md:shadow-[0px_20px_30px_#000000]"/>
            </div>
          </NavLink>

          <NavLink to="/projects/Carfluent">
            <div className='flex flex-col pt-5 pb-3 tracking-normal border-t border-white/10'>
              <h1>Carfluent</h1>
              <h1 className='text-white/50 text-xs'>July 2024</h1>
            </div>
            <div className='bg-white/5 rounded-lg hover:bg-white/10 p-5 md:p-10'>
              <Image
                src={carfl} alt="Carfluent"
                className="rounded-lg sm:shadow-[0px_10px_20px_#000000] md:shadow-[0px_20px_30px_#000000]"/>
            </div>
          </NavLink>
        </div>

        {/* Side Projects */}
        <div className="pb-16">
          {projects.map(({ title, links }) => (
            <div key={title} className="mb-8">
              <h1 className="text-white/80 pt-10">{title}</h1>
              <ul className="flex flex-col gap-0">
                {links.map(({ name, to, icon }) => (
                  <li key={name}>
                    <NavLink
                      to={`/projects/${to}`}
                      className="hover:text-white/50 transition duration-300 flex flex-row items-center gap-1"
                    >
                      {icon && <span className="text-white">{icon}</span>}
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
