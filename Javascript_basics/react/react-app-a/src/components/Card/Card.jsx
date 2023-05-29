import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, description, icon, imgUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardImageContainer}>
        <img src={imgUrl} alt="image" />
      </div>
      <div className={styles.cardBody}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className={styles.cardIcon}>{icon}</div>
    </div>
  );
};

export default Card;
