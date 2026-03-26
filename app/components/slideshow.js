import useEmblaCarousel from "embla-carousel-react";

import styles from "../styles/slideshow.module.css";

export default function ProjectSlideshow({ media, className }) {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    containScroll: false,
  });

  if (!media?.length) return null;

  return (
    <div className={styles["slideshow-wrapper"]}>
      <div ref={emblaRef} className={`embla ${className ?? ""}`}>
        <div className={styles["slideshow-track"]}>
          {media.map((item, index) =>
            item.asset?.url ? (
              <div
                className={`${styles["media-wrapper"]} border-full`}
                key={index}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.asset.url}
                  alt={`Project media ${index + 1}`}
                  className={styles.media}
                />
              </div>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
}
