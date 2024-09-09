import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Image from "next/image";
import ui3 from "@/assets/ui3.png";
import ui2 from "@/assets/ui2.png";
import { Testimonials } from "@/sections/Testimonials";
import { Back } from "@/components/back";

export default function TWM() {
  return (
    <section className="max-w-5xl mx-auto">

      <div className="py-14 sticky top-0">
        <Back />
      </div>

      <h1 className="transition duration-300 flex flex-row items-center gap-1 font-medium">
        Trading with Mat
      </h1>
      <h1 className="text-xs text-white/30">Full Stack Developer</h1>
      <div className="text-white/80 text-xs md:text-sm py-5 flex flex-col gap-5">
        <p>
          <span className="text-white/50 flex text-xs pb-2">Context</span>
          Trading with Mat offers expert financial mentorship to individuals eager to invest in the foreign exchange market.
          Over the past four years, they have built a loyal following of over 40,000 people.
        </p>
        <p>
          <span className="text-white/50 flex text-xs pb-2">Problem</span>
          Their straightforward approach and accuracy have made their services highly sought after, leading to the need of a web application
          where students can seamlessly log in and access their courses without the need for manual approval processes.
        </p>
      </div>

      <div className="p-3 bg-white/5 rounded-md">
        <div className="">
          <h1 className="text-white/50 text-xs">Short Term Goal</h1>
          <div className="text-white pt-2 pb-5 tracking-tight font-semibold leading-5">
            <h1>Develop a landing page that provides a course overview and links to all current payment methods.</h1>
          </div>
        </div>
        <h1 className="text-white/50 text-xs py-2">Success Metrics</h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-white tracking-tight text-xs bg-black/80 rounded-sm p-2">
            Reduce time spent on inquiries and onboarding
          </h1>
          <h1 className="text-white tracking-tight text-xs bg-black/80 rounded-sm p-2">
            Increase mentorship sign ups
          </h1>
          <h1 className="text-white tracking-tight text-xs bg-black/80 rounded-sm p-2">
            Create a familiar UI
          </h1>
        </div>
      </div>
      <Testimonials/>
      <div className="py-5">
        <div className="text-white/80 text-xs md:text-sm py-5 flex flex-col gap-5">
          <p>
            <span className="text-white/50 flex text-xs pb-2">Colors</span>
            Given the product and it's targeted audience, I decided to go with a color palette that is consistent with the industry standard
            trading platform, MT4.
          </p>
        </div>
        <div className="bg-white/5 rounded-md p-5 flex flex-col gap-5">
          <Image
            src={ui3}
            alt="ui-1"
            className="w-full h-full object-cover rounded-md shadow-[0px_0px_30px_#000000]"
          />
          <Image
            src={ui2}
            alt="ui-1"
            className="w-full h-full object-cover rounded-md shadow-[0px_0px_30px_#000000]"
          />
        </div>
      </div>
      <h1 className="py-5 border-t border-white/10 tracking-tight font-semi-bold ">What's Next?</h1>
      <div className="pb-5">
        <div className="p-3 bg-white/15 rounded-md">
          <div className="">
            <h1 className="text-white/50 text-xs">Long Term Goal</h1>
            <div className="text-white pt-2 pb-5 tracking-tight font-semibold leading-5">
              <h1>Transform the landing page into a full stack web app with user log in and course watching functionality.</h1>
            </div>
          </div>
          <h1 className="text-white/50 text-xs py-2">Success Metrics</h1>
          <div className="flex flex-col gap-2">
            <h1 className="text-white tracking-tight text-xs bg-black/80 rounded-sm p-2">
              Longevity and reliability
            </h1>
            <h1 className="text-white tracking-tight text-xs bg-black/80 rounded-sm p-2">
              Organization
            </h1>
            <h1 className="text-white tracking-tight text-xs bg-black/80 rounded-sm p-2">
              User Experience
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
