import React from "react";

import styles from "./WorkCard.module.css";

export const WorkCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        <a href={demo} target="_blank" className={styles.link}>
          Certificate
        </a>
      </div>
    </div>
  );
};
