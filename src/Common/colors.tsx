export interface ColorsProps {
  accent: {
    light: string;
    base: string;
    dark: string;
  };
  white: string;
  black: string;
}

export const defaultColors: ColorsProps = {
  accent: {
    light: '#FBCE3E',
    base: '#FBB23E',
    dark: '#E8A131',
  },
  white: '#FFF',
  black: '#585858',
};

export const buildTheme = (colors: ColorsProps) => ({
  boxImage: {
    text: colors.white,
  },
  text: {
    primary: colors.accent.base,
    secondary: colors.black,
  },
  cardImage: {
    primary: colors.accent.light,
    secondary: colors.accent.base,
    text: colors.white,
  },
  chip: {
    text: colors.white,
    background: colors.accent.base,
    foreground: colors.accent.light,
  },
  header: {
    firstLayer: colors.accent.light,
    secondLayer: colors.accent.base,
    thirdLayer: colors.accent.dark,
  },
  button: {
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
  },
  roundButton: {
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
  },
});
