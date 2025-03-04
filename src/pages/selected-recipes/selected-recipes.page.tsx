import { observer } from "mobx-react-lite";
import { RecipeHub } from "app/store/recipe/recipe.store.ts";
import { ErrorBoundaryComponent } from "providers/global-providers/error-boundary.tsx";
import { getBackPath } from "shared/utils/get-back-path.ts";
import { ROUTES } from "routes/routes.constant.ts";
import { BackLink, Loader, RecipeCard } from "entities/index";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { getMergeMealsIngredients } from "pages/selected-recipes/utils.ts";
import * as S from "./selected-recipes.styles";

export const SelectedRecipes = observer(() => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const goToRecipeDetails = (recipeId: string) => () => {
    navigate(`/${ROUTES.recipeDetails.key}/${recipeId}`, { state });
  };

  const { getSelectedRecipesByIds, selectedRecipes } = RecipeHub;

  const SelectedRecipesStore = useMemo(() => {
    const store = getSelectedRecipesByIds();
    store.setDetailsIds(selectedRecipes);
    store.getMeals();
    return store;
  }, []);

  const { recipes, isLoading } = SelectedRecipesStore;

  const mergeMealsIngredients = useMemo(() => getMergeMealsIngredients(recipes), [recipes]);

  return (
    <ErrorBoundaryComponent>
      <BackLink to={getBackPath(state, ROUTES.home.url)}>Back to home page</BackLink>
      <S.Container>
        {recipes?.length ? (
          <S.InnerContainer>
            <S.SelectCardList>
              {recipes?.map(({ idMeal, strCategory, strMeal, strMealThumb, strArea, strInstructions }) => (
                <S.SelectCardItem key={idMeal}>
                  <RecipeCard
                    name={strMeal}
                    category={strCategory}
                    image={strMealThumb}
                    country={strArea}
                    isSelected={selectedRecipes.includes(idMeal)}
                    onClickCard={goToRecipeDetails(idMeal)}
                  />

                  <div>
                    <S.SelectCardTitle>Instruction</S.SelectCardTitle>
                    <S.SelectCardDescription>{strInstructions}</S.SelectCardDescription>
                  </div>
                </S.SelectCardItem>
              ))}
            </S.SelectCardList>
            <S.TotalIngredientList>
              <S.TotalIngredientTitle>Total Ingredients</S.TotalIngredientTitle>
              {mergeMealsIngredients.map(({ ingredient, measure }, index) => (
                <S.TotalIngredientItem key={`ingredient${index}`}>
                  {ingredient} - {measure}
                </S.TotalIngredientItem>
              ))}
            </S.TotalIngredientList>
          </S.InnerContainer>
        ) : (
          <S.NoData>No select data</S.NoData>
        )}

        {isLoading && <Loader />}
      </S.Container>
    </ErrorBoundaryComponent>
  );
});
