import styled from "styled-components";
import {
  sideways,
  longways,
  boxSize,
  textMarg,
  textPad,
  textAlign,
  cursorStyle,
} from "../maps";

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
  min-height: ${props => (props.minH ? props.minH : "none")};
  max-width: ${props => (props.maxW ? props.maxW : "none")};
  min-width: ${props => (props.minW ? props.minW : "none")};
  max-height: ${props => (props.maxH ? props.maxH : "none")};
  text-align: ${textAlign};
  &:hover {
    cursor: ${cursorStyle};
  }
`;

export default TextArea;
