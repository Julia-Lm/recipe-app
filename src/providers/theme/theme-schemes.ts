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
  },
  spinner: {
    border: colorShades.lightGrey,
    backgroundColor: colorShades.green,
  },
  loader: {
    backgroundColor: colorShades.lightWhite,
  },
  categoryBadge: {
    light: {
      backgroundColor: colorShades.white,
      color: colorShades.green,
    },
    dark: {
      backgroundColor: colorShades.green,
      color: colorShades.white,
    },
  },
};

type ThemeType = typeof mainTheme;

export interface AppTheme extends ThemeType {}
