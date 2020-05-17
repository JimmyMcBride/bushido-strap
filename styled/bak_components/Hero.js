import styled from "styled-components";
import PropTypes from "prop-types";
import {
  marg,
  pad,
  flexWrap,
  columnDirection,
  flexJustify,
  centerAlign,
  flexContent,
  textAlign,
  bgCover,
  bgAttach,
  invertColor,
  cursorStyle,
} from "../maps";

// root container for the application
const Container = styled.div`
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${props =>
    props.direction ? props.direction : columnDirection};
  justify-content: ${props => (props.justify ? props.justify : flexJustify)};
  align-items: ${props => (props.align ? props.align : centerAlign)};
  align-content: ${props => (props.content ? props.content : flexContent)};
  background: ${props => (props.bg ? props.bg : "white")};
  background-image: ${props => (props.bgSrc ? `url(${props.bgSrc})` : "none")};
  background-position: ${props =>
    props.bgPosition ? props.bgPosition : "center"};
  background-repeat: ${props =>
    props.bgRepeat ? props.bgRepeat : "no-repeat"};
  background-attachment: ${props =>
    props.bgAttachment ? props.bgAttachment : bgAttach};
  background-size: ${props => (props.bgSize ? props.bgSize : bgCover)};
  min-height: ${props => (props.minH ? props.minH : "none")};
  max-width: ${props => (props.maxW ? props.maxW : "none")};
  min-width: ${props => (props.minW ? props.minW : "none")};
  max-height: ${props => (props.maxH ? props.maxH : "none")};
  width: ${props => (props.w ? props.w : "100%")};
  height: ${props => (props.h ? props.h : "auto")};
  margin: ${props => (props.m ? props.m : marg)};
  padding: ${props => (props.p ? props.p : pad)};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  text-align: ${textAlign};
  color: ${invertColor};
  &:hover {
    cursor: ${cursorStyle};
  }
`;

export default Container;

Container.propTypes = {
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
  minH: PropTypes.string,
  maxW: PropTypes.string,
  minW: PropTypes.string,
  maxH: PropTypes.string,
  bg: PropTypes.string,
  bgSrc: PropTypes.string,
  opacity: PropTypes.string,
  font: PropTypes.string,
  head_font: PropTypes.string,
  bgPosition: PropTypes.string,
  bgRepeat: PropTypes.string,
  bgAttachment: PropTypes.string,
  bgSize: PropTypes.string,
};
