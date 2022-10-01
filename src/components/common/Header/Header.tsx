import React, { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

import BackgroundImg from "../../../assets/img/background.png";
import Logo from "../../../assets/img/logo.svg";

interface HeaderPr {
  isBlog?: boolean;
}

const Header: FC<HeaderPr> = ({ isBlog }) => {
  return (
    <header className="header">
      <img
        className="header__bg"
        src={BackgroundImg}
        alt="Two men in VR-headsets, standing in some loft space"
      />
      <div className="header__bg-filter"></div>
      <div className="header__wrapper container">
        <div className="header__upper">
          {isBlog ? (
            <Link to="/">
              <img className="header__logo" src={Logo} alt="" />
            </Link>
          ) : (
            <img className="header__logo" src={Logo} alt="" />
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
      {isBlog && <h2 className="header__heading">Blog</h2>}
    </header>
  );
};

export default Header;
