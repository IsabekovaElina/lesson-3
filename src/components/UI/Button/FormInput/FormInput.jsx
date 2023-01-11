import React from "react";
import "./FormInput.css";

const FormInput = ({ id, labelName, placeholder, inputType, ...rest}) => {

    return (
        <div className = "elements">
            <label
             className="label" 
             htmlFor={id}>{labelName}</label>
            <input 
            className="input" 
            placeholer={placeholder || "..."}
            id={id}
            type={inputType} {...rest} />
        </div>
    )
}

export default FormInput;