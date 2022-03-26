import { Action, action } from 'easy-peasy';
import { defaultColors } from '@giovannicapizzi/beer-ui';

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

export interface UIModel {
  customTheme: ColorsProps;
  setCustomTheme: Action<UIModel, ColorsProps>;
}

export const ui: UIModel = {
  customTheme: defaultColors,
  setCustomTheme: action((state, customTheme) => {
    state.customTheme = customTheme;
  }),
};
