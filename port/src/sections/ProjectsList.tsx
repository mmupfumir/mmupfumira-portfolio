import { NavLink } from "react-router-dom";
import { FaApple } from "react-icons/fa";

export const ProjectsList = () => {
  const projects = [
    {
      title: "Contracted      ",
      links: [
        { name: "Trading With Mat Landing Page", to: "TWM" },
      ],
    },
    {
      title: "Side Projects",
      links: [
        { name: "UI Shelf", to: "uishelf" },
      ],
    },
    {
      title: "Sandbox",
      links: [
        {
          name: "Music Dynamic Island Nav",
          to: "id",
          icon: <FaApple />,
        },
        { name: "Youtube MP4 Downloader", to: "ytdownloader" },
      ],
    },
  ];

  return (
    <section>
      <div className="tracking-tighter text-lg">
        <h1 className="text-white text-4xl font-sans font-semibold">Craft</h1>
        <p className="text-white/50 sm:text-xs md:text-sm py-10 sm:pr-10 md:pr-32 tracking-normal">
          A centralized hub for my software projects and ideas. In this space you will find contracted work, side projects and my sandbox experiments.
        </p>

        {/* Projects */}
        <div className="pb-16">
          {projects.map(({ title, links }) => (
            <div key={title} className="mb-8">
              <h1 className="text-white/50">{title}</h1>
              <ul className="flex flex-col gap-2 pt-2">
                {links.map(({ name, to, icon }) => (
                  <li key={name}>
                    <NavLink
                      to={to}
                      className="hover:text-white transition duration-300 flex flex-row items-center gap-1"
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
