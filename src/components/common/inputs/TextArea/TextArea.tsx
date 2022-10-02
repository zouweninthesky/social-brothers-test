import React, { FC } from "react";

interface TextAreaInt {
  label: string;
  value: string;
  onInput: Function;
}

const TextArea: FC<TextAreaInt> = ({ label, value, onInput }) => {
  return (
    <div className="input">
      <label htmlFor="">{label}</label>
      <textarea
        name=""
        id=""
        onInput={(e) => onInput((e.target as HTMLTextAreaElement).value)}
        value={value}
      ></textarea>
      <div className="input__resize-sub"></div>
    </div>
  );
};

export default TextArea;
