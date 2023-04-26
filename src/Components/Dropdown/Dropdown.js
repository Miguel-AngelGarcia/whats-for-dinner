import React, { useEffect } from "react";
import { useState } from "react";
import { useOnClickOutside } from "../../Hooks/useOnClickOutside";

export const Dropdown = ({ childToParent }) => {
  const [open, setOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const [category, setCategory] = useState("All");
  const [options, setOptions] = useState("");

  const toggleDropdownCat = () => {
    const dropDownMenu = document.getElementById("dropdown-menu");
    const toggleChevron = document.getElementById("chevron");
    dropDownMenu.classList.toggle("show");
    toggleChevron.classList.toggle("chev");

    setOpen(!open);
    setMenuActive(true);
  };

  const onOptionClicked = (value) => () => {
    console.log("1st", category);
    setCategory(value);
    childToParent(value);
    console.log("2nd", category);
  };

  /*
  const onOptionClickedTest = useMemo(() => () => {
    console.log("1st", category);
    setCategory(value);
    childToParent(category);
    console.log("2nd", category);
  };
  */

  return (
    <div
      className="dropdown-container"
      onClick={toggleDropdownCat}
      id="dropMenu"
    >
      <button className="cat-btn" id="btn">
        Category
        <i className="bx bx-chevron-down" id="chevron"></i>
      </button>
      <div className="dropdown-items" id="dropdown-menu">
        <div className="dropdown-option">
          <i
            className="bx bx-food-menu"
            id="option-text"
            onClick={onOptionClicked("All")}
          >
            All
          </i>
        </div>
        <div className="dropdown-option">
          <i
            className="bx bx-leaf"
            id="option-text"
            onClick={onOptionClicked("Vegetarian")}
          >
            Vegetarian
          </i>
        </div>
        <div className="dropdown-option">
          <i
            className="bx bx-heart"
            id="option-text"
            onClick={onOptionClicked("Vegan")}
          >
            Vegan
          </i>
        </div>
      </div>
    </div>
  );
};
