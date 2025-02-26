export interface MealData {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
  ingredients: MealIngredient[];
}

export interface MealIngredient {
  ingredient: string;
  measure: string;
}

export interface Meal extends StrIngredient, StrMeasure {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
}

export interface StrIngredient {
  [key: `strIngredient${number}`]: string;
}

export interface StrMeasure {
  [key: `strMeasure${number}`]: string;
}

export interface MealsResponse<T> {
  meals: T[];
}
