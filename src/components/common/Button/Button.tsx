import React, { FC } from "react";
import "./Button.scss";

interface ButtonInt {
  title: string;
  handleClick: Function;
}

const Button: FC<ButtonInt> = ({ title, handleClick }) => {
  return (
    <button
      type="button"
      className="button"
      onClick={() => {
        handleClick();
      }}
    >
      {title}
    </button>
  );
};

export default Button;
