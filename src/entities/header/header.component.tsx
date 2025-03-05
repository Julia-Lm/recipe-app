import * as S from "./header.styles.ts";
import { Container } from "shared/ui-elements";
import { ROUTES } from "routes/routes.constant.ts";
import { ReactComponent as StarIcon } from "shared/assets/icons/star-icon.svg";
import { observer } from "mobx-react-lite";
import { RecipeHub } from "app/store/recipe/recipe.store.ts";
import { SearchParamsNames } from "app/store/recipe/recipe.type.ts";
import { useSearchParams } from "react-router-dom";

export const Header = observer(() => {
  const { selectedRecipes } = RecipeHub;
  const isSelectedAnyRecipe = selectedRecipes.length > 0;
  const [searchParams] = useSearchParams();

  return (
    <S.HeaderContainer>
      <Container>
        <S.Wrapper>
          <S.HomeLink to={ROUTES.home.url}>Recipe App</S.HomeLink>

          {isSelectedAnyRecipe && (
            <S.SelectedRecipesLink
              to={ROUTES.selectedRecipes.url}
              state={{
                searchQuery: searchParams.get(SearchParamsNames.searchQuery) || "",
                category: searchParams.get(SearchParamsNames.category) || "",
              }}
            >
              <span>Selected Recipes</span>
              <S.StarIconWrapper>
                <StarIcon />
              </S.StarIconWrapper>
            </S.SelectedRecipesLink>
          )}
        </S.Wrapper>
      </Container>
    </S.HeaderContainer>
  );
});
