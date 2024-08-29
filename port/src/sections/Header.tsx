/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import headshot from "@/assets/headshot.png";

export const Header = () => {
  return (
    <header className="py-10 sticky">
      <div className="container flex items-center">
        <Image
          src={headshot}
          alt="Memoji"
          width={60} // Adjust the width and height as needed
          height={60} // Adjust the width and height as needed
          className="rounded-3xl object-cover shadow-[0px_0px_20px_#E8E8E8]"
        />
      </div>

    </header>
  );
};
