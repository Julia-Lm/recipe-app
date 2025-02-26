import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  grid-template-columns: 45% 50%;
  min-height: 80vh;
  align-items: center;
  gap: 5%;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RecipeDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export const RecipeImg = styled.img`
  border-radius: 10px;
  max-width: 100%;
  height: auto;
  margin: auto 0;
`;

export const Title = styled.p`
  font-size: 1.75rem;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const InstructionDescription = styled.p`
  font-weight: 400;
  font-size: 1rem;
`;

export const NoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1/3;
`;
