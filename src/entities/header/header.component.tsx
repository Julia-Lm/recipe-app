import { HeaderProp } from "entities/header/header.type.ts";
import * as S from "./header.styles.ts";
import { Container } from "shared/ui-elements";
import { ROUTES } from "routes/routes.constant.ts";

export const Header = ({ children }: HeaderProp) => {
  return (
    <S.HeaderContainer>
      <Container>
        <S.HomeLink to={ROUTES.home.url}>Recipe App</S.HomeLink>

        {children && <div>{children}</div>}
      </Container>
    </S.HeaderContainer>
  );
};
