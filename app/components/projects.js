import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "../styles/projects.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.125,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects({ projects }) {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [hoveredAccordion, setHoveredAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
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
            className={`${styles.accordion} ${
              openAccordion === index
                ? styles.activeAccordion
                : hoveredAccordion !== null && hoveredAccordion !== index
                ? styles.dimmedAccordion
                : ""
            }`}
            variants={itemVariants}
          >
            <div
              className={styles.accordionHeader}
              onClick={() => toggleAccordion(index)}
              onMouseEnter={() => setHoveredAccordion(index)}
              onMouseLeave={() => setHoveredAccordion(null)}
            >
              <p>{`0${index + 1}`}</p>
              <p>{project.name}</p>
              <p>{project.endDate}</p>
            </div>
            <div
              className={`${styles.accordionContent} ${
                openAccordion === index ? styles.open : ""
              }`}
            >
              <p>{project.description}</p>
              {project.media && project.media.length > 0 && (
                <DraggableMediaContainer media={project.media} />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}

function DraggableMediaContainer({ media }) {
  const containerRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  const calculateConstraints = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = containerRef.current.scrollWidth;
      const rightConstraint = containerWidth - contentWidth;

      setConstraints({
        left: rightConstraint < 0 ? rightConstraint : 0,
        right: 0,
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      calculateConstraints();
    }, 250); // Adjust this delay to match the accordion's animation duration

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Recalculate constraints on window resize
    window.addEventListener("resize", calculateConstraints);
    return () => window.removeEventListener("resize", calculateConstraints);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={styles.mediaContainer}
      drag="x"
      dragConstraints={constraints}
      dragElastic={0.25}
    >
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
              <source src={item.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : null}
        </div>
      ))}
    </motion.div>
  );
}
