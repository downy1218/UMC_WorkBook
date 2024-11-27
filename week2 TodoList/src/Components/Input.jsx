import React from "react";
import '../App.css';
function Input({ value, onChange,placeholder}) {
    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="inputBox"
        placeholder={placeholder}
      />
    )
  };
  
export default Input;
