"use client";

import { useState } from "react";

import Header from "../components/header";
import About from "./about";
import Index from "./index";

export default function View({ siteData }) {
  const [view, setView] = useState("index");

  return (
    <>
      <Header activeView={view} setView={setView} />
      {view === "index" && <Index projects={siteData.projects} />}
      {view === "about" && <About {...siteData} />}
    </>
  );
}
