import theme from "../../index";

const getCodeValue = props =>
  props.invert
    ? {
        color: `${theme.gray8}`,
        background: `${theme.gray3}`
      }
    : {
        color: `${theme.gray8}`,
        background: `${theme.gray3}`
      };

export default getCodeValue;
