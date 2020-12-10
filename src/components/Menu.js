import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import { Link } from "react-router-dom";
import "../styles/style.css";
import DropdownWords from "./DropdownWords";
import DropdownTest from "./DropdownTest";

const menus = [
  { name: "Home" },
  { name: "Words" },
  { name: "Memo" },
  { name: "Test" },
  { name: "Dictionary" }
];

const openMenu = () => {
  const menu = document.querySelector(".menu");
  const menuList = document.querySelector(".menu__list");
  const toggler = document.querySelector(".toggler");
  menu.classList.toggle("open");
  menuList.classList.toggle("open");
};
const closeMenu = () => {
  const menu = document.querySelector(".menu");
  const menuList = document.querySelector(".menu__list");
  const toggler = document.querySelector(".toggler");
  menu.classList.toggle("open");
  menuList.classList.toggle("open");
  toggler.checked = !toggler.checked;
};

const Menu = () => {
  return (
    <nav className="menu">
      <input type="checkbox" className="toggler" onClick={openMenu} />
      <div className="hamburger">
        <div></div>
      </div>
      <ul className="menu__list">
        <Link to="/home" className="menu__list-item" onClick={closeMenu}>
          Home
        </Link>
        <DropdownWords closeMenu={closeMenu} />
        <Link to="/memo" className="menu__list-item" onClick={closeMenu}>
          Memo
        </Link>
        <DropdownTest closeMenu={closeMenu} />
        <Link to="/dictionary" className="menu__list-item" onClick={closeMenu}>
          Dictionary
        </Link>
      </ul>
      {/* <ul className="menu__list">
        {menus.map(item => (
          <Link to={item.name.toLowerCase()} className="menu__list-item">
            {item.name}
          </Link>
        ))}
      </ul> */}
      {/* </div> */}
    </nav>
  );
};

export default Menu;
