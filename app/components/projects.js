/* eslint-disable @next/next/no-img-element */

import { getTimespan } from "../utilities/timespan";
import Carousel from "./carousel";

import styles from "../styles/projects.module.css";

export default function Projects({ projects }) {
  return (
    <>
      <section
        className={`${styles["timespan-wrapper"]} margin-top-large margin-bottom-large`}
      >
        <p className="color-text-secondary">
          Ausgewählte Projekte · {getTimespan(projects)}
        </p>
      </section>

      <section className={`${styles["projects-wrapper"]} margin-bottom-large`}>
        {projects.map((project) => (
          <div
            className={`${styles["project-wrapper"]} padding-bottom-large`}
            key={project._id}
          >
            <div className="padding-bottom-small">
              <img
                className={styles["project-picture"]}
                src={project.picture?.asset?.url}
                alt={project.name}
                draggable="false"
                // style={{
                //   backgroundColor: `var(--color-${project.backgroundColor || "red"})`,
                // }}
              />
            </div>
            <div
              className={`${styles["project-details"]} padding-bottom-medium`}
            >
              <h2 className="color-text-primary padding-bottom-small">
                {project.name} · {project.topic}
              </h2>
              <p className="color-text-tertiary">{project.description}</p>
            </div>
            <Carousel name={project.name} media={project.media} />
          </div>
        ))}
      </section>
    </>
  );
}
