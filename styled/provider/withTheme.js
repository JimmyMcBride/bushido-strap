import { createTheming } from "@callstack/react-theme-provider";
import theme from "./styled/theme";
const { withTheme } = createTheming(theme);
export default withTheme;
