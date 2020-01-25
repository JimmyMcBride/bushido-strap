import theme from "../../index";

const getColor = props =>
  props.primary
    ? {
        color: `${theme.gray0}`,
        background: `${theme.blue3}`
      }
    : props.secondary
    ? {
        color: `${theme.gray0}`,
        background: `${theme.purple3}`
      }
    : props.accent
    ? {
        color: `${theme.gray0}`,
        background: `${theme.magenta3}`
      }
    : props.success
    ? {
        color: `${theme.gray0}`,
        background: `${theme.green3}`
      }
    : props.warning
    ? {
        color: `${theme.gray0}`,
        background: `${theme.orange3}`
      }
    : props.danger
    ? {
        color: `${theme.gray0}`,
        background: `${theme.red3}`
      }
    : props.invert
    ? {
        color: `${theme.gray8}`,
        background: `${theme.gray1}`
      }
    : {
        color: `${theme.gray0}`,
        background: `${theme.gray8}`
      };

export default getColor;
