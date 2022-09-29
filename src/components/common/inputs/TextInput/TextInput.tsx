import React, { FC } from "react";

interface TextInputInt {
  label: string;
  placeholder: string;
}

const TextInput: FC<TextInputInt> = ({ label, placeholder }) => {
  return (
    <div className="input">
      <label htmlFor="title">{label}</label>
      <div className="input__wrapper">
        <input type="text" id="title" placeholder={placeholder} />
      </div>
    </div>
  );
};

export default TextInput;
