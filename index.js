// export theme stuff
import ThemeWrapper from "./jsx/components/ThemeProvider";

import { withTheme, useTheme } from "./jsx/components/ThemeProvider";

export { theme } from "./styled/theme";

// export hooks
import { useModal } from "./jsx/hooks/useModal";

// jsx components
import NavLink from "./jsx/components/NavLink";
import Modal from "./jsx/components/Modal";

// exports
export { ThemeWrapper, withTheme, NavLink, useModal, useTheme, Modal };

// export style components
export { default as AppWrapper } from "./styled/components/AppWrapper";
export { default as Wrapper } from "./styled/components/Wrapper";
export { default as NavBar } from "./styled/components/NavBar";
export { default as Flex } from "./styled/components/Flex";
export { default as Form } from "./styled/components/Form";
export { default as Input } from "./styled/components/Input";
export { default as Button } from "./styled/components/Button";
export { default as Card } from "./styled/components/Card";
export { default as Box } from "./styled/components/Box";
export { default as Hero } from "./styled/components/Hero";
export { default as Text } from "./styled/components/Text";
export { default as ToolTip } from "./styled/components/ToolTip";
