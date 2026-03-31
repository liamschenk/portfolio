"use client";

import { useState } from "react";

import Header from "../components/header";
import Index from "./index";
import About from "./about";

export default function View({ data }) {
  const [view, setView] = useState("index");

  return (
    <>
      <Header activeView={view} setView={setView} />
      {view === "index" && <Index projects={data.projects} />}
      {view === "about" && <About {...data} />}
    </>
  );
}
