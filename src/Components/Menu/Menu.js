// Menu.js
import React from "react";
import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">About</a>
      <a href="/">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Pricing
      </a>
      <a href="/">Send A Recipe</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
