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
              What’s For Dinner: Answering the question for you.
            </heading>
            <p className="mt-2">
              Welcome to Whats For Dinner! My name is Miguel, I am an aspiring
              Software Engineer who loves to cook. Like many others, I struggle
              to come up with any ideas for food when I get home after a long
              day. This is a respoitory of some of my favorite dishes. I hope
              they serve as some sort of inspiration for tonight.
            </p>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
