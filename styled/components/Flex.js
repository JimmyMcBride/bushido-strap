import styled from "styled-components";
import {
  sideways,
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
  cursorStyle,
  hvrWidth,
  hvrMarg,
  hvrPad,
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
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0.1rem")};
  height: ${props => (props.h ? props.h : props.sqr ? props.sqr : "auto")};
  width: ${props => (props.w ? props.w : props.sqr ? props.sqr : sideways)};
  padding: ${props => (props.p ? props.p : pad)};
  margin: ${props => (props.m ? props.m : marg)};
  min-height: ${props => (props.minH ? props.minH : "none")};
  max-width: ${props => (props.maxW ? props.maxW : "none")};
  min-width: ${props => (props.minW ? props.minW : "none")};
  max-height: ${props => (props.maxH ? props.maxH : "none")};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  box-shadow: ${props => (props.shadow ? props.shadow : boxShadow)};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
  clip-path: ${props => (props.clip ? props.clip : shape)};
  overflow: ${props => (props.overflow ? props.overflow : flow)};
  text-align: ${textAlign};
  &:hover {
    border: ${props => (props.hvrBorder ? props.hvrBorder : "none")};
    width: ${props =>
      props.hvrW ? props.hvrW : props.hvrSqr ? props.hvrSqr : hvrWidth};
    height: ${props =>
      props.hvrH ? props.hvrH : props.hvrSqr ? props.hvrSqr : "auto"};
    margin: ${props => (props.hvrM ? props.hvrM : hvrMarg)};
    padding: ${props => (props.hvrP ? props.hvrP : hvrPad)};
    color: ${props => (props.hvrColor ? props.hvrColor : "auto")};
    background: ${props => (props.hvrBg ? props.hvrBg : "auto")};
    cursor: ${cursorStyle};
  }
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
  minH: PropTypes.string,
  maxW: PropTypes.string,
  minW: PropTypes.string,
  maxH: PropTypes.string,
  p: PropTypes.string,
  m: PropTypes.string,
  opacity: PropTypes.string,
  shadow: PropTypes.string,
  box_size: PropTypes.string,
  clip: PropTypes.string,
  overflow: PropTypes.string,
  hvrBorder: PropTypes.string,
  hvrW: PropTypes.string,
  hvrH: PropTypes.string,
  hvrM: PropTypes.string,
  hvrP: PropTypes.string,
  hvrColor: PropTypes.string,
  hvrBg: PropTypes.string,
};
