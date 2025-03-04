import { RecipeCardProp } from "entities/recipe-card/recipe-card.type";
import { CountryCodes } from "app/store/recipe/recipe.type.ts";
import { CategoryBadge, FlagImg } from "shared/ui-elements";
import { MouseEvent } from "react";
import { ReactComponent as StarIcon } from "shared/assets/icons/star-icon.svg";

import * as S from "./recipe-card.styles";

export const RecipeCard = ({
  image,
  name,
  country,
  category,
  onClickCard,
  isSelected,
  onSelectCard,
}: RecipeCardProp) => {
  const handleSelect = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onSelectCard?.();
  };
  return (
    <S.CardWrapper onClick={onClickCard}>
      {onSelectCard && (
        <S.StarIconWrapper $isSelected={isSelected} onClick={handleSelect}>
          <StarIcon />
        </S.StarIconWrapper>
      )}

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
