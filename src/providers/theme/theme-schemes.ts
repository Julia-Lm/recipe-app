import { colorShades } from "./color-shades.ts";

export const mainTheme = {
  bodyBackground: colorShades.white,
  header: {
    border: colorShades.green,
    link: {
      color: colorShades.green,
    },
  },
  recipeCard: {
    backgroundColor: colorShades.lightBeige,
    category: {
      backgroundColor: colorShades.white,
      color: colorShades.green
    }
  },
  spinner: {
    border: colorShades.lightGrey,
    backgroundColor: colorShades.green,
  },
  loader: {
    backgroundColor: colorShades.lightWhite,
  }
};

type ThemeType = typeof mainTheme;

export interface AppTheme extends ThemeType {}
