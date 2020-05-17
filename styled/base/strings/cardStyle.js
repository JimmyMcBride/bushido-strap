import {
  cursorStyle,
  boxShadow,
  cardColor,
  cardBackground,
} from "../../maps/index";

export default `
  color: ${(props) => (props.color ? props.color : cardColor)};
  background: ${(props) => (props.bg ? props.bg : cardBackground)};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.radius ? props.radius : "0.1rem")};
  opacity: ${(props) => (props.opacity ? props.opacity : "none")};
  box-shadow: ${(props) => (props.shadow ? props.shadow : boxShadow)};

  &:hover {
    border: ${(props) => (props.hvrBorder ? props.hvrBorder : "none")};
    color: ${(props) => (props.hvrColor ? props.hvrColor : "auto")};
    background: ${(props) => (props.hvrBg ? props.hvrBg : "auto")};
    cursor: ${cursorStyle};
  }
`;
