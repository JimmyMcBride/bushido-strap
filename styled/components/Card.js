import styled from "styled-components";
import theme from "../theme";
import PropTypes from "prop-types";

// Creds: Robbie Porter
const Card = styled.button`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "column")};
  flex-wrap: ${props => (props.wrap ? props.wrap : "nowrap")};
  justify-content: ${props => (props.justify ? props.justify : "center")};
  align-items: ${props => (props.align ? props.align : "stretch")};
  align-content: ${props => (props.content ? props.content : "stretch")};
  color: ${props => (props.color ? props.color : `${theme.gray9}`)};
  background: ${props => (props.color ? props.color : `${theme.gray2}`)};
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0.3rem")};
  padding: ${props => (props.padding ? props.padding : "0.5rem 1rem")};
  width: ${props => (props.width ? props.width : "auto")};
  height: ${props => (props.height ? props.height : "auto")};
  margin: ${props => (props.margin ? props.margin : "1rem 0")};
  max-width: 70rem;
  box-shadow: 0 0.3rem 1rem ${theme.gray5};
  code {
    background: ${theme.gray1};
  }
  p {
    text-align: left;
    line-height: 2.2rem;
  }
`;

export default Card;

Card.propTypes = {
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
  margin: PropTypes.string
};
