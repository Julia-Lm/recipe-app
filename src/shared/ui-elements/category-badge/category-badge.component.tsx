import { CategoryBadgeProp } from "shared/ui-elements/category-badge/category-badge.type.ts";
import * as S from "./category-badge.styles";

export const CategoryBadge = ({ children, type = "light" }: CategoryBadgeProp) => {
  return <S.Badge $type={type}>{children}</S.Badge>;
};
