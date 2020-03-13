import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../theme";
import { marg, pad, bgCover, bgFixed } from "../maps";

// root container for the application
const AppWrapper = styled.div`
  background: ${props => (props.bg ? props.bg : theme.gray2)};
  background-image: ${props =>
    props.bg_src ? `url(${props.bg_src})` : "none"};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  font-family: ${props => (props.font ? props.font : '"Raleway", sans-serif')};
  background-position: ${props =>
    props.bg_position ? props.bg_position : "center"};
  background-repeat: ${props =>
    props.bg_repeat ? props.bg_repeat : "no-repeat"};
  background-attachment: ${props =>
    props.bg_attachment ? props.bg_attachment : bgFixed};
  background-size: ${props => (props.bg_size ? props.bg_size : bgCover)};
  min-height: ${props => (props.min_h ? props.min_h : "none")};
  max-width: ${props => (props.max_w ? props.max_w : "none")};
  min-width: ${props => (props.min_w ? props.min_w : "none")};
  max-height: ${props => (props.max_h ? props.max_h : "none")};
  margin: ${props => (props.m ? props.m : marg)};
  padding: ${props => (props.p ? props.p : pad)};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props =>
      props.head_font ? props.head_font : '"Raleway", sans-serif'};
    line-height: 1.2;
    margin: 1.6rem;
  }
`;

export default AppWrapper;

AppWrapper.propTypes = {
  m: PropTypes.string,
  p: PropTypes.string,
  min_h: PropTypes.string,
  max_w: PropTypes.string,
  min_w: PropTypes.string,
  max_h: PropTypes.string,
  bg: PropTypes.string,
  bg_src: PropTypes.string,
  opacity: PropTypes.string,
  font: PropTypes.string,
  head_font: PropTypes.string,
  bg_position: PropTypes.string,
  bg_repeat: PropTypes.string,
  bg_attachment: PropTypes.string,
  bg_size: PropTypes.string,
};
