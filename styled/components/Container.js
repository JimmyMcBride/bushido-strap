import styled from "styled-components";
import PropTypes from "prop-types";
import {
  marg,
  pad,
  longways,
  flexWrap,
  columnDirection,
  flexJustify,
  centerAlign,
  flexContent,
  textAlign,
  bgCover,
  bgAttach,
  invertColor,
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
  background-image: ${props =>
    props.bg_src ? `url(${props.bg_src})` : "none"};
  background-position: ${props =>
    props.bg_position ? props.bg_position : "center"};
  background-repeat: ${props =>
    props.bg_repeat ? props.bg_repeat : "no-repeat"};
  background-attachment: ${props =>
    props.bg_attachment ? props.bg_attachment : bgAttach};
  background-size: ${props => (props.bg_size ? props.bg_size : bgCover)};
  min-height: ${props => (props.min_h ? props.min_h : "none")};
  max-width: ${props => (props.max_w ? props.max_w : "none")};
  min-width: ${props => (props.min_w ? props.min_w : "none")};
  max-height: ${props => (props.max_h ? props.max_h : "none")};
  width: ${props => (props.w ? props.w : "100%")};
  height: ${props => (props.h ? props.h : longways)};
  margin: ${props => (props.m ? props.m : marg)};
  padding: ${props => (props.p ? props.p : pad)};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  text-align: ${textAlign};
  color: ${invertColor};
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
  min_h: PropTypes.string,
  max_w: PropTypes.string,
  min_w: PropTypes.string,
  max_h: PropTypes.string,
  bg: PropTypes.string,
  bg_src: PropTypes.string,
  opacity: PropTypes.string,
  font: PropTypes.string,
  head_font: PropTypes.string,
  bg_position: PropTypes.string,
  bg_repeat: PropTypes.string,
  bg_attachment: PropTypes.string,
  bg_size: PropTypes.string,
};
