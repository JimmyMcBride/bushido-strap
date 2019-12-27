import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../theme";

// root container for the application
const AppWrapper = styled.div`
  background: ${props =>
    props.background ? props.background : `${theme.gray0}`};
`;

export default AppWrapper;

AppWrapper.propTypes = {
  background: PropTypes.string
};
