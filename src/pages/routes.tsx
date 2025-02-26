import { Route, Routes } from "react-router-dom";
import { ROUTES } from "routes/routes.constant.ts";
import { RecipeHome, RecipeDetails, SelectedRecipes } from "pages/index";

import { Layout } from "widgets/layout";

export const RecipeHomeRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.home.url} element={<RecipeHome />} />
        <Route path={ROUTES.recipeDetails.url} element={<RecipeDetails />} />
        <Route path={ROUTES.selectedRecipes.url} element={<SelectedRecipes />} />
      </Routes>
    </Layout>
  );
};
