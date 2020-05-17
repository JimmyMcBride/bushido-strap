import {
  columnDirection,
  flexJustify,
  centerAlign,
  flexContent,
  flexWrap,
} from "../../maps/index";

export default `
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${(props) =>
    props.direction ? props.direction : columnDirection};
  justify-content: ${(props) => (props.justify ? props.justify : flexJustify)};
  align-items: ${(props) => (props.align ? props.align : centerAlign)};
  align-content: ${(props) => (props.content ? props.content : flexContent)};
`;
