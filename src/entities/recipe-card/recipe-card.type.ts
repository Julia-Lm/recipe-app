export interface RecipeCardProp {
  image: string;
  name: string;
  category: string;
  country: string;
  isSelected: boolean;
  onClickCard?: () => void;
  onSelectCard?: () => void;
}
