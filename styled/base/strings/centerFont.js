import { css } from "styled-components";
import { textCenter, fontSize, fontWeight } from "../../maps";

export default css`
  font-family: ${(props) => (props.font ? props.font : "inherit")};
  font-size: ${(props) => (props.fSize ? props.fSize : fontSize)};
  font-weight: ${(props) => (props.weight ? props.weight : fontWeight)};
  text-decoration: ${(props) => (props.textDec ? props.textDec : "none")}
  text-align: ${textCenter};
`;
