import styled from "styled-components";
import styledMap from "styled-map";
import PropTypes from "prop-types";

const flexWrap = styledMap`
  wrap: wrap;
  default: nowrap;
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
  flex-wrap: ${flexWrap};
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  align-items: ${props => (props.align ? props.align : "stretch")};
  align-content: ${props => (props.content ? props.content : "stretch")};
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : "100%")};
  background: ${props => (props.background ? props.background : "none")};
  color: ${props => (props.color ? props.color : "auto")};
  min-height: ${props => (props.min_height ? props.min_height : "auto")};
  max-width: ${props => (props.max_width ? props.max_width : "auto")};
  padding: ${props => (props.padding ? props.padding : "auto")};
  margin: ${props => (props.margin ? props.margin : "auto")};
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
  margin: PropTypes.string
};
