import { Pagination as MUIPagination } from "@mui/material";
import { useMemo } from "react";
import { PaginationProps } from "entities/pagination/pagination.type.ts";

export const Pagination = ({ page, totalLength, itemsPerPage, onPageChange }: PaginationProps) => {
  const totalPages = useMemo(() => {
    return Math.ceil((totalLength || 0) / itemsPerPage);
  }, [totalLength, itemsPerPage]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <MUIPagination
      count={totalPages <= 10 ? totalPages : 10}
      page={page}
      onChange={handlePageChange}
      variant="outlined"
      shape="rounded"
      sx={{ margin: "20px auto", display: "flex", justifyContent: "space-between" }}
    />
  );
};
