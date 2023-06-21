import React from "react";

function Heading({ color, fontSize, title }) {
  return (
    <div>
      <p
        style={{
          color: color ? color : "black",
          fontSize: fontSize ? fontSize : "14px",
        }}
      >
        {title}
      </p>
    </div>
  );
}

export default Heading;
