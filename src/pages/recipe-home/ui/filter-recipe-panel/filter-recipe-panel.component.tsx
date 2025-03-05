import { FilterRecipePanelProp } from "./filter-recipe-panel.type.ts";
import { useSearchParams } from "react-router-dom";
import * as S from "./filter-recipe-panel.styles.ts";
import { Select, TextField, MenuItem, SelectChangeEvent } from "@mui/material";
import debounce from "lodash.debounce";
import { ChangeEvent, useCallback, useState } from "react";
import { SearchParamsNames } from "app/store/recipe/recipe.type.ts";

export const FilterRecipePanel = ({ searchMeals, setPage, categoryNames }: FilterRecipePanelProp) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get(SearchParamsNames.searchQuery) || "",
  );
  const [category, setCategory] = useState<string>(searchParams.get(SearchParamsNames.category) || "");

  const debouncedUpdateParams = useCallback(
    debounce((newFilters) => {
      searchMeals(newFilters);
    }, 500),
    [],
  );

  const handleChangeSearchQuery = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newSearchQuery = e.target.value;

    setSearchQuery(newSearchQuery);
    updateSearchParams(SearchParamsNames.searchQuery, newSearchQuery);
    setPage(1);
    debouncedUpdateParams(newSearchQuery);
  };

  const handleChangeCategory = (e: SelectChangeEvent) => {
    const newCategory = e.target.value;

    updateSearchParams(SearchParamsNames.category, newCategory);
    setPage(1);
    setCategory(newCategory);
  };

  const updateSearchParams = (key: string, value: string | undefined) => {
    setSearchParams((prevParams) => {
      const updatedParams = new URLSearchParams(prevParams);

      if (value) {
        updatedParams.set(key, value);
      } else {
        updatedParams.delete(key);
      }

      return updatedParams;
    });
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

      <Select
        value={category}
        onChange={handleChangeCategory}
        displayEmpty
        variant="outlined"
        size="small"
        MenuProps={{
          style: {
            maxHeight: "350px",
          },
        }}
      >
        <MenuItem value="">All Categories</MenuItem>
        {categoryNames.map((category) => (
          <MenuItem value={category} key={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </S.FilterRecipePanelWrapper>
  );
};
