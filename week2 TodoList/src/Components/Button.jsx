import React from "react";
import '../App.css';
function Button({label,onClick}){
    return(
        <button onClick={onClick} className="Btn">
            {label}
        </button>
    )
};
export default Button;