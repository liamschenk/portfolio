import { useState, useEffect, useRef } from "react";
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
                <DraggableMediaContainer media={project.media} />
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}

function DraggableMediaContainer({ media }) {
  const containerRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const calculateConstraints = () => {
      if (!containerRef.current) return;
      const { offsetWidth, scrollWidth } = containerRef.current;
      setConstraints({
        left: Math.min(0, offsetWidth - scrollWidth),
        right: 0,
      });
    };

    setTimeout(calculateConstraints, 250);
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
              <source src={item.url} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          ) : null}
        </div>
      ))}
    </motion.div>
  );
}
