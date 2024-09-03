"use client";
import { motion } from "framer-motion";

const languages = [
  { text: "Python" },
  { text: "TypeScript" },
  { text: "Java" },
  { text: "C" },
  { text: "C#" },
  { text: "Javascript" },
];

const frameworks = [
  { text: "React" },
  { text: "Next.js" },
  { text: "Tailwind" },
  { text: ".NET" },
  { text: "MongoDB" },
  { text: "Sqlite" },
];

const tools = [
  { text: "Git" },
  { text: "AzureDevOps" },
  { text: "Slack" },
  { text: "Adobe" },
  { text: "Figma" },
  { text: "Notion" },
];

export const Interests = () => {
  return (
    <section className="">
      <div className="flex overflow-hidden mt-5 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: "0" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex gap-2"
        >
          {[...languages, ...languages].map((interest) => (
            <div
              key={interest.text}
              className="px-10 py-2 rounded-md bg-white/5  max-w-xs md:max-w-md flex items-center"
            >
              <div className="tracking-tight text-xs">{interest.text}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex overflow-hidden mt-2 [mask-image:linear-gradient(to_left,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex gap-2"
        >
          {[...frameworks, ...frameworks].map((framework) => (
            <div
              key={framework.text}
              className="px-10 py-2 rounded-md bg-white/5 max-w-xs md:max-w-md flex items-center"
            >
              <div className="tracking-tight text-xs">{framework.text}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex overflow-hidden mt-2 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: "0" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex gap-2"
        >
          {[...tools, ...tools].map((tool) => (
            <div
              key={tool.text}
              className="px-10 py-2 rounded-md bg-white/5 max-w-xs md:max-w-md flex items-center"
            >
              <div className="tracking-tight text-xs">{tool.text}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
