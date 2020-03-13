import React from "react";

import { theme } from "../theme";

import { createTheming } from "@callstack/react-theme-provider";

const { ThemeProvider, withTheme, useTheme } = createTheming(defaultTheme);

const ThemeWrapper = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

ThemeWrapper.defaultProps = {
  theme,
};

export default ThemeWrapper;
export default withTheme;
export default useTheme;
