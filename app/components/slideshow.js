import { useState } from "react";
import Slideshow from "react-slick";
import { motion, AnimatePresence } from "framer-motion";

import { childVariants } from "../utilities/variants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../styles/slideshow.module.css";

export default function ProjectSlideshow({ media, className }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  if (!media?.length) return null;

  const settings = {
    infinite: false,
    speed: 250,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 25,

    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
  };

  return (
    <>
      <div className={styles["slideshow-wrapper"]}>
        <Slideshow {...settings} className={className}>
          {media.map((item, index) =>
            item.asset?.url ? (
              <img
                key={index}
                src={item.asset.url}
                alt={`Project media ${index + 1}`}
                className={styles.media}
                onClick={() => {
                  if (!isDragging) {
                    setActiveIndex(index);
                    setLightboxOpen(true);
                  }
                }}
              />
            ) : null,
          )}
        </Slideshow>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className={styles.lightbox}
            variants={{
              hidden: {
                opacity: childVariants.hidden.opacity,
                transition: childVariants.hidden.transition,
              },
              visible: {
                opacity: childVariants.visible.opacity,
                transition: childVariants.visible.transition,
              },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setLightboxOpen(false)}
          >
            <img
              className={styles["lightbox-media"]}
              src={media[activeIndex].asset.url}
              alt={`Project media ${activeIndex + 1}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
