import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.header.border};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 2rem;
  color: ${({ theme }) => theme.header.link.color};
`;

export const SelectedRecipesLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  color: ${({ theme }) => theme.header.link.color};
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover span {
    text-decoration: underline;
  }
`;

export const StarIconWrapper = styled("div")`
  width: 16px;
  height: 16px;
  z-index: 5;
  cursor: pointer;

  & svg {
    width: 100%;
    height: 100%;

    & path {
      fill: orange;
      stroke: #000;
    }
  }
`;
