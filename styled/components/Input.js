import styled from "styled-components";
import {
  sideways,
  boxSize,
  marg,
  cursorStyle,
  hvrWidth,
  hvrBtnMarg,
  hvrBtnPad,
} from "../maps";
import PropTypes from "prop-types";
import { theme } from "../theme";

const Input = styled.input`
  color: ${props => (props.color ? props.color : "auto")};
  background: ${props => (props.bg ? props.bg : "auto")};
  border-radius: ${props => (props.radius ? props.radius : "0.3rem")};
  padding: ${props => (props.padding ? props.padding : "0.8rem")};
  margin: ${props => (props.margin ? props.margin : marg)};
  width: ${props => (props.width ? props.width : sideways)};
  height: ${props => (props.height ? props.height : "auto")};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
  min-height: ${props => (props.minH ? props.minH : "none")};
  max-width: ${props => (props.maxW ? props.maxW : "none")};
  min-width: ${props => (props.minW ? props.minW : "none")};
  max-height: ${props => (props.maxH ? props.maxH : "none")};
  border: ${props =>
    props.border ? props.border : `0.2rem inset ${theme.gray3}`};
  &:hover {
    border: ${props =>
      props.hvrBorder ? props.hvrBorder : `0.2rem solid ${theme.blue1}`};
    width: ${props => (props.hvrW ? props.hvrW : hvrWidth)};
    height: ${props => (props.hvrH ? props.hvrH : "auto")};
    margin: ${props => (props.hvrM ? props.hvrM : hvrBtnMarg)};
    padding: ${props => (props.hvrP ? props.hvrP : hvrBtnPad)};
    color: ${props => (props.hvrColor ? props.hvrColor : "auto")};
    background: ${props => (props.hvrBg ? props.hvrBg : theme.whiteAlpha6)};
    cursor: ${cursorStyle};
  }
`;

export default Input;

Input.propTypes = {
  // CUSTOM PROPTYPES
  radius: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  minH: PropTypes.string,
  maxW: PropTypes.string,
  minW: PropTypes.string,
  maxH: PropTypes.string,
  box_size: PropTypes.string,
};
