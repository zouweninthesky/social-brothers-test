import React, { FC, useState, useRef } from "react";

import { BlogCategoryInt } from "../../../../utils/interfaces";

interface DropdownInt {
  label: string;
  options: {
    id: number;
    name: string;
  }[];
  value: { id: number; name: string };
  setValue: Function;
}

const Dropdown: FC<DropdownInt> = ({ label, options, value, setValue }) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const handler = (e: Event) => {
      if (
        !inputRef.current ||
        (inputRef.current && inputRef.current!.contains(e.target as Node))
      ) {
        return;
      }

      document.removeEventListener("mousedown", handler);
      setIsOpen(false);
    };

    if (!isOpen) {
      setIsOpen(true);
      document.addEventListener("mousedown", handler);
    }

    if (isOpen) {
      setIsOpen(false);
      document.removeEventListener("mousedown", handler);
    }
  };

  const onOptionClicked = (id: number) => {
    const [option] = options.filter((opt, i) => opt.id === id);
    setValue(option);
    // onChange(option.id);
    handleClick();
  };

  const headerClass = () => {
    let className = "input__dropdown-option input__dropdown-option--with-arrow";
    if (value.id === 0)
      className = className.concat(" input__dropdown-option--empty");
    if (isOpen)
      className = className.concat(
        " input__dropdown-option--with-arrow-rotated"
      );
    return className;
  };

  return (
    <div className="input" ref={inputRef}>
      <label htmlFor="">{label}</label>
      <div className="input__wrapper" onClick={handleClick}>
        <button type="button" className={headerClass()}>
          {value.id !== 0 ? value.name : "Geen categorie"}
        </button>
      </div>
      {isOpen && (
        <div className="input__dropdown">
          <ul className="input__dropdown-list">
            {options.map((opt) => (
              <li key={opt.id} className="input__dropdown-item">
                <div className="input__wrapper">
                  <button
                    type="button"
                    className={
                      value && value.id === opt.id
                        ? "input__dropdown-option input__dropdown-option--chosen"
                        : "input__dropdown-option"
                    }
                    onClick={() => onOptionClicked(opt.id)}
                  >
                    {opt.name}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
