import * as S from "./back-link.styles";
import { BackLinkProp } from "entities/back-link/back-link.type.ts";

export const BackLink = ({ children, to, ...prop }: BackLinkProp) => {
  return (
    <S.BackLink to={to} {...prop}>
      {children}
    </S.BackLink>
  );
};
