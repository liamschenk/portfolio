"use client";

import { useState, useEffect, useCallback } from "react";

import Header from "./components/header";
import About from "./pages/about";
import Index from "./pages/index";

import { client } from "../sanity/client";
import { query } from "../sanity/queries";

export default function Portfolio() {
  const [view, setView] = useState("index");
  const [siteData, setSiteData] = useState(null);

  const handleViewChange = useCallback(
    (newView) => {
      if (view !== newView) {
        setView(newView);
      }
    },
    [view],
  );

  useEffect(() => {
    client.fetch(query).then((data) => {
      setSiteData(data);
    });
  }, []);

  if (!siteData) return null;

  return (
    <>
      <Header setView={handleViewChange} activeView={view} />
      {view === "index" && <Index projects={siteData.projects} />}
      {view === "about" && (
        <About
          basics={siteData.basics}
          profiles={siteData.profiles}
          work={siteData.work}
          education={siteData.education}
        />
      )}
    </>
  );
}
