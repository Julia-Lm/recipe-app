import { observer } from "mobx-react-lite";
import { RecipeHub } from "app/store/recipe/recipe.store";
import { RecipeCard } from "entities/recipe-card";
import * as S from "./recipe-home.styles";
import { Loader } from "entities/loader";
import { ErrorBoundaryComponent } from "providers/global-providers/error-boundary";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ROUTES } from "routes/routes.constant.ts";
import { FilterRecipePanel } from "pages/recipe-home/ui";
import { useMemo, useState } from "react";

export const RecipeHome = observer(() => {
  const [searchParams] = useSearchParams();
  const { recipes, isLoading, searchMeals } = RecipeHub;
  const [category, setCategory] = useState<string>(searchParams.get("category") || "");

  const navigate = useNavigate();
  const goToRecipeDetails = (recipeId: string) => {
    navigate(`${ROUTES.recipeDetails.key}/${recipeId}`, {
      state: { searchQuery: searchParams.get("searchQuery"), category: searchParams.get("category") || "" },
    });
  };

  const filterRecipes = useMemo(() => {
    return category ? recipes?.filter((recipe) => recipe.strCategory === category) : recipes;
  }, [category, recipes]);

  return (
    <ErrorBoundaryComponent>
      <FilterRecipePanel searchMeals={searchMeals} category={category} setCategory={setCategory} />
      <S.RecipeList>
        {filterRecipes?.map(({ idMeal, strCategory, strMeal, strMealThumb, strArea }) => (
          <RecipeCard
            key={idMeal}
            name={strMeal}
            category={strCategory}
            image={strMealThumb}
            country={strArea}
            onClickCard={() => goToRecipeDetails(idMeal)}
          />
        ))}
        {isLoading && <Loader />}
      </S.RecipeList>
    </ErrorBoundaryComponent>
  );
});
