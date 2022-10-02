import React, { FC } from "react";

interface TextInputInt {
  label: string;
  placeholder: string;
  value: string;
  onInput: Function;
}

const TextInput: FC<TextInputInt> = ({
  label,
  placeholder,
  value,
  onInput,
}) => {
  return (
    <div className="input">
      <label htmlFor="title">{label}</label>
      <div className="input__wrapper">
        <input
          type="text"
          id="title"
          value={value}
          onInput={(e) => {
            onInput((e.target as HTMLInputElement).value);
          }}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextInput;
