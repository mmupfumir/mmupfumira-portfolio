'use client';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Header } from "@/sections/Header";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Resume from "@/pages/Resume";
import Carfluent from "@/pages/Projects/Carfluent";
import ID from "@/pages/Projects/ID";
import TWM from "@/pages/Projects/TWM";
import UIshelf from "@/pages/Projects/UIshelf";
import ScrollToTop from '@/components/ScrollToTop';
import PageTransition from "@/components/PageTransition";

export default function Page() {
  return (
    <Router>
      <Header />
      <div className="container">
        <ScrollToTop />
        <AnimatedRoutes />
      </div>
    </Router>
  );
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="projects"
          element={
            <PageTransition>
              <Projects />
            </PageTransition>
          }
        />
        <Route
          path="/projects/id"
          element={
            <PageTransition>
              <ID />
            </PageTransition>
          }
        />
        <Route
          path="/projects/carfluent"
          element={
            <PageTransition>
              <Carfluent />
            </PageTransition>
          }
        />
        <Route
          path="/projects/twm"
          element={
            <PageTransition>
              <TWM />
            </PageTransition>
          }
        />
        <Route
          path="/projects/uishelf"
          element={
            <PageTransition>
              <UIshelf />
            </PageTransition>
          }
        />
        <Route
          path="resume"
          element={
            <PageTransition>
              <Resume />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
