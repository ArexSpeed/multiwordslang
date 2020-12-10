import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import { Link } from "react-router-dom";
import "../styles/style.css";

const tests = [
  {
    id: 1,
    value: "Connect",
    name: "connect"
  },
  {
    id: 2,
    value: "Hide",
    name: "hide"
  },
  {
    id: 3,
    value: "Fill words",
    name: "fill"
  }
];

const DropdownTest = ({ closeMenu }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  DropdownTest.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
    setOpen(!open);
  }

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="menu__list-item"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        Test
      </div>
      {open && (
        <ul className="menu__list-second" onClick={closeMenu}>
          {tests.map(item =>
            item.name === "connect" ? (
              <Link
                to={`/${item.name}`}
                className="menu__list-second-item"
                key={item.id}
                onClick={() => handleOnClick(item)}
              >
                {item.value}
              </Link>
            ) : (
              <Link
                to={`/test/${item.name}`}
                className="menu__list-second-item"
                key={item.id}
                onClick={() => handleOnClick(item)}
              >
                {item.value}
              </Link>
            )
          )}
        </ul>
      )}
    </div>
  );
};
const clickOutsideConfig = {
  handleClickOutside: () => DropdownTest.handleClickOutside
};

export default DropdownTest;
