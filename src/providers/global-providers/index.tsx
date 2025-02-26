import { ContextProvider } from "providers/global-providers/context-provider.tsx";
import { ThemeProvider } from "providers/global-providers/theme-provider.tsx";
import { ReactNode } from "react";
import { ErrorBoundaryComponent } from "providers/global-providers/error-boundary.tsx";

export const WrapperProviders = ({ children }: { children?: ReactNode }) => {
  return (
    <ContextProvider>
      <ThemeProvider>
        <ErrorBoundaryComponent>{children}</ErrorBoundaryComponent>
      </ThemeProvider>
    </ContextProvider>
  );
};
