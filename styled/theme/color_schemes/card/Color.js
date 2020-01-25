import theme from "../../index";

const getValue = props =>
  props.invert
    ? {
        color: `${theme.gray1}`,
        background: `${theme.gray8}`
      }
    : {
        color: `${theme.gray8}`,
        background: `${theme.gray1}`
      };

export default getValue;
