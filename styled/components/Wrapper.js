import styled from "styled-components";
import {
  flexWrap,
  columnDirection,
  flexJustify,
  centerAlign,
  flexContent,
  longways,
  sideways,
  marg,
  pad,
  textAlign,
} from "../maps";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${props =>
    props.direction ? props.direction : columnDirection};
  justify-content: ${props => (props.justify ? props.justify : flexJustify)};
  align-items: ${props => (props.align ? props.align : centerAlign)};
  align-content: ${props => (props.content ? props.content : flexContent)};
  background: ${props => (props.bg ? props.bg : "none")};
  height: ${props => (props.h ? props.h : props.sqr ? props.sqr : longways)};
  width: ${props => (props.w ? props.w : props.sqr ? props.sqr : sideways)};
  min-height: ${props => (props.minH ? props.minH : "100vh")};
  max-width: ${props => (props.maxW ? props.maxW : "100vw")};
  min-width: ${props => (props.minW ? props.minW : "none")};
  max-height: ${props => (props.maxH ? props.maxH : "none")};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  margin: ${props => (props.m ? props.m : marg)};
  padding: ${props => (props.p ? props.p : pad)};
  text-align: ${textAlign};
`;

export default Wrapper;

Wrapper.propTypes = {
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
  m: PropTypes.string,
  p: PropTypes.string,
  h: PropTypes.string,
  w: PropTypes.string,
  sqr: PropTypes.string,
  minH: PropTypes.string,
  maxW: PropTypes.string,
  minW: PropTypes.string,
  maxH: PropTypes.string,
  bg: PropTypes.string,
  opacity: PropTypes.string,
};
