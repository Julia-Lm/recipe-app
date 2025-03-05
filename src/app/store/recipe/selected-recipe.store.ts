import { makeAutoObservable } from "mobx";
import { MealsResponse, Meal, GetMealDetailsRequest, MealData } from "app/store/recipe/recipe.type";
import { AxiosResponse } from "axios";
import { transformMealData } from "app/store/recipe/recipe.utils.ts";

export type SelectedRecipeFetchMethod<T> = (params: GetMealDetailsRequest) => Promise<
  AxiosResponse<MealsResponse<T>, any> & {
    message?: string | undefined;
  }
>;

export class SelectedRecipeStore<T extends Meal> {
  private meals: MealData[] | null;
  private selectedRecipeIds: string[];
  public isLoading: boolean;
  public isDataReady: boolean;

  private readonly selectedRecipeRequest: SelectedRecipeFetchMethod<T>;

  constructor(fetchMethod: SelectedRecipeFetchMethod<T>, selectedRecipeIds: string[]) {
    makeAutoObservable(this, undefined, { autoBind: true });
    this.selectedRecipeRequest = fetchMethod;

    this.selectedRecipeIds = selectedRecipeIds;
    this.meals = null;
    this.isLoading = false;
    this.isDataReady = false;
  }

  get recipes() {
    if (!this.isDataReady && this.meals === null && !this.isLoading) {
      this.getMeals();
      return [];
    }

    return this.meals;
  }

  setDetailsIds(mealIds: string[]) {
    this.selectedRecipeIds = mealIds;
  }

  setMealsData(meals: T[]) {
    this.meals = meals.map((meal) => transformMealData(meal));
  }

  async getMeals(mealIds?: string[]) {
    try {
      this.isLoading = true;

      const detailsIds = mealIds || this.selectedRecipeIds;

      if (!detailsIds?.length) {
        this.isLoading = false;
        return;
      }

      const responses = await Promise.all(detailsIds.map((id) => this.selectedRecipeRequest({ mealId: id })));

      const data = responses.map((res) => res.data.meals?.[0]).filter(Boolean);

      if (data) {
        this.setMealsData(data);
        this.isDataReady = true;
      }

      this.isLoading = false;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
}
