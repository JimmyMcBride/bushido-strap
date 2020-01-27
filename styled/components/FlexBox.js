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
  flexContent
} from "./maps";
import PropTypes from "prop-types";

const FlexBox = styled.div`
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${props =>
    props.direction ? props.direction : flexDirection};
  justify-content: ${props => (props.justify ? props.justify : flexJustify)};
  align-items: ${props => (props.align ? props.align : flexItems)};
  align-content: ${props => (props.content ? props.content : flexContent)};
  background: ${props => (props.background ? props.background : "none")};
  color: ${props => (props.color ? props.color : "auto")};
  height: ${props => (props.height ? props.height : longways)};
  min-height: ${props => (props.min_height ? props.min_height : "auto")};
  width: ${props => (props.width ? props.width : sideways)};
  max-width: ${props => (props.max_width ? props.max_width : "auto")};
  padding: ${props => (props.padding ? props.padding : pad)};
  margin: ${props => (props.margin ? props.margin : marg)};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  box-shadow: ${props => (props.shadow ? props.shadow : boxShadow)};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
  clip-path: ${props => (props.clip ? props.clip : shape)};
  overflow: ${props => (props.overflow ? props.overflow : flow)};
`;

export default FlexBox;

FlexBox.propTypes = {
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
  shadow: PropTypes.string,
  box_size: PropTypes.string,
  clip: PropTypes.string,
  overflow: PropTypes.string
};
