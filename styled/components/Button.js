import styled from "styled-components";
import theme from "../theme";
import PropTypes from "prop-types";

const Button = styled.button`
  color: ${props => (props.color ? props.color : `${theme.gray1}`)};
  background: ${props =>
    props.background ? props.background : `${theme.gray8}`};
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0.3rem 1rem")};
  padding: ${props => (props.padding ? props.padding : "0.5rem 1rem")};
  width: ${props => (props.width ? props.width : "auto")};
  height: ${props => (props.height ? props.height : "auto")};
  &:hover {
    color: ${props =>
      props.hover_color ? props.hover_color : `${theme.gray8}`};
    background: ${props =>
      props.hover_background ? props.hover_background : `${theme.gray2}`};
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
  padding: PropTypes.string,
  hover_color: PropTypes.string,
  hover_background: PropTypes.string
};
