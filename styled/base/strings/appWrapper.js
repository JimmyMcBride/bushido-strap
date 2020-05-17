import { css } from "styled-components";
import { theme } from "../../theme";
import { marg, pad } from "../../maps";

export default css`
  background: ${(props) => (props.bg ? props.bg : theme.colors.gray2)};
  font-family: ${(props) =>
    props.font ? props.font : '"Open Sans", sans-serif'};
  min-height: ${(props) => (props.minH ? props.minH : "none")};
  max-width: ${(props) => (props.maxW ? props.maxW : "none")};
  min-width: ${(props) => (props.minW ? props.minW : "none")};
  max-height: ${(props) => (props.maxH ? props.maxH : "none")};
  margin: ${(props) => (props.m ? props.m : marg)};
  padding: ${(props) => (props.p ? props.p : pad)};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props) =>
      props.headFont ? props.headFont : '"Bellota", cursive'};
    line-height: 1.2;
    margin: 1.6rem;
  }
`;
