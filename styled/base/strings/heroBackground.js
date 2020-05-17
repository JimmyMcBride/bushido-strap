import { css } from "styled-components";
import { bgCover, bgAttach } from "../../maps";

export default css`
  background-image: ${(props) =>
    props.bgSrc ? `url(${props.bgSrc})` : "none"};
  opacity: ${(props) => (props.opacity ? props.opacity : "none")};
  background-position: ${(props) =>
    props.bgPosition ? props.bgPosition : "center"};
  background-repeat: ${(props) =>
    props.bgRepeat ? props.bgRepeat : "no-repeat"};
  background-attachment: ${(props) =>
    props.bgAttachment ? props.bgAttachment : bgAttach};
  background-size: ${(props) => (props.bgSize ? props.bgSize : bgCover)};
`;
