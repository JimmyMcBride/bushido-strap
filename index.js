// export theme stuff
import { jsx, ThemeContext } from "@emotion/core";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { useContext } from "react";
import theme from "../theme";

const ThemeProvider = ({ theme, children }) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
);

ThemeProvider.defaultProps = {
  theme
};

const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (theme === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return theme;
};

export default ThemeProvider;
export { useTheme };

// export components
export { default as AppWrapper } from "./styled/components/AppWrapper";
export { default as Wrapper } from "./styled/components/Wrapper";
export { default as NavBar } from "./styled/components/NavBar";
export { default as FlexBox } from "./styled/components/FlexBox";
export { default as Form } from "./styled/components/Form";
export { default as Input } from "./styled/components/Input";
export { default as Button } from "./styled/components/Button";
export { default as Linkton } from "./styled/components/Linkton";
export { default as Card } from "./styled/components/Card";
export { default as Box } from "./styled/components/Box";
export { default as Row } from "./styled/components/Row";
export { default as Col } from "./styled/components/Col";
