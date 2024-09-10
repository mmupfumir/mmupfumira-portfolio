/* eslint-disable react/no-unescaped-entities */
import React from "react"

export default function Resume() {
  return (
    <main>
        <h1 className="text-white/20 text-xs pt-8 pb-2">Work</h1>

        <div className="flex justify-between pt-3 pb-3 border-b border-white/10">
          <div>
            <h1 className="text-sm text-white/80">Trading With Mat</h1>
            <h1 className="text-xs text-white/50 pt-1">Contracted Full-Stack Engineer</h1>
          </div>
          <h1 className="text-xs text-white/50">Now</h1>
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


        <h1 className="text-white/20 text-xs pt-8 pb-2">Extra Curriculars</h1>


          <div className="flex justify-between pt-3 pb-3 border-b border-white/10">
            <div>
              <h1 className="text-sm text-white/80">National Society of Black Engineers</h1>
              <h1 className="text-xs text-white/50 pt-1">Vice President | Executive Board Treasurer 23'</h1>
            </div>
            <h1 className="text-xs text-white/50">Now</h1>
          </div>

          <div className="flex justify-between pt-3 pb-3 border-b border-white/10">
            <div>
              <h1 className="text-sm text-white/80">University of Hartford, Reslife</h1>
              <h1 className="text-xs text-white/50 pt-1">Resident Assistant</h1>
            </div>
            <h1 className="text-xs text-white/50">Now</h1>
          </div>

          <div className="flex justify-between pt-3 pb-3 border-b border-white/10">
            <div>
              <h1 className="text-sm text-white/80">National Organization of Minority Architecture Students</h1>
              <h1 className="text-xs text-white/50 pt-1">Treasurer</h1>
            </div>
            <h1 className="text-xs text-white/50">2023</h1>
          </div>

          <div className="flex justify-between pt-3 pb-3 border-b border-white/10">
            <div>
              <h1 className="text-sm text-white/80">Harvard University</h1>
              <h1 className="text-xs text-white/50 pt-1">CS50X Computer Science Scholar</h1>
            </div>
            <h1 className="text-xs text-white/50">2023</h1>
          </div>

          <div className="flex justify-between pt-3 pb-3 border-b border-white/10">
            <div>
              <h1 className="text-sm text-white/80">Save our Streets</h1>
              <h1 className="text-xs text-white/50 pt-1 ">Python Instructor</h1>
            </div>
            <h1 className="text-xs text-white/50">2023</h1>
          </div>

          <div className="flex justify-between pt-3 pb-3 ">
            <div>
              <h1 className="text-sm text-white/80">SGA</h1>
              <h1 className="text-xs text-white/50 pt-1 ">Upperclassmen Representative</h1>
            </div>
            <h1 className="text-xs text-white/50">2022</h1>
          </div>
    </main>
  )
}
