import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import BackgroundImg from "../../../assets/img/background.png";
import "./Header.scss";

interface HeaderPr {
  isBlog?: boolean;
}

const Header: FC<HeaderPr> = ({ isBlog }) => {
  return (
    <header className="header">
      <img
        className="header__bg"
        src={BackgroundImg}
        alt="Two men in VR-headsets, standing in some"
      />
      <div className="header__bg-filter"></div>
      <div className="header__wrapper container">
        <div className="header__upper">
          <p className="header__temp-logo">logo</p>
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
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {isBlog ? <h2 className="header__heading">Blog</h2> : <></>}
    </header>
  );
};

export default Header;