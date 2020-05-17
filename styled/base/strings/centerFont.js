import { textCenter, fontSize, fontWeight } from "../../maps/index";

export default `
  font-family: ${(props) => (props.font ? props.font : "inherit")};
  font-size: ${(props) => (props.fSize ? props.fSize : fontSize)};
  font-weight: ${(props) => (props.weight ? props.weight : fontWeight)};
  text-decoration: ${(props) => (props.textDec ? props.textDec : "none")}
  text-align: ${textCenter};
`;
