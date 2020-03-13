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
import { theme } from "../theme";
import PropTypes from "prop-types";

const ToolTip = styled.div`
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${props =>
    props.direction ? props.direction : flexDirection};
  justify-content: ${props => (props.justify ? props.justify : flexJustify)};
  align-items: ${props => (props.align ? props.align : flexItems)};
  align-content: ${props => (props.content ? props.content : flexContent)};
  color: ${props => (props.color ? props.color : "auto")};
  background: ${props => (props.background ? props.background : "none")};
  height: ${props => (props.h ? props.h : props.sqr ? props.sqr : longways)};
  width: ${props => (props.w ? props.w : props.sqr ? props.sqr : sideways)};
  padding: ${props => (props.p ? props.p : pad)};
  margin: ${props => (props.m ? props.m : marg)};
  min-height: ${props => (props.min_h ? props.min_h : "none")};
  max-width: ${props => (props.max_w ? props.max_w : "none")};
  min-width: ${props => (props.min_w ? props.min_w : "none")};
  max-height: ${props => (props.max_h ? props.max_h : "none")};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  box-shadow: ${props => (props.shadow ? props.shadow : boxShadow)};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
  clip-path: ${props => (props.clip ? props.clip : shape)};
  // overflow: ${props => (props.overflow ? props.overflow : flow)};
  text-align: ${textAlign};

  position: relative;

  & .tooltip {
    visibility: hidden;
    opacity: 0;
    width: ${props => (props.tt_w ? props.tt_w : "auto")};
    height: ${props => (props.tt_h ? props.tt_h : "auto")};
    color: ${props => (props.tt_color ? props.tt_color : theme.gray0)};
    background: ${props => (props.tt_bg ? props.tt_bg : "none")};
    top: ${props => (props.tt_top ? props.tt_top : "none")};
    right: ${props => (props.tt_right ? props.tt_right : "none")};
    bottom: ${props => (props.tt_bottom ? props.tt_bottom : "none")};
    left: ${props => (props.tt_left ? props.tt_left : "none")};
    border-radius: ${props => (props.tt_radius ? props.tt_radius : "auto")};
    z-index: ${props => (props.tt_zIndex ? props.tt_zIndex : 1)};
    position: absolute;
    transition: ease-in-out, visibility 0.25s ease-in-out;
    transition: ease-in-out, opacity 0.25s ease-in-out;
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }

  &:focus .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

export default ToolTip;

ToolTip.propTypes = {
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
  min_h: PropTypes.string,
  max_w: PropTypes.string,
  min_w: PropTypes.string,
  max_h: PropTypes.string,
  p: PropTypes.string,
  m: PropTypes.string,
  opacity: PropTypes.string,
  shadow: PropTypes.string,
  box_size: PropTypes.string,
  clip: PropTypes.string,
  overflow: PropTypes.string,
  tt_w: PropTypes.string,
  tt_h: PropTypes.string,
  tt_color: PropTypes.string,
  tt_bg: PropTypes.string,
  tt_top: PropTypes.string,
  tt_right: PropTypes.string,
  tt_bottom: PropTypes.string,
  tt_left: PropTypes.string,
  tt_radius: PropTypes.string,
  tt_zIndex: PropTypes.string,
};
