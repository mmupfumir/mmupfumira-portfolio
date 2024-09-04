'use client'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import { Header } from "@/sections/Header";
import  Home  from "@/pages/Home";
import Projects from "@/pages/Projects";
import Resume from "@/pages/Resume";
import YTDownloader from "@/pages/Projects/YTDownloader";
import ID from "@/pages/Projects/ID";
export default function Page(){

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/projects/id" element={<ID />} />
          <Route path="/projects/ytdownloader" element={<YTDownloader />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
};
