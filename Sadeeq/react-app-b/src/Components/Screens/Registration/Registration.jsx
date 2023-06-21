import React from "react";
import GeneralContainer from "../../GeneralContainer/GeneralContainer";
import ContactContainer from "../../ContactContainer/ContactContainer";

import styles from "./Registration.module.css";

function Registration() {
  return (
    <div className={styles.container}>
      <div>
        <GeneralContainer />
      </div>

      <div>
        <ContactContainer />
      </div>
    </div>
  );
}

export default Registration;
