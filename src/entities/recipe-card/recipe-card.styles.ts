import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({theme})=> theme.recipeCard.backgroundColor};
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
export const FlagImgWrapper = styled.div`
    display: flex;
    width: 40px;
    height: 20px;
`
export const FlagImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

export const CardCategory = styled.div`
    background: ${({theme})=> theme.recipeCard.category.backgroundColor};
    border-radius: 10px;
    padding: 2px 10px;
    display: flex;
    width: fit-content;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({theme})=> theme.recipeCard.category.color};
`;