import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../theme";

// root container for the application
const AppWrapper = styled.div`
  background: ${props =>
    props.background ? props.background : `${theme.gray1}`};
  background-image: ${props =>
    props.bg_url ? `url(${props.bg_url})` : "none"};
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

// background: ${props =>
//     props.background
//       ? props.background
//       : props.bg_url
//       ? "none"
//       : `${theme.gray1}`};

export default AppWrapper;

AppWrapper.propTypes = {
  background: PropTypes.string
};
