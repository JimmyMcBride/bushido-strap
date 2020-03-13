import styled from "styled-components";
import {
  sideways,
  longways,
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
  height: ${props => (props.h ? props.h : props.sqr ? props.sqr : longways)};
  width: ${props => (props.w ? props.w : props.sqr ? props.sqr : sideways)};
  min-height: ${props => (props.min_h ? props.min_h : "none")};
  max-width: ${props => (props.max_w ? props.max_w : "none")};
  min-width: ${props => (props.min_w ? props.min_w : "none")};
  max-height: ${props => (props.max_h ? props.max_h : "none")};
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0.3rem")};
  padding: ${props => (props.p ? props.p : "0.5rem 1rem")};
  margin: ${props => (props.m ? props.m : "1rem 0")};
  box-shadow: ${props => (props.shadow ? props.shadow : defaultShadow)};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
  text-align: ${textAlign};
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

  min_h: PropTypes.string,
  max_w: PropTypes.string,
  min_w: PropTypes.string,
  max_h: PropTypes.string,
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
};
