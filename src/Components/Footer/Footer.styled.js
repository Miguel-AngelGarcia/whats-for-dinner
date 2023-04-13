//footer.styled
import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;

  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  text-align: left;
  padding: 20px;

  background: ${({ theme }) => theme.primaryLight};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  heading {
    font-size: 18px;
    color: ${({ theme }) =>
      theme.primaryLight ? theme.primaryDark : theme.primaryLight};
    margin-bottom: 0px;
    font-weight: bold;
  }

  p {
    font-size: 12px;
    color: ${({ theme }) =>
      theme.primaryLight ? theme.primaryDark : theme.primaryLight};
    margin-bottom: 0px;
    font-weight: bold;
  }

  column {
  }
`;
