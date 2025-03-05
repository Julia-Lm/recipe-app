export interface PaginationProps {
  page: number;
  totalLength: number;
  itemsPerPage: number;
  onPageChange: (value: number) => void;
}
