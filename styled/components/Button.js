import styled from "styled-components";
import theme from "../theme";
import PropTypes from "prop-types";

const getColor = props =>
  props.primary
    ? {
        color: `${theme.gray0}`,
        background: `${theme.blue3}`
      }
    : props.secondary
    ? {
        color: `${theme.gray0}`,
        background: `${theme.purple3}`
      }
    : props.accent
    ? {
        color: `${theme.gray0}`,
        background: `${theme.magenta3}`
      }
    : props.success
    ? {
        color: `${theme.gray0}`,
        background: `${theme.green3}`
      }
    : props.warning
    ? {
        color: `${theme.gray0}`,
        background: `${theme.orange3}`
      }
    : props.danger
    ? {
        color: `${theme.gray0}`,
        background: `${theme.red3}`
      }
    : props.invert
    ? {
        color: `${theme.gray8}`,
        background: `${theme.gray1}`
      }
    : {
        color: `${theme.gray0}`,
        background: `${theme.gray8}`
      };

const getHover = props =>
  props.primary
    ? {
        color: `${theme.gray0}`,
        background: `${theme.blue5}`
      }
    : props.secondary
    ? {
        color: `${theme.gray0}`,
        background: `${theme.purple5}`
      }
    : props.accent
    ? {
        color: `${theme.gray0}`,
        background: `${theme.magenta5}`
      }
    : props.success
    ? {
        color: `${theme.gray0}`,
        background: `${theme.green5}`
      }
    : props.warning
    ? {
        color: `${theme.gray0}`,
        background: `${theme.orange4}`
      }
    : props.danger
    ? {
        color: `${theme.gray0}`,
        background: `${theme.red5}`
      }
    : props.invert
    ? {
        color: `${theme.gray1}`,
        background: `${theme.gray7}`
      }
    : {
        color: `${theme.gray8}`,
        background: `${theme.gray1}`
      };

const Button = styled.button`
  ${getColor}
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0.3rem 1rem")};
  padding: ${props => (props.padding ? props.padding : "0.5rem 1rem")};
  width: ${props => (props.width ? props.width : "auto")};
  height: ${props => (props.height ? props.height : "auto")};
  &:hover {
    ${getHover}
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
