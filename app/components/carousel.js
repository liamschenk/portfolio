"use client";

import useEmblaCarousel from "embla-carousel-react";

import styles from "../styles/carousel.module.css";

export default function Carousel({ title, media }) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: false,
  });

  return (
    <div className={`${styles.carousel} margin-bottom-large`}>
      <div className="embla" ref={emblaRef} aria-label={`${title} Slideshow`}>
        <div className={styles.track}>
          {media.map((item, index) =>
            item.asset?.url ? (
              <div
                className={`${styles.slide} border-all`}
                key={item.asset._id}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.media}
                  src={item.asset.url}
                  alt={`${title} ${index + 1}`}
                  draggable="false"
                />
              </div>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
}
