import { useState } from "react";
import Slideshow from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import styles from "../styles/index.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.125 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.375 } },
};

export default function Index({ projects }) {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <main>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.accordion}
            variants={itemVariants}
          >
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
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div
                className={`${styles.accordionTrigger} ${
                  index === 0 ? styles.first : ""
                }`}
                onClick={() => toggleAccordion(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <p>{`0${index + 1}`}</p>
                <p>{project.name}</p>
                <p>{project.endDate}</p>
              </div>

              <motion.div
                className={styles.accordionContent}
                initial={{ height: 0 }}
                animate={{ height: openAccordion === index ? "auto" : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <div className={styles.accordionDescription}>
                  <p>{project.description}</p>
                </div>

                {project.media?.length > 0 && (
                  <MediaSlideshow media={project.media} />
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}

function MediaSlideshow({ media }) {
  const settings = {
    infinite: false,
    speed: 250,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 12.25,
  };

  return (
    <Slideshow {...settings} className={styles.slideshow}>
      {media.map((item, mediaIndex) => (
        <div key={mediaIndex} className={styles.slideshowMedia}>
          {item.type === "image" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.url}
              alt={`Project media ${mediaIndex + 1}`}
              className={styles.slideshowMediaItem}
            />
          ) : item.type === "video" ? (
            <video
              className={styles.slideshowMediaItem}
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
  );
}
