import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PROVIDERS_FEATURE_KEY,
  State,
  ProvidersPartialState,
  providersAdapter
} from './providers.reducer';

// Lookup the 'Providers' feature state managed by NgRx
export const getProvidersState = createFeatureSelector<
  ProvidersPartialState,
  State
>(PROVIDERS_FEATURE_KEY);

const { selectAll, selectEntities } = providersAdapter.getSelectors();

export const getProvidersLoaded = createSelector(
  getProvidersState,
  (state: State) => state.loaded
);

export const getProvidersError = createSelector(
  getProvidersState,
  (state: State) => state.error
);

export const getAllProviders = createSelector(
  getProvidersState,
  (state: State) => selectAll(state)
);

export const getProvidersEntities = createSelector(
  getProvidersState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getProvidersState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getProvidersEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
