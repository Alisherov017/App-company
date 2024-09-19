import React from "react";
import logo from "../../img/logo.png";
import heart from "../../img/heart.svg";
import profile from "../../img/profile.svg";
import basket from "../../img/basket.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container">
          <a href="">
            <img src={logo} alt="Logo" className="header-logo" />
          </a>
          <div className="header__text">
            <h2 className="header__text-title">Kross Store</h2>
            <p className="header__text-descr">Магазин лучших кроссовок</p>
          </div>
          <div className="header__menu menu">
            <nav className="menu__body">
              <ul className="menu__list">
                <Link to="/favorite">
                  <li className="menu__item price">
                    <div className="menu__item-icons">
                      <img src={basket} alt="" />
                    </div>
                    1205 руб.
                  </li>
                </Link>
                <li className="menu__item">
                  <div className="menu__item-icons">
                    <img src={heart} alt="" />
                  </div>
                  Закладки
                </li>
                <li className="menu__item">
                  <div className="menu__item-icons">
                    <img src={profile} alt="" />
                  </div>
                  Профиль
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
