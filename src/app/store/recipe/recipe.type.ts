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

export const CountryCodes: Record<string, string> = {
  Moroccan: "ma",
  American: "us",
  British: "gb",
  Canadian: "ca",
  Chinese: "cn",
  Croatian: "hr",
  Dutch: "nl",
  Egyptian: "eg",
  French: "fr",
  Greek: "gr",
  Indian: "in",
  Irish: "ie",
  Italian: "it",
  Jamaican: "jm",
  Japanese: "jp",
  Kenyan: "ke",
  Malaysian: "my",
  Mexican: "mx",
  Russian: "ru",
  Spanish: "es",
  Thai: "th",
  Tunisian: "tn",
  Turkish: "tr",
  Vietnamese: "vn",
  Norwegian: "no",
  Filipino: "ph",
};

export const CategoryName = [
  "Chicken",
  "Beef",
  "Vegetarian",
  "Side",
  "Seafood",
  "Pork",
  "Miscellaneous",
  "Pasta",
  "Dessert",
  "Lamb",
];

export interface GetMealDetailsRequest {
  mealId: string;
}
