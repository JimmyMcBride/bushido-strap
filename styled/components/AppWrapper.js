import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../theme";

import { Switch } from "react-router-dom";

// root container for the application
const AppWrapper = styled(Switch)`
  background: ${props =>
    props.background ? props.background : `${theme.gray0}`};
`;

export default AppWrapper;

AppWrapper.propTypes = {
  background: PropTypes.string
};
