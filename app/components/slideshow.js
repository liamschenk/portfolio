import useEmblaCarousel from "embla-carousel-react";

import styles from "../styles/slideshow.module.css";

export default function ProjectSlideshow({ name, media, className }) {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    containScroll: false,
  });

  if (!media?.length) return null;

  return (
    <div className={`${styles.slideshow} ${className ?? ""}`}>
      <div className="embla" ref={emblaRef}>
        <div className={styles.track}>
          {media.map((item, index) =>
            item.asset?.url ? (
              <div
                className={`${styles.slide} border-full`}
                key={item.asset._id}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.media}
                  src={item.asset.url}
                  alt={`${name} ${index + 1}`}
                />
              </div>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
}
