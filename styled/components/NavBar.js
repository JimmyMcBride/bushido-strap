import styled from "styled-components";
import {
  flexWrap,
  boxSize,
  flexDirection,
  flexJustify,
  flexItems,
  flexContent
} from "./maps";
import PropTypes from "prop-types";

const NavBar = styled.nav`
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${props =>
    props.direction ? props.direction : flexDirection};
  justify-content: ${props => (props.justify ? props.justify : flexJustify)};
  align-items: ${props => (props.align ? props.align : flexItems)};
  align-content: ${props => (props.content ? props.content : flexContent)};
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : "100%")};
  background: ${props => (props.background ? props.background : "none")};
  color: ${props => (props.color ? props.color : "auto")};
  min-height: ${props => (props.min_height ? props.min_height : "auto")};
  max-width: ${props => (props.max_width ? props.max_width : "auto")};
  padding: ${props => (props.padding ? props.padding : "auto")};
  margin: ${props => (props.margin ? props.margin : "auto")};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
`;

export default NavBar;

NavBar.propTypes = {
  // CUSTOM PROPTYPES
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),

  justify: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),

  align: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline"
  ]),

  content: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline"
  ]),

  wrap: PropTypes.oneOf([
    "nowrap",
    "wrap",
    "wrap-reverse",
    "initial",
    "inherit"
  ]),
  height: PropTypes.string,
  weight: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  min_height: PropTypes.string,
  max_weight: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  opacity: PropTypes.string,
  box_size: PropTypes.string
};
