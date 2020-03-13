import styled from "styled-components";
import {
  sideways,
  longways,
  boxSize,
  textMarg,
  textPad,
  textAlign,
} from "../maps";

// const TextArea = props => {
//   return <Area {...props} />;
// };

const TextArea = styled.textarea`
  color: ${props => (props.color ? props.color : "auto")};
  background: ${props => (props.bg ? props.bg : "white")};
  border-radius: ${props => (props.radius ? props.radius : "0.5rem")};
  padding: ${props => (props.p ? props.p : textPad)};
  margin: ${props => (props.m ? props.m : textMarg)};
  width: ${props => (props.w ? props.w : sideways)};
  height: ${props => (props.h ? props.h : longways)};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
  border: ${props => (props.border ? props.border : `0.5px solid #C4C4C4`)};
  text-align: ${textAlign};
`;

export default TextArea;
