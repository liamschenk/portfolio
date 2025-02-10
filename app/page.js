"use client";

import { useState, useEffect, useCallback } from "react";
import Header from "./components/header";
import About from "./components/about";
import Index from "./components/index";

export default function Portfolio() {
  const [view, setView] = useState("index");
  const [resume, setResume] = useState(null);

  const handleViewChange = useCallback(
    (newView) => {
      if (view !== newView) {
        setView(newView);
      }
    },
    [view]
  );

  useEffect(() => {
    fetch("/resume.json")
      .then((res) => res.json())
      .then((data) => setResume(data));
  }, []);

  if (!resume) return null;

  return (
    <>
      <Header setView={handleViewChange} activeView={view} />
      {view === "index" && <Index projects={resume.projects} />}
      {view === "about" && (
        <About
          basics={resume.basics}
          work={resume.work}
          education={resume.education}
        />
      )}
    </>
  );
}
