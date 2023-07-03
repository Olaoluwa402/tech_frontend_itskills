import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import styles from "./form.module.css";

//learn state managment in react using form as example
const Form = () => {
  const [count, setCount] = useState(0);
  const [input, setInputValue] = useState({
    name: "",
    email: "",
  });

  // useEfect

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    let inter = setInterval(() => {
      setCount(count + 1);
    }, 5000);

    // () => {
    //   clearInterval(inter);
    // };
  }, [count]);

  console.log(count, "count");

  const [list, setList] = useState([]);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  console.log(list, "list");
  const { email, name } = input;
  console.log(name, email);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setInputValue({
      ...input,
      [name]: value,
    });
  };

  console.log(input, "input");

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

    setList([...list, data]);

    localStorage.setItem("registrationDetail", JSON.stringify(data));
  };

  return (
    <div className={styles.container}>
      <button onClick={(e) => setCount(count + 1)}>Clicked</button>
      <div className={styles.formWrapper}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            // onChange={(e) => setName(e.target.value)}
            onChange={(e) => changeHandler(e)}
            type="text"
            id="name"
            name="name"
            placeholder="name"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={(e) => changeHandler(e)}
            type="text"
            id="email"
            name="email"
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
