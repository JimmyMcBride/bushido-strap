import styled from "styled-components";
import {
  sideways,
  boxShadow,
  boxSize,
  marg,
  pad,
  flow,
  flexWrap,
  columnDirection,
  flexJustify,
  centerAlign,
  flexContent,
  textAlign,
} from "../maps";
import PropTypes from "prop-types";

const Section = styled.section`
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${props =>
    props.direction ? props.direction : columnDirection};
  justify-content: ${props => (props.justify ? props.justify : flexJustify)};
  align-items: ${props => (props.align ? props.align : centerAlign)};
  align-content: ${props => (props.content ? props.content : flexContent)};
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
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  box-shadow: ${props => (props.shadow ? props.shadow : boxShadow)};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
  overflow: ${props => (props.overflow ? props.overflow : flow)};
  // text-align: ${textAlign};
`;

export default Section;

Section.propTypes = {
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
  background: PropTypes.string,
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
  overflow: PropTypes.string,
};
