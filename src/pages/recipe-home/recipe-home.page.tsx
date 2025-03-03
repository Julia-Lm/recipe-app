import { observer } from "mobx-react-lite";
import { RecipeHub } from "app/store/recipe/recipe.store";
import { RecipeCard } from "entities/recipe-card";
import * as S from "./recipe-home.styles";
import { Loader, Pagination } from "entities/index";
import { ErrorBoundaryComponent } from "providers/global-providers/error-boundary";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ROUTES } from "routes/routes.constant.ts";
import { FilterRecipePanel } from "pages/recipe-home/ui";
import { useEffect, useMemo } from "react";
import { toFormatSearchParams } from "shared/utils/toFormatSearchParams.ts";

export const RecipeHome = observer(() => {
  const [searchParams] = useSearchParams();
  const { recipes, isLoading, searchMeals, page, itemsPerPage, setPage, categories } = RecipeHub;

  const categoryNames = useMemo(() => categories.map((category) => category.strCategory), [categories]);

  const navigate = useNavigate();
  const goToRecipeDetails = (recipeId: string) => {
    navigate(`${ROUTES.recipeDetails.key}/${recipeId}`, {
      state: { searchQuery: searchParams.get("searchQuery"), category: searchParams.get("category") || "" },
    });
  };

  const filterRecipes = useMemo(() => {
    const category = searchParams.get("category") || "";
    return category
      ? recipes?.filter((recipe) => recipe.strCategory.toLowerCase().includes(category.toLowerCase()))
      : recipes;
  }, [searchParams, recipes]);

  const paginatedRecipes = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return filterRecipes?.slice(startIndex, startIndex + itemsPerPage) || [];
  }, [page, filterRecipes]);

  useEffect(() => {
    if (searchParams.size === 0) {
      return;
    }

    const updatedSearchQuery = toFormatSearchParams(searchParams)?.searchQuery || "";
    searchMeals(updatedSearchQuery);
  }, []);

  return (
    <ErrorBoundaryComponent>
      <FilterRecipePanel searchMeals={searchMeals} setPage={setPage} categoryNames={categoryNames} />
      <S.RecipeList>
        {paginatedRecipes.length > 0 ? (
          <>
            {paginatedRecipes?.map(({ idMeal, strCategory, strMeal, strMealThumb, strArea }) => (
              <RecipeCard
                key={idMeal}
                name={strMeal}
                category={strCategory}
                image={strMealThumb}
                country={strArea}
                onClickCard={() => goToRecipeDetails(idMeal)}
              />
            ))}
          </>
        ) : (
          <S.NoData>No data</S.NoData>
        )}

        {isLoading && <Loader />}
      </S.RecipeList>
      <Pagination
        totalLength={filterRecipes?.length || 0}
        itemsPerPage={itemsPerPage}
        page={page}
        onPageChange={setPage}
      />
    </ErrorBoundaryComponent>
  );
});
