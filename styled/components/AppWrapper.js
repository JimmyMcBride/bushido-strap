import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../theme";

// root container for the application
const AppWrapper = styled.div`
  background: ${props =>
    props.background ? props.background : `${theme.gray2}`};
  background-image: ${props =>
    props.bg_url ? `url(${props.bg_url})` : "none"};
  opacity: ${props => (props.opacity ? `${props.opacity}` : "none")};
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

export default AppWrapper;

AppWrapper.propTypes = {
  background: PropTypes.string,
  bg_url: PropTypes.string,
  opacity: PropTypes.string
};
