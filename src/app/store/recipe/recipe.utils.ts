import { MealData, Meal } from "app/store/recipe/recipe.type.ts";

export const transformMealData = (meal: Meal): MealData => {
  const ingredients = Object.keys(meal)
      .filter((key) => key.startsWith("strIngredient") && meal[key]?.trim())
      .reduce<{ ingredient: string; measure: string }[]>((acc, key) => {
        const index = key.replace("strIngredient", "");
        const ingredient = meal[key]?.trim();
        const measure = meal[`strMeasure${index}`]?.trim() || "";

        if (ingredient) {
          acc.push({ ingredient, measure });
        }

        return acc;
      }, []);

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
