import { observer } from "mobx-react-lite";
import { useParams, useLocation } from "react-router-dom";
import { RecipeHub } from "app/store/recipe/recipe.store.ts";
import { Loader } from "entities/loader";
import * as S from "./recipe-details.styles";
import { useMemo } from "react";
import { ErrorBoundaryComponent } from "providers/global-providers/error-boundary.tsx";
import { CategoryBadge, FlagImg } from "shared/ui-elements";
import { CountryCodes } from "app/store/recipe/recipe.type.ts";
import { ROUTES } from "routes/routes.constant.ts";

export const RecipeDetails = observer(() => {
  const { recipeId } = useParams();
  const { state } = useLocation();

  const { getMealDetailsById } = RecipeHub;

    const MerchantDetailsStore = useMemo(() => {
        const store = getMealDetailsById();
        store.setDetailsId(recipeId);
        store.getMeals();
        return store;
    }, []);

    const { recipeDetails, isLoading } = MerchantDetailsStore;

  return (
    <ErrorBoundaryComponent>
      <S.BackLink
        to={state.searchQuery ? `${ROUTES.home.url}?searchQuery=${state.searchQuery}` : ROUTES.home.url}
      >
        Back to home page
      </S.BackLink>
      <S.Container>
        {recipeDetails ? (
          <>
            <S.RecipeImg src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal} />
            <S.Wrapper>
              <S.Title>{recipeDetails.strMeal}</S.Title>
              <S.RecipeDetails>
                <CategoryBadge type="dark">{recipeDetails.strCategory}</CategoryBadge>
                <FlagImg
                  src={`https://flagcdn.com/w320/${CountryCodes[recipeDetails.strArea]}.png`}
                  alt={recipeDetails.strArea}
                />
              </S.RecipeDetails>

              <div>
                <S.Subtitle>Ingredients</S.Subtitle>

                {recipeDetails.ingredients.map(({ ingredient, measure }) => (
                  <div key={ingredient}>{`${ingredient} - ${measure}`}</div>
                ))}
              </div>

              <div>
                <S.Subtitle>Instruction</S.Subtitle>
                <S.InstructionDescription>{recipeDetails.strInstructions}</S.InstructionDescription>
              </div>
            </S.Wrapper>
          </>
        ) : (
          <S.NoData>No data</S.NoData>
        )}

        {isLoading && <Loader />}
      </S.Container>
    </ErrorBoundaryComponent>
  );
});
