import { makeAutoObservable } from "mobx";
import { MealsResponse, Meal, MealData } from "app/store/recipe/recipe.type";
import axios from "axios";
import { transformMealData } from "app/store/recipe/recipe.utils.ts";

class RecipeStore {
  private meals: MealData[] | null;
  private backURL: string;
  private searchQuery: string;
  public isLoading: boolean;
  public isDataReady: boolean;

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
    this.backURL = "https://www.themealdb.com/api/json/v1/1/";

    this.searchQuery = "";
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

  searchMeals(searchQuery?: string) {
    this.searchQuery = searchQuery || "";
    this.getMeals(this.searchQuery);
  }

  setMealsData(meals: Meal[]) {
    this.meals = meals.map((meal) => transformMealData(meal));
  }

  async getMeals(name?: string) {
    try {
      this.isLoading = true;

      const { data } = await this.getMealByNameRequest<Meal>(name);

      if (data) {
        this.setMealsData(data.meals);
        this.isDataReady = true;
      }

      this.isLoading = false;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  async getMealByNameRequest<T>(name?: string) {
    const url = `${this.backURL}/search.php?s=${name || ""}`;
    return await axios.get<MealsResponse<T>>(url);
  }
}

export const RecipeHub = new RecipeStore();
