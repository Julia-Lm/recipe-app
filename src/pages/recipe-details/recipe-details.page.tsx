import { observer } from "mobx-react-lite";
import { useParams, useLocation } from "react-router-dom";
import { RecipeHub } from "app/store/recipe/recipe.store.ts";
import { Loader, BackLink } from "entities/index";
import * as S from "./recipe-details.styles";
import { useMemo } from "react";
import { ErrorBoundaryComponent } from "providers/global-providers/error-boundary.tsx";
import { CategoryBadge, FlagImg } from "shared/ui-elements";
import { CountryCodes } from "app/store/recipe/recipe.type.ts";
import { ROUTES } from "routes/routes.constant.ts";
import { getBackPath } from "shared/utils/get-back-path.ts";

export const RecipeDetails = observer(() => {
  const { recipeId } = useParams();
  const { state } = useLocation();

  const { getMealDetailsById } = RecipeHub;

  const MealDetailsStore = useMemo(() => {
    const store = getMealDetailsById();
    store.setDetailsId(recipeId);
    store.getMealDetails();
    return store;
  }, []);

  const { recipeDetails, isLoading } = MealDetailsStore;

  return (
    <ErrorBoundaryComponent>
      <BackLink to={getBackPath(state, ROUTES.home.url)}>Back to home page</BackLink>
      <S.Container>
        {recipeDetails ? (
          <>
            <S.Wrapper>
              <S.RecipeImg src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal} />
              <S.DescriptionWrapper>
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
              </S.DescriptionWrapper>
            </S.Wrapper>

            <div>
              <S.Subtitle>Instruction</S.Subtitle>
              <S.InstructionDescription>{recipeDetails.strInstructions}</S.InstructionDescription>
            </div>
          </>
        ) : (
          <S.NoData>No data</S.NoData>
        )}

        {isLoading && <Loader />}
      </S.Container>
    </ErrorBoundaryComponent>
  );
});
