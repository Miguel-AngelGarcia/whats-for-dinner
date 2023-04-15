import { React, useEffect, useState, useRef } from "react";
import { StyledNavbar } from "./Navbar.styled";
import { useScrollPosition } from "../../Hooks/";
import { Burger, Footer, Menu } from "..";
import { useOnClickOutside } from "../../Hooks/";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// Sticky Menu Area
const Navbar = () => {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const [open, setOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  return (
    <StyledNavbar>
      <div id="navbar">
        <div className="mt-2">
          <a href="#"></a>
          <heading>what's for dinner</heading>
        </div>
        <div ref={node}>
          <Burger
            open={open}
            setOpen={setOpen /*Burger & menu know about state now*/}
          />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;

/*
return (
  
    <div>
      className=
      {classNames(
        scrollPosition > 0 ? "shadow" : "shadow-none",
        "transition-shadow sticky top-0 bg-white z-20"
      )}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
*/
