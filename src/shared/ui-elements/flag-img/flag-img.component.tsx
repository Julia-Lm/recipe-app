import { FlagImgProps } from "shared/ui-elements/flag-img/flag-img.type.ts";
import * as S from "./flag-img.styles";

export const FlagImg = ({ src, alt }: FlagImgProps) => {
  return (
    <S.FlagImgWrapper>
      <S.FlagImg src={src} alt={alt} />
    </S.FlagImgWrapper>
  );
};
