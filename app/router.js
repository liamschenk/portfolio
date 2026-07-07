"use client";

import { useState, Suspense, use } from "react";
import { LazyMotion, domAnimation } from "motion/react";

import Header from "./components/header";
import Index from "./pages/index";
import About from "./pages/about";

export default function Router({ projects, about }) {
  const [route, setRoute] = useState("index");

  return (
    <LazyMotion features={domAnimation}>
      <Header route={route} setRoute={setRoute} />
      {route === "index" && <Index projects={projects} />}
      {route === "about" && (
        <Suspense fallback={null}>
          <AboutRoute about={about} />
        </Suspense>
      )}
    </LazyMotion>
  );
}

function AboutRoute({ about }) {
  const aboutData = use(about);

  return <About {...aboutData} />;
}
