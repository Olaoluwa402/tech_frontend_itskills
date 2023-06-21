import React, { useState } from "react";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import styles from "./form.module.css";

//learn state managment in react using form as example
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log(name, email);

  const submitHandler = (e) => {
    e.preventDefault();

    // validation
    if (!email || !name) {
      toast.error("All fields are required");
      return;
    }
    const data = {
      email: email,
      name: name,
    };

    console.log(data, "data");

    localStorage.setItem("registrationDetail", JSON.stringify(data));
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            placeholder="name"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
            placeholder="email"
          />
        </div>

        <Button
          name="Submit"
          bg="white"
          color="#000"
          borderRadius={15}
          submitHandler={submitHandler}
        />
      </div>
    </div>
  );
};

export default Form;
