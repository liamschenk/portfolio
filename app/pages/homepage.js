/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import styles from "../styles/homepage.module.css";

function ProjectCarousel({ name, media }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={styles["carousel-wrapper"]}>
      <div className="embla" ref={emblaRef}>
        <div className={styles["carousel-track"]}>
          {media.map((item, index) =>
            item.asset?.url ? (
              <div className={styles["carousel-slide"]} key={item.asset._id}>
                <img
                  className={styles["slide-media"]}
                  src={item.asset.url}
                  alt={`${name} ${index + 1}`}
                  draggable="false"
                />
              </div>
            ) : null,
          )}
        </div>
      </div>
      {scrollSnaps.length > 1 && (
        <div className={styles["carousel-dots"]}>
          {scrollSnaps.map((_, index) => (
            <div
              key={index}
              className={`${styles["carousel-dot"]} ${
                index === selectedIndex ? styles["active"] : ""
              }`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Homepage({ about, projects }) {
  function getTimespan(projects) {
    const years = projects
      .map((project) => project.date)
      .filter(Boolean)
      .map((date) => new Date(date).getUTCFullYear());

    if (years.length === 0) return "Unbekannt";

    const earliest = Math.min(...years);
    const latest = Math.max(...years);

    return earliest === latest ? `${earliest}` : `${earliest} – ${latest}`;
  }

  return (
    <main>
      <section className={`${styles["about-wrapper"]} margin-top-large`}>
        <div className="padding-bottom-medium">
          <img
            className={styles["about-portrait"]}
            src={about.portrait?.asset?.url}
            alt={`Portrait von ${about.name}`}
            draggable="false"
          />
        </div>
        <div className={styles["about-details"]}>
          <h1 className="color-secondary padding-bottom-small">{about.name}</h1>
          <p className="color-quaternary">{about.description}</p>
        </div>
      </section>

      <section
        className={`${styles["timespan-wrapper"]} margin-top-large margin-bottom-large`}
      >
        <p className="color-tertiary">
          Ausgewählte Projekte · {getTimespan(projects)}
        </p>
      </section>

      <section className={`${styles["projects-wrapper"]} margin-bottom-large`}>
        {projects.map((project) => (
          <div
            className={`${styles["project-wrapper"]} padding-bottom-large`}
            key={project._id}
          >
            <div className="padding-bottom-small">
              <img
                className={styles["project-picture"]}
                src={project.picture?.asset?.url}
                alt={project.name}
                draggable="false"
              />
            </div>
            <div
              className={`${styles["project-details"]} padding-bottom-medium`}
            >
              <h2 className="color-secondary padding-bottom-small">
                {project.name} · {project.topic}
              </h2>
              <p className="color-quaternary">{project.description}</p>
            </div>
            <ProjectCarousel name={project.name} media={project.media} />
          </div>
        ))}
      </section>
    </main>
  );
}
