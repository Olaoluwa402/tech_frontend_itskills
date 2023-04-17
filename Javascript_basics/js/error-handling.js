const submitBtn = document.getElementById("btn-submit");
submitBtn.addEventListener("click", (e) => {
  const value = document.getElementById("age").value;
  console.log(value);
  try {
    const name = "firstName";
    console.log(name);
    if (value === "") throw new Error("Field must ot be empty");
    if (isNaN(value)) throw new Error("Must be a number");
    console.log(isNaN(value));
    if (value > 18) throw new Error("Must be less than 18");
  } catch (error) {
    const errBox = document.getElementById("error");
    console.log("Error:", error.message);
    errBox.textContent = `Error: ${error}`;
  } finally {
    //
  }
});
