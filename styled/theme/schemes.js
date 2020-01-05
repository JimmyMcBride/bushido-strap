export const getColor = props =>
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
        color: `${theme.gray0}`,
        background: `${theme.gray8}`
      }
    : {
        color: `${theme.gray8}`,
        background: `${theme.gray1}`
      };

export const getHover = props =>
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
        color: `${theme.gray8}`,
        background: `${theme.gray1}`
      }
    : {
        color: `${theme.gray1}`,
        background: `${theme.gray7}`
      };

export const getValue = props =>
  props.light
    ? {
        color: `${theme.gray9}`,
        background: `${theme.gray0}`
      }
    : props.dark
    ? {
        color: `${theme.gray0}`,
        background: `${theme.gray8}`
      }
    : {
        color: `${theme.gray9}`,
        background: `${theme.gray2}`
      };

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
