import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${({ theme }) => theme.recipeCard.backgroundColor};
  width: 100%;
  min-height: 325px;
  min-width: 255px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const CardImg = styled.img`
  max-width: 100%;
  width: 100%;
  height: 100%;
  max-height: 255px;
  object-fit: cover;
  object-position: center;
  margin-bottom: auto;
`;

export const StarIconWrapper = styled("div")<{ $isSelected: boolean }>`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
  z-index: 5;
  cursor: pointer;

  & svg {
    width: 100%;
    height: 100%;

    & path {
      fill: ${({ $isSelected }) => ($isSelected ? "orange" : "white")};
      stroke: #000;
    }
  }
`;
