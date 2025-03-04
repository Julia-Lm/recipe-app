import { MealData, MealIngredient } from "app/store/recipe/recipe.type.ts";

export const getMergeMealsIngredients = (meals: MealData[] | null): MealIngredient[] => {
  if (!meals?.length) return [];

  return meals
    .flatMap((meal) => meal.ingredients)
    .reduce((acc: MealIngredient[], { ingredient, measure }) => {
      const ingredientLower = ingredient.toLowerCase().trim();

      const existingIngredient = acc.find((item) => item.ingredient === ingredientLower);

      if (existingIngredient) {
        const [existingAmount, unit] = parseMeasure(existingIngredient.measure);
        const [newAmount, newUnit] = parseMeasure(measure);

        const existingAmountNumber = typeof existingAmount === "number" ? existingAmount : 0;
        const newAmountNumber = typeof newAmount === "number" ? newAmount : 0;

        if (unit === newUnit) {
          const totalAmount = existingAmountNumber + newAmountNumber;
          existingIngredient.measure = totalAmount ? `${totalAmount} ${unit}` : `${newAmount} ${unit}`;
        } else {
          if (existingAmountNumber === 0) {
            existingIngredient.measure = `${newAmountNumber} ${newUnit}`;
          } else if (newAmountNumber === 0) {
            existingIngredient.measure = `${existingAmountNumber} ${unit}`;
          } else {
            existingIngredient.measure = `${existingAmountNumber} ${unit}, ${newAmountNumber} ${newUnit}`;
          }
        }
      } else {
        acc.push({ ingredient: ingredientLower, measure });
      }
      return acc;
    }, []);
};

const parseMeasure = (measure: string) => {
  const match = measure.match(/(\d+(\.\d+)?)\s*(\D+)/);
  if (match) {
    const amount = parseFloat(match[1]);
    const unit = match[3].trim();
    return [amount, unit];
  }
  return [0, measure.trim()];
};
