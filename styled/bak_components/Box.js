import styled from "styled-components";
import {
  sideways,
  boxShadow,
  boxSize,
  shape,
  marg,
  pad,
  flow,
  textAlign,
  cursorStyle,
} from "../maps";
import PropTypes from "prop-types";

const Box = styled.div`
  height: ${props => (props.h ? props.h : props.sqr ? props.sqr : "auto")};
  width: ${props => (props.w ? props.w : props.sqr ? props.sqr : sideways)};
  min-height: ${props => (props.minH ? props.minH : "none")};
  max-width: ${props => (props.maxW ? props.maxW : "none")};
  min-width: ${props => (props.minW ? props.minW : "none")};
  max-height: ${props => (props.maxH ? props.maxH : "none")};
  background: ${props => (props.bg ? props.bg : "none")};
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0.1rem")};
  color: ${props => (props.color ? props.color : "auto")};
  margin: ${props => (props.m ? props.m : marg)};
  padding: ${props => (props.p ? props.p : pad)};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  box-shadow: ${props => (props.shadow ? props.shadow : boxShadow)};
  box-sizing: ${props => (props.boxSize ? props.boxSize : boxSize)};
  overflow: ${props => (props.overflow ? props.overflow : flow)};
  clip-path: ${props => (props.clip ? props.clip : shape)};
  text-align: ${textAlign};

  img {
    width: 100%;
    height: auto;
  }

  &:hover {
    border: ${props => (props.hvrBorder ? props.hvrBorder : "none")};
    color: ${props => (props.hvrColor ? props.hvrColor : "auto")};
    background: ${props => (props.hvrBg ? props.hvrBg : "auto")};
    cursor: ${cursorStyle};
  }
`;

export default Box;

Box.propTypes = {
  // CUSTOM PROPTYPES
  minH: PropTypes.string,
  maxW: PropTypes.string,
  minW: PropTypes.string,
  maxH: PropTypes.string,
  h: PropTypes.string,
  w: PropTypes.string,
  bg: PropTypes.string,
  radius: PropTypes.string,
  color: PropTypes.string,
  m: PropTypes.string,
  p: PropTypes.string,
  opacity: PropTypes.string,
  shadow: PropTypes.string,
  boxSize: PropTypes.string,
  ovr_flow: PropTypes.string,
  clip: PropTypes.string,
  sqr: PropTypes.string,
  hvrBorder: PropTypes.string,
  hvrW: PropTypes.string,
  hvrH: PropTypes.string,
  hvrM: PropTypes.string,
  hvrP: PropTypes.string,
  hvrColor: PropTypes.string,
  hvrBg: PropTypes.string,
};
