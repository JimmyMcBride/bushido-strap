import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../theme";
import WebFont from "webfontloader";

/* Raleway */
import "https://fonts.googleapis.com/css?family=Raleway&display=swap";

WebFont.load({
  google: {
    families: [`${props.head_font}`, `${props.font}`]
  }
});

// root container for the application
const AppWrapper = styled.div`
  background: ${props =>
    props.background ? props.background : `${theme.gray2}`};
  background-image: ${props =>
    props.bg_url ? `url(${props.bg_url})` : "none"};
  opacity: ${props => (props.opacity ? `${props.opacity}` : "none")};
  font-family: ${props =>
    props.font ? `${props.font}` : `"Raleway", sans-serif`};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props =>
      props.head_font ? `${props.head_font}` : `"Raleway", sans-serif`};
    line-height: 1.2;
    margin: 1.6rem;
  }
  background-position: ${props =>
    props.bg_position ? props.bg_position : "center"};
  background-repeat: ${props =>
    props.bg_repeat ? props.bg_repeat : "no-repeat"};
  background-attachment: ${props =>
    props.bg_attachment ? props.bg_attachment : "fixed"};
  background-size: ${props => (props.bg_size ? props.bg_size : "cover")};
`;

export default AppWrapper;

AppWrapper.propTypes = {
  background: PropTypes.string,
  bg_url: PropTypes.string,
  opacity: PropTypes.string,
  font: PropTypes.string,
  head_font: PropTypes.string,
  bg_position: PropTypes.string,
  bg_repeat: PropTypes.string,
  bg_attachment: PropTypes.string,
  bg_size: PropTypes.string
};
