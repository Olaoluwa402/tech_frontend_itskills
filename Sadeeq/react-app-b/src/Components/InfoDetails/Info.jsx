import React, { useState } from "react";

function Info({
  forData,

  value1,
  option1,
  value2,
  option2,
  value3,
  option3,
  color,
  fontSize,
  width,
}) {
  return (
    <>
      <div>
        <label htmlFor={forData}></label>
        <select
          name={forData}
          id={forData}
          style={{
            border: "none",
            background: "none",
            borderBottom: "black 1px solid",
            width: width ? width : "100px",
            color: color ? color : "black",
            fontSize: fontSize ? fontSize : "14px",
            padding: "10px",
          }}
        >
          <option value={value1}>{option1}</option>
          <option value={value2}>{option2}</option>
          <option value={value3}>{option3}</option>
        </select>
      </div>
    </>
  );
}

function Data({ forData2, label2, color, width }) {
  const [value, setName] = useState("");
  return (
    <>
      <div>
        <label htmlFor={forData2}>{label2}</label>
        <input
          value={value}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id={forData2}
          placeholder={forData2}
          style={{
            border: "none",
            outline: "none",
            background: "none",
            color: color ? color : "black",
            // fontSize: fontSize ? fontSize : "9px",
            width: width ? width : "100px",
            borderBottom: "black 1px solid",
            fontWeight: "bold",
            padding: "10px",
          }}
        />
      </div>
    </>
  );
}

export { Info, Data };
