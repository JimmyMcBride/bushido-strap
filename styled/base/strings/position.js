import { css } from "styled-components";

export default css`
  position: ${(props) => (props.position ? props.position : "fixed")};
  top: ${(props) => (props.top ? props.top : "auto")}
  right: ${(props) => (props.right ? props.right : "auto")}
  bottom: ${(props) => (props.bottom ? props.bottom : "auto")}
  left: ${(props) => (props.left ? props.left : "auto")}
`;
