import styled from "styled-components";
import {
  flexWrap,
  columnDirection,
  flexJustify,
  centerAlign,
  flexContent,
  sideways,
  boxSize,
  textCenter,
  buttonColor,
  buttonBackground,
  buttonHoverColor,
  buttonHoverBackground,
  btnMarg,
  btnPad,
  cursorStyle,
  hvrWidth,
} from "../maps";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Linkton = styled(Link)`
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${props =>
    props.direction ? props.direction : columnDirection};
  justify-content: ${props => (props.justify ? props.justify : flexJustify)};
  align-items: ${props => (props.align ? props.align : centerAlign)};
  align-content: ${props => (props.content ? props.content : flexContent)};
  color: ${props => (props.color ? props.color : buttonColor)};
  background: ${props => (props.bg ? props.bg : buttonBackground)};
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0.3rem 1rem")};
  width: ${props => (props.w ? props.w : sideways)};
  height: ${props => (props.h ? props.h : "auto")};
  margin: ${props => (props.m ? props.m : btnMarg)};
  padding: ${props => (props.p ? props.p : btnPad)};
  min-height: ${props => (props.minH ? props.minH : "none")};
  max-width: ${props => (props.maxW ? props.maxW : "none")};
  min-width: ${props => (props.minW ? props.minW : "none")};
  max-height: ${props => (props.maxH ? props.maxH : "none")};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
  text-align: ${textCenter};

  &:hover {
    border: ${props => (props.hvrBorder ? props.hvrBorder : "none")};
    width: ${props => (props.hvrW ? props.hvrW : hvrWidth)};
    height: ${props => (props.hvrH ? props.hvrH : "auto")};
    margin: ${props => (props.hvrM ? props.hvrM : btnMarg)};
    padding: ${props => (props.hvrP ? props.hvrP : btnPad)};
    color: ${props => (props.hvrColor ? props.hvrColor : buttonHoverColor)};
    background: ${props => (props.hvrBg ? props.hvrBg : buttonHoverBackground)};
    cursor: ${cursorStyle};
  }
`;

export default Linkton;

Linkton.propTypes = {
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
  border: PropTypes.string,
  radius: PropTypes.string,
  hover_color: PropTypes.string,
  hover_bg: PropTypes.string,
  m: PropTypes.string,
  p: PropTypes.string,
  minH: PropTypes.string,
  maxW: PropTypes.string,
  minW: PropTypes.string,
  maxH: PropTypes.string,
  opacity: PropTypes.string,
  box_size: PropTypes.string,
  hvrBorder: PropTypes.string,
  hvrW: PropTypes.string,
  hvrH: PropTypes.string,
  hvrM: PropTypes.string,
  hvrP: PropTypes.string,
  hvrColor: PropTypes.string,
  hvrBg: PropTypes.string,
};
