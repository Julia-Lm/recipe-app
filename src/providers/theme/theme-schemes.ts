import { colorShades } from "./color-shades.ts";
import { ThemesName } from "providers/theme/theme.types.ts";

export const lightTheme = {
  bodyBackground: colorShades.white,
};

export const darkTheme = {
  bodyBackground: colorShades.obsidian,
};

type ThemeType = typeof lightTheme;

export const ThemesSchemes = {
  [ThemesName.light]: lightTheme,
  [ThemesName.dark]: darkTheme,
};

export interface AppTheme extends ThemeType {}
