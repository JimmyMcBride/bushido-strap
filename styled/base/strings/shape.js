import { flow, shape } from "../../maps/index";

export default `
  overflow: ${(props) => (props.overflow ? props.overflow : flow)};
  clip-path: ${(props) => (props.clip ? props.clip : shape)};
`;
