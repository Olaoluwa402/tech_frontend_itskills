import React from "react";
import styles from "./CustomCardOne.module.css";

const CustomCardOne = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default CustomCardOne;
