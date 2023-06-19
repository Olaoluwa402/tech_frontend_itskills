import React from "react";
import styles from "./CustomCardTwo.module.css";

const CustomCardTwo = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default CustomCardTwo;
