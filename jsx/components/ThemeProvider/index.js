import React from "react";

import { theme as defaultTheme } from "../../../styled/theme";

import { createTheming } from "@callstack/react-theme-provider";

const { ThemeProvider, withTheme, useTheme } = createTheming(defaultTheme);

import PropTypes from "prop-types";

const ThemeWrapper = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

ThemeWrapper.defaultProps = {
  theme: defaultTheme,
};

export default ThemeWrapper;
export { withTheme, useTheme };

ThemeWrapper.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.any,
};
