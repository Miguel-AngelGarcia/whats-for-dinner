//header.styled
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;

  background: ${({ theme }) => theme.primaryDark};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  heading {
    font-size: 48px;
    color: ${({ theme }) =>
      theme.primaryDark ? theme.primaryLight : theme.primaryDark};

    font-weight: bold;

    @media screen and (max-width: 1023px) {
      font-size: 24px;
      margin-top: 40px;
    }
  }
`;
