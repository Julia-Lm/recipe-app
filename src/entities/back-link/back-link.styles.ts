import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.header.link.color};
  margin-bottom: 5px;
  width: fit-content;

  &:hover {
    opacity: 0.7;
  }
`;
