import styled from "styled-components";
import { sideways, boxSize, marg, cursorStyle } from "../maps";
import PropTypes from "prop-types";
import { theme } from "../theme";

const Input = styled.input`
  color: ${(props) => (props.color ? props.color : "auto")};
  background: ${(props) => (props.bg ? props.bg : "auto")};
  border-radius: ${(props) => (props.radius ? props.radius : "0.3rem")};
  padding: ${(props) => (props.p ? props.p : "0.8rem")};
  margin: ${(props) => (props.m ? props.m : marg)};
  width: ${(props) => (props.w ? props.w : sideways)};
  height: ${(props) => (props.h ? props.h : "auto")};
  box-sizing: ${(props) => (props.box_size ? props.box_size : boxSize)};
  min-height: ${(props) => (props.minH ? props.minH : "none")};
  max-width: ${(props) => (props.maxW ? props.maxW : "none")};
  min-width: ${(props) => (props.minW ? props.minW : "none")};
  max-height: ${(props) => (props.maxH ? props.maxH : "none")};
  border: ${(props) =>
    props.border ? props.border : `0.2rem inset ${theme.colors.gray3}`};
  &:hover {
    border: ${(props) =>
      props.hvrBorder ? props.hvrBorder : `0.2rem solid ${theme.colors.gray6}`};
    color: ${(props) => (props.hvrColor ? props.hvrColor : "auto")};
    background: ${(props) => (props.hvrBg ? props.hvrBg : "none")};
    cursor: ${cursorStyle};
  }
`;

export default Input;

Input.propTypes = {
  // CUSTOM PROPTYPES
  radius: PropTypes.string,
  p: PropTypes.string,
  m: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.string,
  minH: PropTypes.string,
  maxW: PropTypes.string,
  minW: PropTypes.string,
  maxH: PropTypes.string,
  boxSize: PropTypes.string,
};
