import React, { FC, useState } from "react";

interface DropdownInt {
  label: string;
  options: {
    name: string;
    dutchName: string;
  }[];
  initialOption?: number;
}

const Dropdown: FC<DropdownInt> = ({ label, options, initialOption = 0 }) => {
  const [option, setOption] = useState(options[initialOption]);
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (name: string) => {
    const [option] = options.filter((opt, i) => opt.name === name);
    setOption(option);
    toggling();
  };

  const headerClass = () => {
    let className = "input__dropdown-option input__dropdown-option--with-arrow";
    if (option.name === "")
      className = className.concat(" input__dropdown-option--empty");
    if (isOpen)
      className = className.concat(
        " input__dropdown-option--with-arrow-rotated"
      );
    return className;
  };

  return (
    <div className="input">
      <label htmlFor="">{label}</label>
      <div className="input__wrapper" onClick={toggling}>
        <button type="button" className={headerClass()}>
          {option.dutchName}
        </button>
      </div>
      {isOpen && (
        <div className="input__dropdown">
          <ul className="input__dropdown-list">
            {options.map((opt) => (
              <li key={opt.name} className="input__dropdown-item">
                <div className="input__wrapper">
                  <button
                    type="button"
                    className={
                      option.name === opt.name
                        ? "input__dropdown-option input__dropdown-option--chosen"
                        : "input__dropdown-option"
                    }
                    onClick={() => onOptionClicked(opt.name)}
                  >
                    {opt.dutchName}
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