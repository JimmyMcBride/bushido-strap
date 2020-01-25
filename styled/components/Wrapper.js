import styled from "styled-components";
import styledMap from "styled-map";
import PropTypes from "prop-types";

const flexWrap = styledMap`
  wrap: wrap;
  default: nowrap;
`;

const stretch = styledMap`
  stretch: 100%;
  default: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "column")};
  flex-wrap: ${flexWrap};
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  align-items: ${props => (props.align ? props.align : "center")};
  align-content: ${props => (props.content ? props.content : "stretch")};
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : `${stretch}`)};
  background: ${props => (props.background ? props.background : "none")};
  min-height: ${props => (props.min_height ? props.min_height : "100vh")};
  max-width: ${props => (props.max_width ? props.max_width : "100vw")};
`;

export default Wrapper;

Wrapper.propTypes = {
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
  min_height: PropTypes.string,
  max_weight: PropTypes.string,
  background: PropTypes.string
};
