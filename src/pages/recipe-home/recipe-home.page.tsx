import { observer } from "mobx-react-lite";
import { RecipeHub } from "app/store/recipe/recipe.store";
import { RecipeCard } from "entities/recipe-card";
import * as S from "./recipe-home.styles";
import { Loader } from "entities/loader";
import { ErrorBoundaryComponent } from "providers/global-providers/error-boundary";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "routes/routes.constant.ts";

export const RecipeHome = observer(() => {
  const { recipes, isLoading } = RecipeHub;
  console.log("recipes", recipes);

  const navigate = useNavigate();
  const goToRecipeDetails = (recipeId: string) => {
    navigate(`${ROUTES.recipeDetails.key}/${recipeId}`);
  };

  return (
    <ErrorBoundaryComponent>
      <S.RecipeList>
        {recipes?.map(({ idMeal, strCategory, strMeal, strMealThumb, strArea }) => (
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
