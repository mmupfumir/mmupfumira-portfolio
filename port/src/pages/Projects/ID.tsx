import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Image from "next/image";
import phone from "@/assets/phone.png";

export default function ID() {
  return (
    <section className="max-w-5xl mx-auto">
      <NavLink to="/projects" className="text-white/40 text-xs flex items-center gap-1 pb-10">
        <div className="text-white/40 text-xs hover:text-white transition duration-300"><MdArrowBackIosNew /></div>
        <div className="text-white/40 text-sm">Back</div>
      </NavLink>

      <div className="text-white text-lg md:text-xl tracking-tighter font-medium">Digital Student ID</div>

      <p className="text-white/80 text-xs md:text-sm py-5">As a residential assistant, I've seen the frustration caused by misplaced student ID cards and lockouts.
        These issues highlight the need for a more reliable, accessible, and secure identification method.
      </p>
      <p className="text-white/80 text-xs md:text-sm tracking tighter pb-5">The digital student ID for Apple Wallet transforms campus credential management, eliminating the hassle of lost cards and leveraging Apple's security features like Face ID, Touch ID, and encryption.
      This innovative solution redefines campus life by combining security, convenience, and sustainability, offering a smarter way to manage student IDs in the digital age.</p>

      <div className="bg-[#0F0F0F] ring-1 ring-white/10 p-5 px-5 rounded-md">
        <h1 className="text-white/20 text-lg tracking-tighter font-medium">Apple Wallet</h1>
        <h2 className="text-white text-xs tracking-tighter font-medium">iOS integration</h2>

        <div className="flex justify-center py-2">
          <Image
            src={phone} alt="phone"
            height={300} />
        </div>
      </div>
    </section>
  );
}
