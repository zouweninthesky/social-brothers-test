import React, { FC, useState } from "react";

import { BlogCategoryInt } from "../../../../utils/interfaces";

interface DropdownInt {
  label: string;
  options: {
    id: number;
    name: string;
  }[];
  initialOption?: number;
}

const Dropdown: FC<DropdownInt> = ({ label, options, initialOption = 0 }) => {
  const [option, setOption] = useState<null | { id: number; name: string }>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (id: number) => {
    const [option] = options.filter((opt, i) => opt.id === id);
    setOption(option);
    toggling();
  };

  const headerClass = () => {
    let className = "input__dropdown-option input__dropdown-option--with-arrow";
    if (!option) className = className.concat(" input__dropdown-option--empty");
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
          {option ? option.name : "Geen categorie"}
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
                      option && option.id === opt.id
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
