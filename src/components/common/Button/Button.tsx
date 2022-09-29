import React, { FC } from "react";
import "./Button.scss";

interface ButtonInt {
  title: string;
  onClick: Function;
}

const Button: FC<ButtonInt> = ({ title, onClick }) => {
  return (
    <button
      className="button"
      onClick={() => {
        onClick();
      }}
    >
      {title}
    </button>
  );
};

export default Button;
