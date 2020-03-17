import styled from "styled-components";
import {
  sideways,
  boxSize,
  textMarg,
  textPad,
  textAlign,
  cursorStyle,
  hvrWidth,
} from "../maps";

const Option = styled.option`
  color: ${props => (props.color ? props.color : "auto")};
  background: ${props => (props.bg ? props.bg : "white")};
  border: ${props => (props.border ? props.border : `0.5px solid #C4C4C4`)};
  border-radius: ${props => (props.radius ? props.radius : "0.5rem")};
  padding: ${props => (props.p ? props.p : textPad)};
  margin: ${props => (props.m ? props.m : textMarg)};
  width: ${props => (props.w ? props.w : sideways)};
  height: ${props => (props.h ? props.h : "auto")};
  min-height: ${props => (props.minH ? props.minH : "none")};
  max-width: ${props => (props.maxW ? props.maxW : "none")};
  min-width: ${props => (props.minW ? props.minW : "none")};
  max-height: ${props => (props.maxH ? props.maxH : "none")};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
  text-align: ${textAlign};
  &:hover {
    border: ${props => (props.hvrBorder ? props.hvrBorder : "none")};
    width: ${props => (props.hvrW ? props.hvrW : hvrWidth)};
    height: ${props => (props.hvrH ? props.hvrH : "auto")};
    color: ${props => (props.hvrColor ? props.hvrColor : "auto")};
    background: ${props => (props.hvrBg ? props.hvrBg : "auto")};
    cursor: ${cursorStyle};
  }
`;

export default Option;
