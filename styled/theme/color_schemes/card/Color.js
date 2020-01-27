import theme from "../../index";

const getValue = props =>
  props.invert
    ? {
        // color: theme.gray1,
        // background: theme.gray8
        background: `${props =>
          props.background ? props.background : theme.gray8}`,
        color: `${props => (props.color ? props.color : theme.gray1)}`
      }
    : {
        // color: `${theme.gray8}`,
        // background: `${theme.gray1}`
        background: `${props =>
          props.background ? props.background : theme.gray1}`,
        color: `${props => (props.color ? props.color : theme.gray8)}`
      };

export default getValue;
