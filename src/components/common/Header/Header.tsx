import React, { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

import BackgroundImg from "../../../assets/img/background.png";
import Icon from "../Icon/Icon";

import { toggleScrollDisable } from "../../../utils/helperFunctions";

interface HeaderPr {
  isBlog?: boolean;
}

const Header: FC<HeaderPr> = ({ isBlog }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpening = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    toggleScrollDisable(isOpen);
  };

  return (
    <header className={isOpen ? "header header--open" : "header"}>
      <img
        className="header__bg"
        src={BackgroundImg}
        alt="Two men in VR-headsets, standing in some loft space"
      />
      <div className="header__bg-filter"></div>
      <div className="header__container container">
        <button
          className="header__toggle-button"
          onClick={handleOpening}
        ></button>
        <div className="header__upper">
          {isBlog ? (
            <Link
              to="/"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Icon
                id="main-logo"
                width={301}
                height={71}
                className="header__logo"
              />
            </Link>
          ) : (
            <Icon
              id="main-logo"
              width={301}
              height={71}
              className="header__logo"
            />
          )}
          <h1 className="visually-hidden">Social Brothers</h1>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "header__link header__link--active"
                      : "header__link"
                  }
                  to="/"
                  end
                  onClick={() => {
                    setIsOpen(false);
                    toggleScrollDisable(isOpen);
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "header__link header__link--active"
                      : "header__link"
                  }
                  to="/blog"
                  onClick={() => {
                    setIsOpen(false);
                    toggleScrollDisable(isOpen);
                  }}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {isBlog && <h2 className="header__heading">Blog</h2>}
    </header>
  );
};

export default Header;
