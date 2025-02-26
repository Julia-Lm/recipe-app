import { LayoutI } from "./layout.type.ts";
import * as S from "./layout.styles";

export const Layout = ({ children }: LayoutI) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
