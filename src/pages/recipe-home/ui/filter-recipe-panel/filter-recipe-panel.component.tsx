import { FilterRecipePanelProp } from "./filter-recipe-panel.type.ts";
import { useSearchParams } from "react-router-dom";
import * as S from "./filter-recipe-panel.styles.ts";
import { Select, TextField, MenuItem } from "@mui/material";
import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";
import { CategoryName } from "app/store/recipe/recipe.type.ts";

export const FilterRecipePanel = ({ searchMeals, category, setCategory }: FilterRecipePanelProp) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("searchQuery") || "");

  const debouncedUpdateParams = useCallback(
    debounce((newFilters) => {
      setSearchParams(newFilters);
      searchMeals(newFilters);
    }, 500),
    [],
  );

  useEffect(() => {
    debouncedUpdateParams(searchQuery);
  }, [searchQuery]);

  return (
    <S.FilterRecipePanelWrapper>
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter search query..."
        size="small"
      />

      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        displayEmpty
        variant="outlined"
        size="small"
      >
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
