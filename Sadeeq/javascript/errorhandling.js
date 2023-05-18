const submit = document.getElementById("submit");
submit.addEventListener("click", function (e){
    const value = document.getElementById("age").value;
    console.log(value);

    try {
        if(value === '') throw("Field must not be empty");
        if (isNaN(value)) throw("Must be a numer");
        console.log(isNaN(value));
        if(value > 18) throw("Must be less than 18")
    } catch (error) {
        const errorBox = document.getElementById("error")
        console.log("Error:", error);
        errorBox.textContent = `Error: ${error}`;
    }
});