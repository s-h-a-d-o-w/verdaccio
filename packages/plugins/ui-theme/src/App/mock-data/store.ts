import { init } from '@rematch/core';
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';

import { models, RootModel } from '../../store/models';

import { initialState } from './initialState';

type FullModel = ExtraModelsFromLoading<RootModel>;

const rematchInitialState = init<RootModel, FullModel>({ models }).getState();

export const store = init<RootModel, FullModel>({
  models,
  plugins: [loadingPlugin()],
  redux: { initialState: { ...rematchInitialState, ...initialState } },
});
