"use client";

import { useState, Suspense, use } from "react";
import { LazyMotion, domAnimation } from "motion/react";

import Header from "../components/header";
import Index from "./index";
import About from "./about";

export default function View({ projects, aboutPromise }) {
  const [view, setView] = useState("index");

  return (
    <LazyMotion features={domAnimation}>
      <Header activeView={view} setView={setView} />
      {view === "index" && <Index projects={projects} />}
      {view === "about" && (
        <Suspense fallback={null}>
          <AboutView aboutPromise={aboutPromise} />
        </Suspense>
      )}
    </LazyMotion>
  );
}

function AboutView({ aboutPromise }) {
  const aboutData = use(aboutPromise);

  return <About {...aboutData} />;
}
