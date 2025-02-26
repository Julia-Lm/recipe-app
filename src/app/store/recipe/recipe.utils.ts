import { MealData, Meal } from "app/store/recipe/recipe.type.ts";

export const transformMealData = (meal: Meal): MealData => {
  const ingredients: { ingredient: string; measure: string }[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]?.trim();
    const measure = meal[`strMeasure${i}`]?.trim();

    if (ingredient) {
      ingredients.push({ ingredient, measure });
    }
  }

  return {
    idMeal: meal.idMeal,
    strMeal: meal.strMeal,
    strDrinkAlternate: meal.strDrinkAlternate,
    strCategory: meal.strCategory,
    strArea: meal.strArea,
    strInstructions: meal.strInstructions,
    strMealThumb: meal.strMealThumb,
    strTags: meal.strTags,
    strYoutube: meal.strYoutube,
    strSource: meal.strSource,
    strImageSource: meal.strImageSource,
    strCreativeCommonsConfirmed: meal.strCreativeCommonsConfirmed,
    dateModified: meal.dateModified,
    ingredients,
  };
};
