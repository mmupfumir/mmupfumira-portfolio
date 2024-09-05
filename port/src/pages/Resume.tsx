import React from "react"

export default function Resume() {
  return (
    <main>
        <h1 className="text-white text-4xl tracking-tighter font-sans font-semibold">CV</h1>

        <h1 className="text-white text-xs pt-16 pb-5 tracking-tighter">Education</h1>


        <div className="flex justify-between pt-3 pb-3">
          <div>
            <h1 className="text-sm text-white/80">University of Hartford</h1>
            <h1 className="text-xs text-white/50 pt-1">BS Computer Science | Minor. Architecture</h1>
          </div>
          <h1 className="text-xs text-white/50">Class of 25'</h1>
        </div>

        <h1 className="text-white text-xs pt-8 pb-5 tracking-tighter">Work</h1>

        <div className="flex justify-between pt-3 pb-3 border-b border-white/10">
          <div>
            <div className="flex gap-2 items-center">
              <div className="h-1.5 w-1.5 bg-[#7CB342] shadow-[0px_0px_10px_#ACFFAC] animate-pulse rounded-full"></div>
              <h1 className="text-sm text-white/80">Freelancer</h1>
            </div>
            <h1 className="text-xs text-white/50 pt-1">Full-Stack Engineer</h1>
          </div>
          <h1 className="text-xs text-white/50">2024</h1>
        </div>

        <div className="flex justify-between pt-3 pb-3 border-b border-white/10">
          <div>
            <a href="https://www.car-fluent.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-hover duration-300">Car Fluent</a>
            <h1 className="text-xs text-white/50 pt-1">Backend Software Engineer Intern</h1>
          </div>
          <h1 className="text-xs text-white/50">2024</h1>
        </div>

        <div className="flex justify-between pt-3 pb-6">
          <div>
            <a href="https://www.hartford.edu/academics/schools-colleges/ceta/default.aspx" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-hover duration-300">Unviersity of Hartford, CETA</a>
            <h1 className="text-xs text-white/50 pt-1">IT Technician</h1>
          </div>
          <h1 className="text-xs text-white/50">2023</h1>
        </div>


        <h1 className="text-white text-xs pt-8 pb-5 tracking-tighter">Extra Curriculars</h1>


          <div className="flex justify-between pt-3 pb-3 border-b border-white/10">
            <div>
              <h1 className="text-sm text-white/80">National Society of Black Engineers</h1>
              <h1 className="text-xs text-white/50 pt-1">Vice President | Executive Board Treasurer</h1>
            </div>
            <h1 className="text-xs text-white/50">Now</h1>
          </div>

          <div className="flex justify-between pt-3 pb-3 border-b border-white/10">
            <div>
              <h1 className="text-sm text-white/80">JP Morgan Chase & Co.</h1>
              <h1 className="text-xs text-white/50 pt-1">Software Development Simulated Intern Program</h1>
            </div>
            <h1 className="text-xs text-white/50">2024</h1>
          </div>

          <div className="flex justify-between pt-3 pb-3 border-b border-white/10">
            <div>
              <h1 className="text-sm text-white/80">Harvard University</h1>
              <h1 className="text-xs text-white/50 pt-1">CS50X Computer Science Scholar</h1>
            </div>
            <h1 className="text-xs text-white/50">2023</h1>
          </div>

          <div className="flex justify-between pt-3 pb-16">
            <div>
              <h1 className="text-sm text-white/80">Save our Streets</h1>
              <h1 className="text-xs text-white/50 pt-1 ">Python Instructor</h1>
            </div>
            <h1 className="text-xs text-white/50">2023</h1>
          </div>
    </main>
  )
}
