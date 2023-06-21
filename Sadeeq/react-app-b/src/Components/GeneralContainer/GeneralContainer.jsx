import React from "react";
import General from "../General/General";

import styles from "./GeneralContainer.module.css";

function GeneralContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.general}>
        <General />
      </div>
    </div>
  );
}

export default GeneralContainer;
