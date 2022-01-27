import { Action, action } from 'easy-peasy';
import { ColorsProps, defaultColors } from 'beer-ui';

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
