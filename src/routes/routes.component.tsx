import { Route, Routes } from "react-router-dom";
import { ROUTES } from "routes/routes.constant.ts";
import { RecipeHome, RecipeDetails, SelectedRecipes } from "pages/index";
import * as S from "./routes.styles.ts";

export const RoutesComponent = () => {
  return (
    <S.Wrapper>
      <Routes>
        <Route path={`${ROUTES.basePath}*`} element={<RecipeHome />} />
        <Route path={ROUTES.recipeDetails.url} element={<RecipeDetails />} />
        <Route path={ROUTES.selectedRecipes.url} element={<SelectedRecipes />} />
      </Routes>
    </S.Wrapper>
  );
};
