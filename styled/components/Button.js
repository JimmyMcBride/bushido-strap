import styled from "styled-components";
import { stretch, boxSize } from "./maps";
import { ButtonColor, ButtonHoverColor } from "../theme";
import PropTypes from "prop-types";

const Button = styled.button`
  ${ButtonColor}
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0.3rem 1rem")};
  width: ${props => (props.width ? props.width : `${stretch}`)};
  height: ${props => (props.height ? props.height : "auto")};
  margin: ${props => (props.margin ? props.margin : "auto")};
  padding: ${props => (props.color ? props.color : "0.5rem 1rem")};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  box-sizing: ${props => (props.box_size ? props.box_size : `${boxSize}`)};
  &:hover {
    ${ButtonHoverColor}
  }
`;

export default Button;

Button.propTypes = {
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
  border: PropTypes.string,
  radius: PropTypes.string,
  hover_color: PropTypes.string,
  hover_background: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  opacity: PropTypes.string,
  box_size: PropTypes.string
};
