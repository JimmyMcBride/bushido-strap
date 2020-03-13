import React from "react";

import theme from "../../../styled/theme";

import { createTheming } from "@callstack/react-theme-provider";

const { ThemeProvider, withTheme, useTheme } = createTheming(theme);

import PropTypes from "prop-types";

const ThemeWrapper = ({ theme, children }) => (
  <ThemeProvider theme={theme.primary}>{children}</ThemeProvider>
);

ThemeWrapper.defaultProps = {
  theme,
};

export default ThemeWrapper;
export { withTheme, useTheme };

ThemeWrapper.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.any,
};
