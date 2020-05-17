import styledMap from "styled-map";
import { theme } from "../../../theme";

export default styledMap`
  shade: ${theme.shadows[1]};
  backlight: ${theme.glows[1]};
  default: none;
`;
