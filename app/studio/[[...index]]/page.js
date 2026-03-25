"use client";

import { useEffect, useState } from "react";
import { NextStudio } from "next-sanity/studio";

import config from "../../../sanity/config";

export default function StudioPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.body.style.padding = "0";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <NextStudio config={config} />;
}
