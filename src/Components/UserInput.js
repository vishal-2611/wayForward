import React from "react";

export default function UserInput({ number }) {
  const { number1, number2, result, operation } = number;
  let output;
  if (!operation) {
    output = number1;
  } else if (result) {
    output = result;
  } else output = number2;
  return (
    <div>
      <input
        type="text"
        name="user-input"
        disabled
        value={output}
        className="user-input"
      />
    </div>
  );
}
