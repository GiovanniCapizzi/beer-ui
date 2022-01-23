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
  },
};

export const roundButtonColors = {
  primary: {
    icon: colors.accent.base,
    background: colors.white,
    border: colors.accent.base,
    text: colors.accent.base,
  },
  secondary: {
    icon: colors.white,
    background: colors.accent.base,
    border: colors.accent.base,
    text: colors.white,
  },
};

export const textColors = {
  primary: colors.accent.base,
  secondary: colors.black,
};

export const cardImageColors = {
  primary: colors.accent.light,
  secondary: colors.accent.base,
  text: colors.white,
};

export const boxImageColors = {
  text: colors.white,
};

export const chipColors = {
  text: colors.white,
  background: colors.accent.base,
  foreground: colors.accent.light,
};

export const headerColors = {
  firstLayer: colors.accent.light,
  secondLayer: colors.accent.base,
  thirdLayer: colors.accent.dark,
};
