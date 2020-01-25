import styled from "styled-components";
import styledMap from "styled-map";
import PropTypes from "prop-types";

const stretch = styledMap`
  stretch: 100%;
  default: auto;
`;

const Box = styled.div`
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : `${stretch}`)};
  background: ${props => (props.background ? props.background : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0.3rem")};
  color: ${props => (props.color ? props.color : "auto")};
  margin: ${props => (props.margin ? props.margin : "0")};
  padding: ${props => (props.color ? props.color : "0")};
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
  padding: PropTypes.string
};
