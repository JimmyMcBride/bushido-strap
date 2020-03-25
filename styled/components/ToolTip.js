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
  box-sizing: ${props => (props.boxSize ? props.boxSize : boxSize)};
  clip-path: ${props => (props.clip ? props.clip : shape)};
  position: ${props => (props.position ? props.position : "relative")};
  text-align: ${textAlign};

  &:hover {
    cursor: ${cursorStyle};
  }

  & .tooltip {
    visibility: hidden;
    opacity: 0;
    width: ${props => (props.ttW ? props.ttW : "auto")};
    height: ${props => (props.ttH ? props.ttH : "auto")};
    color: ${props => (props.ttColor ? props.ttColor : theme.gray0)};
    background: ${props => (props.ttBg ? props.ttBg : "none")};
    top: ${props => (props.ttTop ? props.ttTop : "none")};
    right: ${props => (props.ttRight ? props.ttRight : "none")};
    bottom: ${props => (props.ttBottom ? props.ttBottom : "none")};
    left: ${props => (props.ttLeft ? props.ttLeft : "none")};
    border-radius: ${props => (props.ttRadius ? props.ttRadius : "auto")};
    z-index: ${props => (props.ttZindex ? props.ttZindex : 1)};
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
  minH: PropTypes.string,
  maxW: PropTypes.string,
  minW: PropTypes.string,
  maxH: PropTypes.string,
  p: PropTypes.string,
  m: PropTypes.string,
  opacity: PropTypes.string,
  shadow: PropTypes.string,
  boxSize: PropTypes.string,
  clip: PropTypes.string,
  overflow: PropTypes.string,
  ttW: PropTypes.string,
  ttH: PropTypes.string,
  ttColor: PropTypes.string,
  ttBg: PropTypes.string,
  ttTop: PropTypes.string,
  ttRight: PropTypes.string,
  ttBottom: PropTypes.string,
  ttLeft: PropTypes.string,
  ttRadius: PropTypes.string,
  ttZindex: PropTypes.string,
};
