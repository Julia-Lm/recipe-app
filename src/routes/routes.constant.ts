export enum ROUTES_KEYS {
  home = "/",
  recipeDetails = "recipe-details",
  selectedRecipes = "selected-recipes",
}

export const ROUTES = {
  basePath: "/",
  home: {
    key: ROUTES_KEYS.home,
    url: ROUTES_KEYS.home,
  },
  recipeDetails: {
    key: ROUTES_KEYS.recipeDetails,
    url: `/${ROUTES_KEYS.recipeDetails}/:recipeId`,
  },
  selectedRecipes: {
    key: ROUTES_KEYS.selectedRecipes,
    url: `/${ROUTES_KEYS.selectedRecipes}`,
  },
};
