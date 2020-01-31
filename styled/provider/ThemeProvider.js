import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import theme from "../theme";

const ThemeProvider = ({ theme, children }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

ThemeProvider.defaultProps = {
  theme
};

export default ThemeProvider;
