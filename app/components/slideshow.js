import Slideshow from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../styles/slideshow.module.css";

export default function ProjectSlideshow({ media, className }) {
  if (!media?.length) return null;

  const settings = {
    accessibility: false,
    infinite: false,
    speed: 250,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 25,
    arrows: false,
  };

  return (
    <>
      <div className={styles["slideshow-wrapper"]}>
        <Slideshow {...settings} className={className}>
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
        </Slideshow>
      </div>
    </>
  );
}
