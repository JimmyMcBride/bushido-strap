import { createTheming } from "@callstack/react-theme-provider";
import theme from "./styled/theme";
const { ThemeProvider } = createTheming(theme);
export default ThemeProvider;
