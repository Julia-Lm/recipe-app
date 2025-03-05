export interface FilterRecipePanelProp {
  searchMeals: (searchQuery?: string) => void;
  setPage: (page: number) => void;
  categoryNames: string[];
}
