// Burger.styled.js
import styled from "styled-components";
//like CSS part
//noticed that when we clicked burger icon, it blended in with background. trying to chang it
export const StyledBurger = styled.button`
  position: absolute;
  top: 30px;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) =>
      open ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateX(-20px)" : "translateX(0px)"};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    @media screen and (max-width: 1023px) {
      height: 0.125rem;
      width: 1rem;
    }
  }

  @media screen and (max-width: 1023px) {
    height: 1rem;

    .div {
      height: 0.125rem;
      width: 1rem;
    }
  }
`;
