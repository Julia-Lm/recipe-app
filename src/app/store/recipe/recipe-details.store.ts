import { makeAutoObservable } from "mobx";
import {MealsResponse, Meal, GetMealDetailsRequest, MealData} from "app/store/recipe/recipe.type";
import {AxiosResponse} from "axios";
import { transformMealData } from "app/store/recipe/recipe.utils.ts";

export type RecipeDetailsFetchMethod<T> = (params: GetMealDetailsRequest) => Promise<
    AxiosResponse<MealsResponse<T>, any> & {
  message?: string | undefined;
}
>;

export class RecipeDetailsStore<T extends Meal> {
  private meals: MealData[] | null;
  private mealId?: string | null;
  public isLoading: boolean;
  public isDataReady: boolean;

  private readonly recipeDetailsRequest: RecipeDetailsFetchMethod<T>;

  constructor(fetchMethod: RecipeDetailsFetchMethod<T>, params?: GetMealDetailsRequest) {
    makeAutoObservable(this, undefined, { autoBind: true });
    this.recipeDetailsRequest = fetchMethod;

    this.mealId = params?.mealId || null;
    this.meals = null;
    this.isLoading = false;
    this.isDataReady = false;
  }

  get recipeDetails() {
    if (!this.isDataReady && this.meals === null && !this.isLoading) {
      this.getMeals();
      return undefined;
    }

    return this.meals?.[0];
  }

  setDetailsId(mealId?: string | null) {
    this.mealId = mealId;
  }

  setMealsData(meals: T[]) {
    this.meals = meals.map((meal) => transformMealData(meal));
  }

  async getMeals(mealId?: string) {
    try {
      this.isLoading = true;

      const detailsId = mealId || this.mealId;

      if (!detailsId) return;

      const { data } = await this.recipeDetailsRequest({mealId: detailsId});

      if (data) {
        this.setMealsData(data.meals);
        this.isDataReady = true;
      }

      this.isLoading = false;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
}

