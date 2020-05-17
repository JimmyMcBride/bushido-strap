import { css } from "styled-components";
import { flow, shape } from "../../maps";

export default css`
  overflow: ${(props) => (props.overflow ? props.overflow : flow)};
  clip-path: ${(props) => (props.clip ? props.clip : shape)};
`;
