import { createTheming } from "@callstack/react-theme-provider";
import theme from "../theme";
const { ThemeProvider } = createTheming(theme);

const ThemeWrapper = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

ThemeWrapper.defaultProps = {
  theme
};

export default ThemeWrapper;
