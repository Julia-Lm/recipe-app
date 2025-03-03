import { makeAutoObservable } from "mobx";
import {
  MealsResponse,
  Meal,
  MealData,
  GetMealDetailsRequest,
  MealCategoriesResponse,
  MealCategoriesData,
} from "app/store/recipe/recipe.type";
import axios from "axios";
import { transformMealData } from "app/store/recipe/recipe.utils.ts";
import { RecipeDetailsStore } from "app/store/recipe/recipe-details.store.ts";

class RecipeStore {
  private meals: MealData[] | null;
  private mealCategories: MealCategoriesData[] | null;
  private backURL: string;
  public isLoading: boolean;
  public isDataReady: boolean;
  public page: number;
  public itemsPerPage: number;

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
    this.backURL = "https://www.themealdb.com/api/json/v1/1/";

    this.page = 1;
    this.itemsPerPage = 8;

    this.meals = null;
    this.mealCategories = null;
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

  get categories() {
    if (this.mealCategories === null) {
      this.getMealCategories();
      return [];
    }

    return this.mealCategories;
  }

  setMealCategories(categories: MealCategoriesData[]) {
    this.mealCategories = categories;
  }

  setPage(page: number) {
    this.page = page;
  }

  searchMeals(searchQuery?: string) {
    this.getMeals(searchQuery);
  }

  setMealsData(meals: Meal[]) {
    this.meals = meals?.map((meal) => transformMealData(meal)) || [];
  }

  getMealDetailsById(params?: GetMealDetailsRequest) {
    return new RecipeDetailsStore(this.getMealDetailsByIdRequest, params);
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

  async getMealCategories() {
    try {
      const { data } = await this.getMealCategoriesRequest<MealCategoriesData>();

      if (data) {
        this.setMealCategories(data.categories);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  async getMealByNameRequest<T>(name?: string) {
    const url = `${this.backURL}/search.php?s=${name || ""}`;
    return await axios.get<MealsResponse<T>>(url);
  }

  async getMealCategoriesRequest<T>() {
    const url = `${this.backURL}/categories.php`;
    return await axios.get<MealCategoriesResponse<T>>(url);
  }

  async getMealDetailsByIdRequest<T>({ mealId }: GetMealDetailsRequest) {
    const url = `${this.backURL}/lookup.php?i=${mealId}`;
    return await axios.get<MealsResponse<T>>(url);
  }
}

export const RecipeHub = new RecipeStore();
