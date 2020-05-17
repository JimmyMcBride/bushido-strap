import { css } from "styled-components";
import { cursorStyle, boxShadow } from "../../maps";

export default css`
  color: ${(props) => (props.color ? props.color : "auto")};
  background: ${(props) => (props.bg ? props.bg : "auto")};
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
