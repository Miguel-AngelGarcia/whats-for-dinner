//footer.js
import React from "react";
import { StyledFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <div class="container">
          <div class="row">
            <heading>
              What’s For Dinner: answering the question for you.
            </heading>
            <p className="mt-2">
              Welcome to Whats For Dinner! My name is Miguel, I am an aspiring
              Software Engineer who loves to cook. Like many others, I ask
              myself every day “What’s for dinner?” I hope this tool helps you
              decide.
            </p>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
