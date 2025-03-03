import { FilterRecipePanelProp } from "./filter-recipe-panel.type.ts";
import { useSearchParams } from "react-router-dom";
import * as S from "./filter-recipe-panel.styles.ts";
import { Select, TextField, MenuItem, SelectChangeEvent } from "@mui/material";
import debounce from "lodash.debounce";
import { ChangeEvent, useCallback, useState } from "react";
import { CategoryName } from "app/store/recipe/recipe.type.ts";

export const FilterRecipePanel = ({ searchMeals, category, setCategory }: FilterRecipePanelProp) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("searchQuery") || "");

  const debouncedUpdateParams = useCallback(
    debounce((newFilters) => {
      searchMeals(newFilters);
    }, 500),
    [],
  );

  const handleChangeSearchQuery = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);
    setSearchParams(newSearchQuery ? { searchQuery: newSearchQuery } : {});
    debouncedUpdateParams(newSearchQuery);
  };

  const handleChangeCategory = (e: SelectChangeEvent<string>) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
  };

  return (
    <S.FilterRecipePanelWrapper>
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleChangeSearchQuery}
        placeholder="Enter search query..."
        size="small"
      />

      <Select value={category} onChange={handleChangeCategory} displayEmpty variant="outlined" size="small">
        <MenuItem value="">All Categories</MenuItem>
        {CategoryName.map((category) => (
          <MenuItem value={category} key={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </S.FilterRecipePanelWrapper>
  );
};
