"use client";

import About from "../components/about";
import Projects from "../components/projects";

export default function Homepage({ about, projects }) {
  return (
    <main>
      <About about={about} />
      <Projects projects={projects} />
    </main>
  );
}
