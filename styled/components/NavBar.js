import styled from "styled-components";
import {
  flexWrap,
  boxSize,
  flexDirection,
  flexJustify,
  flexItems,
  flexContent,
  marg,
  pad,
  textAlign,
} from "../maps";
import PropTypes from "prop-types";

const NavBar = styled.nav`
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${props =>
    props.direction ? props.direction : flexDirection};
  justify-content: ${props => (props.justify ? props.justify : flexJustify)};
  align-items: ${props => (props.align ? props.align : flexItems)};
  align-content: ${props => (props.content ? props.content : flexContent)};
  position: ${props => (props.position ? props.position : "fixed")};
  background: ${props => (props.bg ? props.bg : "none")};
  color: ${props => (props.color ? props.color : "auto")};
  height: ${props => (props.h ? props.h : "auto")};
  width: ${props => (props.w ? props.w : "100%")};
  margin: ${props => (props.m ? props.m : marg)};
  padding: ${props => (props.p ? props.p : pad)};
  min-height: ${props => (props.min_h ? props.min_h : "auto")};
  max-width: ${props => (props.max_w ? props.max_w : "auto")};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
  text-align: ${textAlign};
`;

export default NavBar;

NavBar.propTypes = {
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
  p: PropTypes.string,
  m: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  min_h: PropTypes.string,
  max_w: PropTypes.string,
  opacity: PropTypes.string,
  box_size: PropTypes.string,
  position: PropTypes.string,
};
