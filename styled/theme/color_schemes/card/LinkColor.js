import theme from "../../index";

const getLinkValue = props =>
  props.invert
    ? {
        color: `${theme.gray1}`
      }
    : {
        color: `${theme.gray8}`
      };

export default getLinkValue;
