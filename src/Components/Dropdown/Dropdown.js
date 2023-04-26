import React, { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../../Hooks/useOnClickOutside";

export const Dropdown = ({ childToParent }) => {
  const [open, setOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const [category, setCategory] = useState("All");
  const [options, setOptions] = useState("");

  //useOnClickOutside(node, () => toggleDropdownCat());
  const node = useRef();
  useOnClickOutside(node, () => close());

  const toggleDropdownCat = () => {
    const dropDownMenu = document.getElementById("dropdown-menu");
    const toggleChevron = document.getElementById("chevron");
    dropDownMenu.classList.toggle("show");
    toggleChevron.classList.toggle("chev");

    setOpen(!open);
    setMenuActive(!menuActive);
  };

  const close = () => {
    if (open && menuActive) {
      const dropDownMenu = document.getElementById("dropdown-menu");
      const toggleChevron = document.getElementById("chevron");
      dropDownMenu.classList.toggle("show");
      toggleChevron.classList.toggle("chev");
      setOpen(!open);
      setMenuActive(!menuActive);
    }
  };

  const onOptionClicked = (value) => () => {
    //console.log("1st", category);
    const oldCat = document.getElementById(category);
    oldCat.classList.toggle("chosen-cat");
    setCategory(value);
    childToParent(value);

    //console.log("2nd", category);
  };

  //end every rerender, will highlight current category of food
  useEffect(() => {
    const newCat = document.getElementById(category);
    newCat.classList.toggle("chosen-cat");
  }, [category]);

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
      ref={node}
    >
      <button className="cat-btn" id="btn">
        Category
        <i className="bx bx-chevron-down" id="chevron"></i>
      </button>
      <div className="dropdown-items" id="dropdown-menu">
        <div className="dropdown-option" id="All">
          <i
            className="bx bx-food-menu"
            id="option-text"
            onClick={onOptionClicked("All")}
          >
            All
          </i>
        </div>
        <div className="dropdown-option" id="Vegetarian">
          <i
            className="bx bx-leaf"
            id="option-text"
            onClick={onOptionClicked("Vegetarian")}
          >
            Vegetarian
          </i>
        </div>
        <div className="dropdown-option" id="Vegan">
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
