import React from "react";
import '../App.css';
function Input({ value, onChange}) {
    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="inputBox"
      />
    )
  };
  
export default Input;
