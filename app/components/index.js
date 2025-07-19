import { useState } from "react";
import Slideshow from "react-slick";
import { urlFor } from "../../lib/imageBuilder";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { parentVariants, childVariants } from "../utilities/variants";
import { settings } from "../utilities/slideshow";
import styles from "../styles/index.module.css";

const getOpacity = (index, openAccordion, hoveredIndex) => {
  if (openAccordion === null) {
    return hoveredIndex === null || hoveredIndex === index ? 1 : 0.5;
  }
  return openAccordion === index || hoveredIndex === index ? 1 : 0.5;
};

export default function Index({ projects }) {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <main>
      <motion.div initial="hidden" animate="visible" variants={parentVariants}>
        {projects.map((project, index) => (
          <motion.div key={index} variants={childVariants}>
            <motion.div
              animate={{
                opacity: getOpacity(index, openAccordion, hoveredIndex),
              }}
              transition={{ duration: 0.375, ease: "easeInOut" }}
            >
              <button
                type="button"
                className={`${styles.trigger} ${
                  index === 0 ? styles["no-border"] : ""
                }`}
                onClick={() => toggleAccordion(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <p>{`0${index + 1}`}</p>
                <p className="secondary">{project.name}</p>
                <p className="tertiary">{project.date}</p>
              </button>

              <motion.div
                className={styles.content}
                initial={{ height: 0 }}
                animate={{ height: openAccordion === index ? "auto" : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <div className={styles.description}>
                  <p>{project.description}</p>
                </div>

                {project.media?.length > 0 && (
                  <Slideshow {...settings} className={styles.slideshow}>
                    {project.media.map((item, mediaIndex) => (
                      <div key={mediaIndex} className={styles.media}>
                        {item._type === "image" && item.asset?.url ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={item.asset.url}
                            alt={`Project media ${mediaIndex + 1}`}
                            className={styles["media-item"]}
                          />
                        ) : item._type === "file" && item.asset?.url ? (
                          <video
                            className={styles["media-item"]}
                            autoPlay
                            muted
                            playsInline
                            loop
                            disablePictureInPicture
                          >
                            <source src={item.asset.url} type="video/webm" />
                          </video>
                        ) : null}
                      </div>
                    ))}
                  </Slideshow>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
