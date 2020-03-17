import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../theme";
import { marg, pad, bgCover, bgFixed } from "../maps";

// root container for the application
const AppWrapper = styled.div`
  background: ${props => (props.bg ? props.bg : theme.gray2)};
  background-image: ${props => (props.bgSrc ? `url(${props.bgSrc})` : "none")};
  opacity: ${props => (props.opacity ? props.opacity : "none")};
  font-family: ${props => (props.font ? props.font : '"Raleway", sans-serif')};
  background-position: ${props =>
    props.bgPosition ? props.bgPosition : "center"};
  background-repeat: ${props =>
    props.bgRepeat ? props.bgRepeat : "no-repeat"};
  background-attachment: ${props =>
    props.bgAttachment ? props.bgAttachment : bgFixed};
  background-size: ${props => (props.bgSize ? props.bgSize : bgCover)};
  position: ${props => (props.position ? props.position : "absolute")};
  top: ${props => (props.top ? props.top : 0)}
  right: ${props => (props.right ? props.right : 0)}
  bottom: ${props => (props.bottom ? props.bottom : 0)}
  left: ${props => (props.left ? props.left : 0)}
  min-height: ${props => (props.minH ? props.minH : "none")};
  max-width: ${props => (props.maxW ? props.maxW : "none")};
  min-width: ${props => (props.minW ? props.minW : "none")};
  max-height: ${props => (props.maxH ? props.maxH : "none")};
  margin: ${props => (props.m ? props.m : marg)};
  padding: ${props => (props.p ? props.p : pad)};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props =>
      props.headFont ? props.headFont : '"Raleway", sans-serif'};
    line-height: 1.2;
    margin: 1.6rem;
  }
`;

export default AppWrapper;

AppWrapper.propTypes = {
  m: PropTypes.string,
  p: PropTypes.string,
  minH: PropTypes.string,
  maxW: PropTypes.string,
  minW: PropTypes.string,
  maxH: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  left: PropTypes.string,
  bottom: PropTypes.string,
  bg: PropTypes.string,
  bgSrc: PropTypes.string,
  opacity: PropTypes.string,
  font: PropTypes.string,
  headFont: PropTypes.string,
  bgPosition: PropTypes.string,
  bgRepeat: PropTypes.string,
  bgAttachment: PropTypes.string,
  bgSize: PropTypes.string,
};
