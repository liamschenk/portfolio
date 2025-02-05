"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import About from "./components/about";
import Index from "./components/index";

export default function Portfolio() {
  const [view, setView] = useState("index");
  const [resume, setResume] = useState(null);

  useEffect(() => {
    async function fetchResume() {
      const res = await fetch("/resume.json");
      const data = await res.json();
      setResume(data);
    }
    fetchResume();
  }, []);

  if (!resume) return null;

  return (
    <>
      <Navbar setView={setView} activeView={view} />
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
