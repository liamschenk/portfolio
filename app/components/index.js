import { useState } from "react";
import Slideshow from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { parentVariants, childVariants } from "../utilities/variants";
import styles from "../styles/index.module.css";

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
                opacity:
                  openAccordion === null
                    ? hoveredIndex === null || hoveredIndex === index
                      ? 1
                      : 0.5
                    : openAccordion === index || hoveredIndex === index
                    ? 1
                    : 0.5,
              }}
              transition={{ duration: 0.375, ease: "easeInOut" }}
            >
              <section
                className={`${styles.section} ${
                  index === 0 ? styles.noBorder : ""
                }`}
                onClick={() => toggleAccordion(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <p>{`0${index + 1}`}</p>
                <p className="secondary">{project.name}</p>
                <p className="tertiary">{project.endDate}</p>
              </section>

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
                  <Slideshow
                    infinite={false}
                    speed={250}
                    slidesToScroll={1}
                    variableWidth
                    swipeToSlide
                    touchThreshold={12.25}
                    className={styles.slideshow}
                  >
                    {project.media.map((item, mediaIndex) => (
                      <div key={mediaIndex} className={styles.media}>
                        {item.type === "image" ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={item.url}
                            alt={`Project media ${mediaIndex + 1}`}
                            className={styles.mediaItem}
                          />
                        ) : item.type === "video" ? (
                          <video
                            className={styles.mediaItem}
                            autoPlay
                            muted
                            playsInline
                            loop
                            disablePictureInPicture
                          >
                            <source src={item.url} type="video/webm" />
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
