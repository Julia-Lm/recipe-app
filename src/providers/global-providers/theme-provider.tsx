import { ReactNode } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { GlobalCSSStyle } from "../theme/global-styles.tsx";
import { ThemesSchemes } from "providers/theme/theme-schemes.ts";
import { ThemesName } from "providers/theme/theme.types.ts";

export const ThemeProvider = ({ children }: { children?: ReactNode }) => {
  return (
    <SCThemeProvider
      theme={{
        ...ThemesSchemes[ThemesName.light],
      }}
    >
      <GlobalCSSStyle />
      {children}
    </SCThemeProvider>
  );
};
