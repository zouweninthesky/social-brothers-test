import React, { FC } from "react";

interface TextAreaInt {
  label: string;
}

const TextArea: FC<TextAreaInt> = ({ label }) => {
  return (
    <div className="input">
      <label htmlFor="">{label}</label>
      <textarea name="" id=""></textarea>
      <div className="input__resize-sub"></div>
    </div>
  );
};

export default TextArea;
