import React from "react";

const Box = ({ clickHandler, text, i, j }) => {
  console.log("i:", i, "j:", j);
  return (
    <div className="box" onClick={() => clickHandler(i, j)}>
      {text !== "#" && text}
    </div>
  );
};

export default Box;
