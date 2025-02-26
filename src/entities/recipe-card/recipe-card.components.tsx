import { RecipeCardProp } from "entities/recipe-card/recipe-card.type";
import { CountryCodes } from "app/store/recipe/recipe.type.ts";
import { CategoryBadge, FlagImg } from "shared/ui-elements";

import * as S from "./recipe-card.styles";

export const RecipeCard = ({ image, name, country, category, onClickCard }: RecipeCardProp) => {
  return (
    <S.CardWrapper onClick={onClickCard}>
      <S.CardImg src={image} alt={`Recipe ${name}`} />
      <S.CardContent>
        <S.CardTitle>{name}</S.CardTitle>
        <S.CardContentDetails>
          <CategoryBadge>{category}</CategoryBadge>
          <FlagImg src={`https://flagcdn.com/w320/${CountryCodes[country]}.png`} alt={country} />
        </S.CardContentDetails>
      </S.CardContent>
    </S.CardWrapper>
  );
};
