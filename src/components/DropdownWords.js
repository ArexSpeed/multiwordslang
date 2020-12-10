import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import { Link } from "react-router-dom";
import "../styles/style.css";

const lvls = [
  {
    id: 1,
    value: "Level 1"
  },
  {
    id: 2,
    value: "Level 2"
  },
  {
    id: 3,
    value: "Level 3"
  },
  {
    id: 4,
    value: "Level 4"
  }
];

const DropdownWords = ({ closeMenu }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  DropdownWords.handleClickOutside = () => setOpen(false);

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
        Words
      </div>
      {open && (
        <ul className="menu__list-second" onClick={closeMenu}>
          {lvls.map(item => (
            <Link
              to={`/words/${item.id}`}
              className="menu__list-second-item"
              key={item.id}
              onClick={() => handleOnClick(item)}
            >
              {item.value}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
const clickOutsideConfig = {
  handleClickOutside: () => DropdownWords.handleClickOutside
};

export default DropdownWords;
