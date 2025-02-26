import { RecipeCardProp } from "entities/recipe-card/recipe-card.type";
import {CountryCodes} from "app/store/recipe/recipe.type.ts";
import * as S from "./recipe-card.styles";

export const RecipeCard = ({ image, name, country, category, onClickCard }: RecipeCardProp) => {
  return (
      <S.CardWrapper onClick={onClickCard}>
          <S.CardImg src={image} alt={`Recipe ${name}`}/>
          <S.CardContent>
              <S.CardTitle>{name}</S.CardTitle>
              <S.CardContentDetails>
                  <S.CardCategory>{category}</S.CardCategory>
                  <S.FlagImgWrapper>
                      <S.FlagImg
                          src={`https://flagcdn.com/w320/${CountryCodes[country]}.png`}
                          alt={country}
                          className="country-flag"
                      />
                  </S.FlagImgWrapper>
              </S.CardContentDetails>
          </S.CardContent>
      </S.CardWrapper>
  );
};
