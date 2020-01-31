import React from "react";

import { createTheming } from "@callstack/react-theme-provider";

const { ThemeProvider, withTheme, useTheme } = createTheming(defaultTheme);

import theme from "../theme";

const ThemeWrapper = ({ theme, children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

ThemeWrapper.defaultProps = {
  theme
};

export default ThemeWrapper;
export default withTheme;
export default useTheme;
