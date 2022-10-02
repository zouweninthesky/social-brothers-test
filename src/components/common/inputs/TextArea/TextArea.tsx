import React, { FC } from "react";

import Icon from "../../Icon/Icon";

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
      <div className="input__resize-sub">
        <Icon id="drag" width={14} />
      </div>
    </div>
  );
};

export default TextArea;
