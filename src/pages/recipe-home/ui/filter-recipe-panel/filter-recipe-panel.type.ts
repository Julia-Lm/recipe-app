import { Dispatch, SetStateAction } from "react";

export interface FilterRecipePanelProp {
  searchMeals: (searchQuery?: string) => void;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}
