"use client";

import { useState, useEffect, useCallback } from "react";
import Header from "./components/header";
import About from "./components/about";
import Index from "./components/index";

export default function Portfolio() {
  const [view, setView] = useState("index");
  const [siteData, setSiteData] = useState(null);

  const handleViewChange = useCallback(
    (newView) => {
      if (view !== newView) {
        setView(newView);
      }
    },
    [view]
  );

  useEffect(() => {
    fetch("/siteData.json")
      .then((res) => res.json())
      .then((siteData) => setSiteData(siteData));
  }, []);

  if (!siteData) return null;

  return (
    <>
      <Header setView={handleViewChange} activeView={view} />
      {view === "index" && <Index projects={siteData.projects} />}
      {view === "about" && (
        <About
          basics={siteData.basics}
          work={siteData.work}
          education={siteData.education}
        />
      )}
    </>
  );
}
