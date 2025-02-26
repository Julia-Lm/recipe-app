import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.recipeCard.backgroundColor};
  width: 100%;
  min-height: 325px;
  min-width: 255px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`;

export const CardContentDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export const CardTitle = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
`;

export const CardImg = styled.img`
  max-width: 100%;
  width: 100%;
  height: 100%;
  max-height: 255px;
  object-fit: cover;
`;

