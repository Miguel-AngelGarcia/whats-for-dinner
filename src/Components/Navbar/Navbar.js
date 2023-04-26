import { React, useEffect, useState, useRef } from "react";
import { StyledNavbar } from "./Navbar.styled";
import { useScrollPosition } from "../../Hooks/";
import { Burger, Footer, Menu } from "..";
import { useOnClickOutside } from "../../Hooks/";
import { Dropdown } from "../Dropdown/Dropdown";

// Sticky Menu Area
const Navbar = ({ setCat }) => {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const [open, setOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  const childToParent = (childdata) => {
    setCat(childdata);
    console.log("In navbar", childdata);
  };

  return (
    <div className="nav-grid" id="navbar">
      <div className="upper-nav">
        <div className="top-box-1" ref={node}>
          <Burger
            open={open}
            setOpen={setOpen /*Burger & menu know about state now*/}
          />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <div className="top-box-2">
          <a href="#" className="top-box-2-underline">
            <h1>what's for dinner</h1>
          </a>
        </div>
        <div className="top-box-3-blank"></div>
      </div>
      <div className="lower-nav">
        <div className="lower-nav-wrapper">
          <Dropdown childToParent={childToParent} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
