import theme from "../theme";

export const getCodeValue = props =>
  props.light
    ? {
        background: `${theme.gray8}`
      }
    : props.dark
    ? {
        color: `${theme.gray8}`,
        background: `${theme.gray2}`
      }
    : {
        color: `${theme.gray8}`,
        background: `${theme.gray1}`
      };
