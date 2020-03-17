import styled from "styled-components";
import {
  sideways,
  boxSize,
  marg,
  pad,
  fontSize,
  textAlign,
  fontWeight,
  cursorStyle,
} from "../maps";
import PropTypes from "prop-types";

const Text = styled.div`
  color: ${props => (props.color ? props.color : "auto")};
  background: ${props => (props.background ? props.background : "none")};
  height: ${props => (props.h ? props.h : props.sqr ? props.sqr : "auto")};
  width: ${props => (props.w ? props.w : props.sqr ? props.sqr : sideways)};
  padding: ${props => (props.p ? props.p : pad)};
  margin: ${props => (props.m ? props.m : marg)};
  min-height: ${props => (props.minH ? props.minH : "none")};
  max-width: ${props => (props.maxW ? props.maxW : "none")};
  min-width: ${props => (props.minW ? props.minW : "none")};
  max-height: ${props => (props.maxH ? props.maxH : "none")};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
  font-size: ${props => (props.f_size ? props.f_size : fontSize)};
  font-weight: ${props => (props.weight ? props.weight : fontWeight)};
  text-align: ${textAlign};
  &:hover {
    border: ${props => (props.hvrBorder ? props.hvrBorder : "none")};
    color: ${props => (props.hvrColor ? props.hvrColor : "auto")};
    background: ${props => (props.hvrBg ? props.hvrBg : "auto")};
    cursor: ${cursorStyle};
  }
`;

export default Text;

Text.propTypes = {
  // CUSTOM PROPTYPES
  h: PropTypes.string,
  w: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  minH: PropTypes.string,
  maxW: PropTypes.string,
  minW: PropTypes.string,
  maxH: PropTypes.string,
  p: PropTypes.string,
  m: PropTypes.string,
  hvrBorder: PropTypes.string,
  hvrRadius: PropTypes.string,
  hvrW: PropTypes.string,
  hvrH: PropTypes.string,
  hvrM: PropTypes.string,
  hvrP: PropTypes.string,
  hvrColor: PropTypes.string,
  hvrBg: PropTypes.string,
};
