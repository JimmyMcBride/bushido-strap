import styled from "styled-components";
import {
  sideways,
  longways,
  boxSize,
  marg,
  pad,
  fontSize,
  textAlign,
  fontWeight,
} from "../maps";
import PropTypes from "prop-types";

const Text = styled.div`
  color: ${props => (props.color ? props.color : "auto")};
  background: ${props => (props.background ? props.background : "none")};
  height: ${props => (props.h ? props.h : props.sqr ? props.sqr : longways)};
  width: ${props => (props.w ? props.w : props.sqr ? props.sqr : sideways)};
  padding: ${props => (props.p ? props.p : pad)};
  margin: ${props => (props.m ? props.m : marg)};
  min-height: ${props => (props.min_h ? props.min_h : "none")};
  max-width: ${props => (props.max_w ? props.max_w : "none")};
  min-width: ${props => (props.min_w ? props.min_w : "none")};
  max-height: ${props => (props.max_h ? props.max_h : "none")};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
  font-size: ${props => (props.f_size ? props.f_size : fontSize)};
  font-weight: ${props => (props.weight ? props.weight : fontWeight)};
  text-align: ${textAlign};
`;

export default Text;

Text.propTypes = {
  // CUSTOM PROPTYPES
  h: PropTypes.string,
  w: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  min_h: PropTypes.string,
  max_w: PropTypes.string,
  min_w: PropTypes.string,
  max_h: PropTypes.string,
  p: PropTypes.string,
  m: PropTypes.string,
};
