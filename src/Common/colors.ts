import { transparentize } from 'polished';

export interface ColorsProps {
  accent: {
    light: string;
    base: string;
    dark: string;
  };
  white: string;
  grey: string;
  black: string;
  background: {
    light: string;
  };
  warn: string;
}

export const defaultColors: ColorsProps = {
  accent: {
    light: '#FBCE3E',
    base: '#FBB23E',
    dark: '#E8A131',
  },
  white: '#FFF',
  grey: '#585858',
  black: '#000',
  background: {
    light: '#F8F8F8',
  },
  warn: '#FF375F',
};

export const buildTheme = (colors: ColorsProps) => ({
  boxImage: {
    text: colors.white,
  },
  text: {
    primary: colors.accent.base,
    secondary: colors.grey,
  },
  imageButton: {
    border: transparentize(0.73, colors.grey),
  },
  toolbar: {
    primary: colors.accent.light,
    secondary: colors.accent.base,
    closeIcon: colors.white,
  },
  rating: {
    primary: colors.accent.light,
    secondary: colors.accent.base,
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
  dialog: {
    background: colors.white,
    closeIcon: transparentize(0.6, colors.black),
    header: colors.accent.base,
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
    white: {
      text: colors.white,
      background: 'transparent',
      border: colors.white,
    },
  },
  iconButton: {
    primary: colors.white,
    badge: colors.warn,
    light: colors.white,
    secondary: colors.accent.light,
  },
  bottomBar: {
    background: colors.accent.light,
  },
  bigButton: {
    primary: {
      text: colors.accent.base,
      white: colors.white,
      background: colors.white,
      border: colors.accent.base,
    },
    secondary: {
      text: colors.accent.light,
      white: colors.white,
      background: colors.white,
      border: colors.accent.light,
    },
  },
  slimButton: {
    primary: {
      text: colors.white,
      background: colors.accent.light,
      border: colors.accent.light,
    },
    secondary: {
      text: colors.accent.base,
      background: colors.white,
      border: colors.accent.base,
    },
    white: {
      text: colors.white,
      background: 'transparent',
      border: colors.white,
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
  cardItem: {
    primary: {
      text: colors.grey,
      selectedIcon: colors.white,
      highlight: colors.accent.base,
      background: colors.background.light,
    },
    secondary: {
      text: colors.grey,
      selectedIcon: colors.white,
      highlight: colors.accent.light,
      background: colors.background.light,
    },
  },
  flatCardItem: {
    text: colors.grey,
    highlight: colors.accent.base,
    background: colors.background.light,
  },
  item: {
    primary: {
      text: colors.grey,
      border: transparentize(0.9, colors.grey),
      background: colors.background.light,
    },
    secondary: {
      text: colors.grey,
      border: transparentize(0.8, colors.accent.base),
      background: transparentize(0.8, colors.accent.base),
    },
  },
  field: {
    color: colors.accent.base,
    background: colors.white,
    error: colors.warn,
  },
  searchField: {
    row: {
      title: colors.black,
      accent: transparentize(0.8, colors.accent.base),
      light: colors.background.light,
    },
    color: colors.accent.base,
    background: colors.white,
  },
  unitField: {
    error: colors.warn,
    accent: transparentize(0.8, colors.accent.base),
    color: colors.accent.base,
    background: colors.white,
  },
  avatar: {
    primary: {
      background: colors.accent.light,
    },
    secondary: {
      background: colors.accent.base,
    },
  },
  overlay: {
    background: colors.black,
    icon: colors.white,
  },
  colors,
});
