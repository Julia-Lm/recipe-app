import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { RecipeHub } from "app/store/recipe/recipe.store.ts";
import { Loader } from "entities/loader";
import * as S from "./recipe-details.styles";
import { useMemo } from "react";
import { ErrorBoundaryComponent } from "providers/global-providers/error-boundary.tsx";
import { CategoryBadge, FlagImg } from "shared/ui-elements";
import { CountryCodes } from "app/store/recipe/recipe.type.ts";

export const RecipeDetails = observer(() => {
  const { recipeId } = useParams();
  const { recipes, isLoading } = RecipeHub;

  const recipeData = useMemo(() => recipes?.find((item) => item.idMeal === recipeId), [recipeId, recipes]);

  return (
    <ErrorBoundaryComponent>
      <S.Container>
        {recipeData ? (
          <>
            <S.RecipeImg src={recipeData.strMealThumb} alt={recipeData.strMeal} />
            <S.Wrapper>
              <S.Title>{recipeData.strMeal}</S.Title>
              <S.RecipeDetails>
                <CategoryBadge type="dark">{recipeData.strCategory}</CategoryBadge>
                <FlagImg
                  src={`https://flagcdn.com/w320/${CountryCodes[recipeData.strArea]}.png`}
                  alt={recipeData.strArea}
                />
              </S.RecipeDetails>

              <div>
                <S.Subtitle>Ingredients</S.Subtitle>

                {recipeData.ingredients.map(({ ingredient, measure }) => (
                  <div key={ingredient}>{`${ingredient} - ${measure}`}</div>
                ))}
              </div>

              <div>
                <S.Subtitle>Instruction</S.Subtitle>
                <S.InstructionDescription>{recipeData.strInstructions}</S.InstructionDescription>
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
