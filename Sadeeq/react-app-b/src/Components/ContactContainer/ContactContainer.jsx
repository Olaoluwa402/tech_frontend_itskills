import React from "react";
import Contact from "../Contact/Contact";

import styles from "./ContactContainer.module.css";

function ContactContainer() {
  return (
    <div className={styles.container}>
      <Contact />
    </div>
  );
}

export default ContactContainer;
