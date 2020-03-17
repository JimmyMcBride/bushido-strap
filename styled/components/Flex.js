import styled from "styled-components";
import {
  sideways,
  longways,
  boxShadow,
  boxSize,
  flexWrap,
  shape,
  marg,
  pad,
  flow,
  flexDirection,
  flexJustify,
  flexItems,
  flexContent,
  textAlign,
} from "../maps";
import PropTypes from "prop-types";

const Flex = styled.div`
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${props =>
    props.direction ? props.direction : flexDirection};
  justify-content: ${props => (props.justify ? props.justify : flexJustify)};
  align-items: ${props => (props.align ? props.align : flexItems)};
  align-content: ${props => (props.content ? props.content : flexContent)};
  color: ${props => (props.color ? props.color : "auto")};
  background: ${props => (props.bg ? props.bg : "none")};
  height: ${props => (props.h ? props.h : props.sqr ? props.sqr : longways)};
  width: ${props => (props.w ? props.w : props.sqr ? props.sqr : sideways)};
  padding: ${props => (props.padding ? props.padding : pad)};
  margin: ${props => (props.margin ? props.margin : marg)};
  min-height: ${props => (props.min_h ? props.min_h : "none")};
  max-width: ${props => (props.max_w ? props.max_w : "none")};
  min-width: ${props => (props.min_w ? props.min_w : "none")};
  max-height: ${props => (props.max_h ? props.max_h : "none")};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  box-shadow: ${props => (props.shadow ? props.shadow : boxShadow)};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
  clip-path: ${props => (props.clip ? props.clip : shape)};
  overflow: ${props => (props.overflow ? props.overflow : flow)};
  text-align: ${textAlign};
`;

export default Flex;

Flex.propTypes = {
  // CUSTOM PROPTYPES
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),

  justify: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ]),

  align: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
  ]),

  content: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
  ]),

  wrap: PropTypes.oneOf([
    "nowrap",
    "wrap",
    "wrap-reverse",
    "initial",
    "inherit",
  ]),

  h: PropTypes.string,
  w: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  min_h: PropTypes.string,
  max_w: PropTypes.string,
  p: PropTypes.string,
  m: PropTypes.string,
  opacity: PropTypes.string,
  shadow: PropTypes.string,
  box_size: PropTypes.string,
  clip: PropTypes.string,
  overflow: PropTypes.string,
};
