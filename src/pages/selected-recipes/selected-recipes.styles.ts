import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  gap: 20px;
  margin-top: 20px;
`;

export const InnerContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 70% 27%;
  width: 100%;
  min-height: 80vh;
  gap: 3%;
`;

export const SelectCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const SelectCardItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: flex-start;
  gap: 15px;
`;
export const SelectCardTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const SelectCardDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
`;

export const TotalIngredientTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const TotalIngredientList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TotalIngredientItem = styled.div`
  text-transform: capitalize;
  font-size: 0.875rem;
  font-weight: 400;
`;

export const NoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
