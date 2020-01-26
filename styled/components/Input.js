import styled from "styled-components";
import { stretch, boxSize } from "./maps";
import PropTypes from "prop-types";

const Input = styled.input`
  border-radius: ${props => (props.radius ? props.radius : "0.3rem")};
  padding: ${props => (props.padding ? props.padding : "1rem")};
  margin: ${props => (props.margin ? props.margin : "auto")};
  width: ${props => (props.width ? props.width : `${stretch}`)};
  box-sizing: ${props => (props.box_size ? `${props.box_size}` : `${boxSize}`)};
`;

export default Input;

Input.propTypes = {
  // CUSTOM PROPTYPES
  radius: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  box_size: PropTypes.string
};
