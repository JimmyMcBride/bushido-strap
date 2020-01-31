// export theme
import { createTheming } from "@callstack/react-theme-provider";
import theme from "./styled/theme";
export { default as theme } from "./styled/theme";

const { ThemeProvider, withTheme, useTheme } = createTheming(theme);

export { ThemeProvider, withTheme, useTheme };

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
