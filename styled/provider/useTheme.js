import { createTheming } from "@callstack/react-theme-provider";
import theme from "./styled/theme";
const { useTheme } = createTheming(theme);
export default useTheme;
