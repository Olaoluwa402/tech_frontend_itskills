import React from "react";
import Heading from "../Heading/Heading";
import { Info, Data } from "../InfoDetails/Info";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Heading color="#fff" title="Contact Details" />
        </div>
        <Data forData2="Street + Nr" color="white" width={404} />
        <Data forData2="Aditional Information" color="white" width={404} />
        <div className={styles.zip}>
          <Data forData2="Zip Code" color="white" />
          <Info
            forData="place"
            value1="place"
            option1="Place"
            value2="lagos"
            option2="Lagos"
            value3="imo"
            option3="Imo"
            width={200}
            color="white"
          />
        </div>
        <Info
          forData="country"
          value1="country"
          option1="Country"
          value2="nigeria"
          option2="Nigeria"
          value3="mali"
          option3="Mali"
          width={404}
          color="white"
        />
        <div className={styles.phone}>
          <Data forData2="Code +" color="white" width={90} />
          <Data forData2="Phone Number" color="white" width={295} />
        </div>
        <Data forData2="Your Email" color="white" width={404} />
        <div className={styles.checkbox}>
          <input type="checkbox" id="accept" />
          <label htmlFor="accept">
            I do accept the{" "}
            <a href="https://github.com/9josky/app-b">Terms and Conditions</a>{" "}
            of your site
          </label>
        </div>
        <div className={styles.button}>
          <button>Register Badge</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
