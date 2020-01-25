import theme from "../theme";

const getHover = props =>
  props.primary
    ? {
        color: `${theme.gray0}`,
        background: `${theme.blue5}`
      }
    : props.secondary
    ? {
        color: `${theme.gray0}`,
        background: `${theme.purple5}`
      }
    : props.accent
    ? {
        color: `${theme.gray0}`,
        background: `${theme.magenta5}`
      }
    : props.success
    ? {
        color: `${theme.gray0}`,
        background: `${theme.green5}`
      }
    : props.warning
    ? {
        color: `${theme.gray0}`,
        background: `${theme.orange4}`
      }
    : props.danger
    ? {
        color: `${theme.gray0}`,
        background: `${theme.red5}`
      }
    : props.invert
    ? {
        color: `${theme.gray1}`,
        background: `${theme.gray7}`
      }
    : {
        color: `${theme.gray8}`,
        background: `${theme.gray1}`
      };

export default getHover;
