import theme from "../../index";

const getValue = props =>
  props.invert
    ? {
        color: `${theme.gray0}`,
        background: `${theme.gray8}`
      }
    : {
        color: `${theme.gray8}`,
        background: `${theme.gray0}`
      };

export default getValue;
