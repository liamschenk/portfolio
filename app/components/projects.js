import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import styles from "../styles/projects.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.125 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.375 } },
};

export default function Projects({ projects }) {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const contentRef = useRef(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const getOpacity = (index) => {
    if (openAccordion !== null) return openAccordion === index ? 1 : 0.5;
    return hoveredIndex !== null && hoveredIndex !== index ? 0.5 : 1;
  };

  return (
    <main className={styles.projects}>
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
            animate={{ opacity: getOpacity(index) }}
            transition={{ duration: 0.25 }}
          >
            <div
              className={styles.accordionHeader}
              onClick={() => toggleAccordion(index)}
              onMouseEnter={() =>
                openAccordion === null && setHoveredIndex(index)
              }
              onMouseLeave={() =>
                openAccordion === null && setHoveredIndex(null)
              }
            >
              <p>{`0${index + 1}`}</p>
              <p>{project.name}</p>
              <p>{project.endDate}</p>
            </div>
            <motion.div
              ref={contentRef}
              className={styles.accordionContent}
              initial={{ height: 0 }}
              animate={{
                height:
                  openAccordion === index
                    ? contentRef.current?.scrollHeight
                    : 0,
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <p>{project.description}</p>
              {project.media?.length > 0 && (
                <MediaSlider media={project.media} />
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}

function MediaSlider({ media }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 250,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    swipeToSlide: true,
    touchThreshold: 12.5,
  };

  return (
    <Slider {...settings} className={styles.mediaContainer}>
      {media.map((item, mediaIndex) => (
        <div key={mediaIndex} className={styles.mediaItem}>
          {item.type === "image" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.url}
              alt={`Project media ${mediaIndex + 1}`}
              className={styles.projectMedia}
            />
          ) : item.type === "video" ? (
            <video
              className={styles.projectMedia}
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={item.url} type="video/webm" />
            </video>
          ) : null}
        </div>
      ))}
    </Slider>
  );
}
