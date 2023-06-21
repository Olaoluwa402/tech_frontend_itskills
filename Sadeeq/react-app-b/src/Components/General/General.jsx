import React from "react";
import Heading from "../Heading/Heading";
import { Info, Data } from "../InfoDetails/Info";

import styles from "./General.module.css";

function General() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Heading color="blue" title="General Information" />
        </div>
        <div className={styles.container2}>
          <div>
            <Info
              forData="title"
              value1="title"
              option1="Title"
              value2="mr"
              option2="Mr"
              value3="mrs"
              option3="Mrs"
              width={404}
            />
          </div>
          <div className={styles.name}>
            <Data forData2="First Name" width={150} />
            <Data forData2="Last Name" width={150} />
          </div>
          <div>
            <Info
              forData="position"
              value1="position"
              option1="Position"
              value2="md"
              option2="MD"
              value3="ceo"
              option3="CEO"
              width={404}
            />
          </div>
          <Data forData2="Company" width={404} />
          <div className={styles.company}>
            <Data forData2="Business Arena" width={200} />
            <Info
              forData="employees"
              value1="employees"
              option1="Employees"
              value2="5"
              option2="5+"
              value3="20"
              option3="20+"
              width={200}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default General;
