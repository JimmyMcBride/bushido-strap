import styled from "styled-components";
import styledMap from "styled-map";
import PropTypes from "prop-types";

const stretch = styledMap`
  stretch: 100%;
  default: auto;
`;

const Input = styled.input`
  border-radius: ${props => (props.radius ? props.radius : "0.3rem")};
  padding: ${props => (props.padding ? props.padding : "1rem")};
  margin: ${props => (props.margin ? props.margin : "auto")};
  width: ${props => (props.width ? props.width : `${stretch}`)};
`;

export default Input;

Input.propTypes = {
  // CUSTOM PROPTYPES
  radius: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string
};
