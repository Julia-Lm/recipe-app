import { colorShades } from "./color-shades.ts";

export const mainTheme = {
  bodyBackground: colorShades.white,
  text: colorShades.black,
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
  input: {
    label: colorShades.black,
    background: colorShades.white,
    border: colorShades.black,
    color: colorShades.black,
    disabledBackground: colorShades.white,
    disabledBorder: colorShades.black,
    disabledText: colorShades.black,
    error: colorShades.red,
  },
};

type ThemeType = typeof mainTheme;

export interface AppTheme extends ThemeType {}
