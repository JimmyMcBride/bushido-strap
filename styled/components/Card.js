import styled from "styled-components";
import {
  sideways,
  flexWrap,
  boxSize,
  defaultShadow,
  centerAlign,
  columnDirection,
  flexJustify,
  flexContent,
  cardBackground,
  cardColor,
  textAlign,
  hvrBtnMarg,
  hvrBtnPad,
  hvrWidth,
} from "../maps";

import PropTypes from "prop-types";

const Card = styled.div`
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${props =>
    props.direction ? props.direction : columnDirection};
  justify-content: ${props => (props.justify ? props.justify : flexJustify)};
  align-items: ${props => (props.align ? props.align : centerAlign)};
  align-content: ${props => (props.content ? props.content : flexContent)};
  color: ${props => (props.color ? props.color : cardColor)};
  background: ${props => (props.bg ? props.bg : cardBackground)};
  height: ${props => (props.h ? props.h : props.sqr ? props.sqr : "auto")};
  width: ${props => (props.w ? props.w : props.sqr ? props.sqr : sideways)};
  min-height: ${props => (props.minH ? props.minH : "none")};
  max-width: ${props => (props.maxW ? props.maxW : "none")};
  min-width: ${props => (props.minW ? props.minW : "none")};
  max-height: ${props => (props.maxH ? props.maxH : "none")};
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0.3rem")};
  padding: ${props => (props.p ? props.p : "0.5rem 1rem")};
  margin: ${props => (props.m ? props.m : "1rem 0")};
  box-shadow: ${props => (props.shadow ? props.shadow : defaultShadow)};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
  text-align: ${textAlign};
  &:hover {
    border: ${props => (props.hvrBorder ? props.hvrBorder : "none")};
    width: ${props => (props.hvrW ? props.hvrW : hvrWidth)};
    height: ${props => (props.hvrH ? props.hvrH : "auto")};
    margin: ${props => (props.hvrM ? props.hvrM : hvrBtnMarg)};
    padding: ${props => (props.hvrP ? props.hvrP : hvrBtnPad)};
    color: ${props => (props.hvrColor ? props.hvrColor : "auto")};
    background: ${props => (props.hvrBg ? props.hvrBg : "auto")};
    cursor: ${cursorStyle};
  }
`;

export default Card;

Card.propTypes = {
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

  minH: PropTypes.string,
  maxW: PropTypes.string,
  minW: PropTypes.string,
  maxH: PropTypes.string,
  h: PropTypes.string,
  w: PropTypes.string,
  color: PropTypes.string,
  bg: PropTypes.string,
  sqr: PropTypes.string,
  border: PropTypes.string,
  radius: PropTypes.string,
  p: PropTypes.string,
  m: PropTypes.string,
  opacity: PropTypes.string,
  box_size: PropTypes.string,
  shadow: PropTypes.string,
  hvrBorder: PropTypes.string,
  hvrW: PropTypes.string,
  hvrH: PropTypes.string,
  hvrM: PropTypes.string,
  hvrP: PropTypes.string,
  hvrColor: PropTypes.string,
  hvrBg: PropTypes.string,
};
