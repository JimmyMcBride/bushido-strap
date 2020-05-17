import {
  flexDirection,
  flexJustify,
  flexItems,
  flexContent,
  flexWrap,
} from "../../maps";

export default css`
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${(props) =>
    props.direction ? props.direction : flexDirection};
  justify-content: ${(props) => (props.justify ? props.justify : flexJustify)};
  align-items: ${(props) => (props.align ? props.align : flexItems)};
  align-content: ${(props) => (props.content ? props.content : flexContent)};
`;
