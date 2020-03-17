import styled from "styled-components";
import { sideways, boxSize, textMarg, textPad, cursorStyle } from "../maps";

const Select = styled.select`
  color: ${props => (props.color ? props.color : "auto")};
  background: ${props => (props.bg ? props.bg : "white")};
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
  border: ${props => (props.border ? props.border : `0.5px solid #C4C4C4`)};
  &:hover {
    border: ${props => (props.hvrBorder ? props.hvrBorder : "none")};
    width: ${props => (props.hvrW ? props.hvrW : sideways)};
    height: ${props => (props.hvrH ? props.hvrH : "auto")};
    margin: ${props => (props.hvrM ? props.hvrM : btnMarg)};
    padding: ${props => (props.hvrP ? props.hvrP : btnPad)};
    color: ${props => (props.hvrColor ? props.hvrColor : "auto")};
    background: ${props => (props.hvrBg ? props.hvrBg : "auto")};
    cursor: ${cursorStyle};
  }
`;

export default Select;
