import styled from "styled-components";
import { stretch, boxShadow, boxSize, shape, marg, pad } from "./maps";
import PropTypes from "prop-types";

const Box = styled.div`
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : stretch)};
  background: ${props => (props.background ? props.background : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0.3rem")};
  color: ${props => (props.color ? props.color : "auto")};
  margin: ${props => (props.margin ? props.margin : marg)};
  padding: ${props => (props.padding ? props.padding : pad)};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  box-shadow: ${props => (props.shadow ? props.shadow : boxShadow)};
  box-sizing: ${props => (props.box_size ? props.box_size : boxSize)};
  overflow: ${props => (props.ovr_flow ? props.ovr_flow : "hidden")};
  clip-path: ${props => (props.clip ? props.clip : shape)};
  img {
    width: 100%;
    height: auto;
  }
`;

export default Box;

Box.propTypes = {
  // CUSTOM PROPTYPES
  height: PropTypes.string,
  weight: PropTypes.string,
  background: PropTypes.string,
  radius: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  opacity: PropTypes.string,
  shadow: PropTypes.string,
  box_size: PropTypes.string,
  ovr_flow: PropTypes.string,
  clip: PropTypes.string
};
