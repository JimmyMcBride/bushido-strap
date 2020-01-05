import styled from "styled-components";
import PropTypes from "prop-types";

const Box = styled.div`
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : "auto")};
  background: ${props => (props.background ? props.background : "none")};
`;

export default Box;

Box.propTypes = {
  // CUSTOM PROPTYPES
  height: PropTypes.string,
  weight: PropTypes.string,
  background: PropTypes.string
};