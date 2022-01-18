const colors = {
  accent: {
    light: '#FBCE3E',
    base: '#FBB23E',
    dark: '#E8A131',
  },
  white: '#FFF',
  black: '#585858',
};

export const buttonColors = {
  primary: {
    text: colors.white,
    background: colors.accent.light,
    border: colors.accent.light,
  },
  secondary: {
    text: colors.accent.light,
    background: colors.white,
    border: colors.accent.light,
  }
};

export const textColors = {
  primary: colors.accent.base,
  secondary: colors.black,
};

export const cardImageColors = {
  primary: colors.accent.light,
  secondary: colors.accent.base,
  text: colors.white,
}
