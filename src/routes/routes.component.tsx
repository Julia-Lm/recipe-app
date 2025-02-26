import { Route, Routes } from "react-router-dom";
import { ROUTES } from "routes/routes.constant.ts";
import * as S from "./routes.styles.ts";
import {RecipeHomeRoutes} from "pages/routes.tsx";

export const RoutesComponent = () => {
  return (
    <S.Wrapper>
      <Routes>
        <Route path={`${ROUTES.basePath}*`} element={<RecipeHomeRoutes />} />
      </Routes>
    </S.Wrapper>
  );
};
