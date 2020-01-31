import styled from "styled-components";
import {
  sideways,
  longways,
  boxShadow,
  boxSize,
  shape,
  marg,
  pad,
  flow
} from "../maps";
import PropTypes from "prop-types";

const Box = styled.div`
  height: ${props => (props.h ? props.h : props.sqr ? props.sqr : longways)};
  width: ${props => (props.w ? props.w : props.sqr ? props.sqr : sideways)};
  min-height: ${props => (props.min_h ? props.min_h : "auto")};
  max-width: ${props => (props.max_w ? props.max_w : "auto")};
  min-width: ${props => (props.min_w ? props.min_w : "auto")};
  max-height: ${props => (props.max_h ? props.max_h : "auto")};
  background: ${props => (props.bg ? props.bg : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0.3rem")};
  color: ${props => (props.color ? props.color : "auto")};
  margin: ${props => (props.m ? props.m : marg)};
  padding: ${props => (props.p ? props.p : pad)};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  box-shadow: ${props => (props.shadow ? props.shadow : boxShadow)};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
  overflow: ${props => (props.overflow ? props.overflow : flow)};
  clip-path: ${props => (props.clip ? props.clip : shape)};
  img {
    width: 100%;
    height: auto;
  }
`;

export default Box;

Box.propTypes = {
  // CUSTOM PROPTYPES
  min_h: PropTypes.string,
  max_w: PropTypes.string,
  min_w: PropTypes.string,
  max_h: PropTypes.string,
  h: PropTypes.string,
  w: PropTypes.string,
  bg: PropTypes.string,
  radius: PropTypes.string,
  color: PropTypes.string,
  m: PropTypes.string,
  p: PropTypes.string,
  opacity: PropTypes.string,
  shadow: PropTypes.string,
  box_size: PropTypes.string,
  ovr_flow: PropTypes.string,
  clip: PropTypes.string,
  sqr: PropTypes.string
};
