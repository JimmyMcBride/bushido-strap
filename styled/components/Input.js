import styled from "styled-components";
import { sideways, longways, boxSize, marg } from "../maps";
import PropTypes from "prop-types";
import { theme } from "../theme";

const Input = styled.input`
  color: ${props => (props.color ? props.color : "auto")};
  background: ${props => (props.bg ? props.bg : "auto")};
  border-radius: ${props => (props.radius ? props.radius : "0.3rem")};
  padding: ${props => (props.padding ? props.padding : "0.8rem")};
  margin: ${props => (props.margin ? props.margin : marg)};
  width: ${props => (props.width ? props.width : sideways)};
  height: ${props => (props.height ? props.height : longways)};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
  border: ${props =>
    props.border ? props.border : `0.2rem inset ${theme.gray3}`};
  &:hover {
    color: ${props => (props.hover_color ? props.hover_color : "auto")};
    background: ${props =>
      props.hover_bg ? props.hover_bg : theme.whiteAlpha6};
    border-color: ${props =>
      props.hover_border ? props.hover_border : theme.blue1};
  }
`;

export default Input;

Input.propTypes = {
  // CUSTOM PROPTYPES
  radius: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  box_size: PropTypes.string,
};
