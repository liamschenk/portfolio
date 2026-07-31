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
    <div className={`${styles["carousel-wrapper"]} border`}>
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
  function formatYear(date) {
    if (!date) return "Unbekannt";
    return new Date(date).getUTCFullYear();
  }

  return (
    <main>
      <section
        className={`${styles["about-wrapper"]} margin-top-large margin-bottom-extra-large padding-bottom-medium`}
      >
        <div>
          <img
            className={`${styles["about-picture"]} border`}
            src={about.picture?.asset?.url}
            alt={`Portrait von ${about.name}`}
            draggable="false"
          />
        </div>
        <div className={styles["about-details"]}>
          <h1 className="color-secondary">{about.name}</h1>
          <p className="color-quaternary">{about.description}</p>
        </div>
      </section>

      <section
        className={`${styles["projects-wrapper"]} margin-top-extra-large margin-bottom-large`}
      >
        {projects.map((project) => (
          <div
            className={`${styles["project-wrapper"]} padding-bottom-medium`}
            key={project._id}
          >
            <div>
              <img
                className={`${styles["project-picture"]} border`}
                src={project.picture?.asset?.url}
                alt={project.name}
                draggable="false"
              />
            </div>
            <div className={styles["project-details"]}>
              <h2 className="color-secondary">
                {project.name} · {formatYear(project.date)}
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
