import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../theme";

// root container for the application
const AppWrapper = styled.div`
  background: ${props =>
    props.background ? props.background : `${theme.gray1}`};
  ${props =>
    props.bg_url
      ? "background-image: ${props.bg_url}"
      : "background-image: none"};
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

export default AppWrapper;

AppWrapper.propTypes = {
  background: PropTypes.string
};
