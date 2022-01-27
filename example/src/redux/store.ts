import { createStore, createTypedHooks } from 'easy-peasy';
import model, { StoreModel } from './model';

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;

export const store = createStore(model);
