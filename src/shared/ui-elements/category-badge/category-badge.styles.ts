import styled from "styled-components";
import { CategoryBadgeType } from "shared/ui-elements/category-badge/category-badge.type.ts";

export const Badge = styled("div")<{ $type: CategoryBadgeType }>`
  background: ${({ theme, $type }) => theme.categoryBadge[$type].backgroundColor};
  border-radius: 10px;
  padding: 2px 10px;
  display: flex;
  width: fit-content;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme, $type }) => theme.categoryBadge[$type].color};
`;
