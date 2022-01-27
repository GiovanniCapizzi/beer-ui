import { ui, UIModel } from './ui';

export interface StoreModel {
  ui: UIModel;
}

const model: StoreModel = {
  ui,
};

export default model;
