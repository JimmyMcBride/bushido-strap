import styled from "styled-components";
import { stretch, flexWrap, box } from "./maps";
import theme from "../theme";
import PropTypes from "prop-types";
import { CardColor, LinkColor } from "../theme";

const Card = styled.div`
  ${CardColor}
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "column")};
  flex-wrap: ${flexWrap};
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  align-items: ${props => (props.align ? props.align : "center")};
  align-content: ${props => (props.content ? props.content : "stretch")};
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : `${stretch}`)};
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0.3rem")};
  padding: ${props => (props.padding ? props.padding : "0.5rem 1rem")};
  margin: ${props => (props.margin ? props.margin : "1rem 0")};
  box-shadow: 0 0.3rem 1rem ${theme.gray7};
  opacity: ${props => (props.opacity ? `${props.opacity}` : "none")};
  box-sizing: ${props => (props.box_size ? `${props.box_size}` : `${box}`)};
  p {
    text-align: left;
    line-height: 2.2rem;
  }
  a {
    ${LinkColor}
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
  border: PropTypes.string,
  radius: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  opacity: PropTypes.string,
  box_size: PropTypes.string
};
