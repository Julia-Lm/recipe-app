import styled from "styled-components";

export const RecipeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  position: relative;
  min-height: 70vh;
  width: 100%;
  margin-bottom: 20px;
`;

export const NoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1/5;
  grid-row: 1/3;
`;
