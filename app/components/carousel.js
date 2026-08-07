/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import styles from "../styles/carousel.module.css";

export default function Carousel({ name, media }) {
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
