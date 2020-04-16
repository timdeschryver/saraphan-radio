import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ProvidersActions from './providers.actions';
import { ProvidersEntity } from '../../entities/providers.models';

export const PROVIDERS_FEATURE_KEY = 'providers';

export interface State extends EntityState<ProvidersEntity> {
  selectedId?: string | number; // which Providers record has been selected
  loaded: boolean; // has the Providers list been loaded
  error?: string | null; // last none error (if any)
}

export interface ProvidersPartialState {
  readonly [PROVIDERS_FEATURE_KEY]: State;
}

export const providersAdapter: EntityAdapter<ProvidersEntity> = createEntityAdapter<
  ProvidersEntity
>();

export const initialState: State = providersAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const providersReducer = createReducer(
  initialState,
  on(ProvidersActions.loadProviders, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(ProvidersActions.loadProvidersSuccess, (state, { providers }) =>
    providersAdapter.setAll(providers, { ...state, loaded: true })
  ),
  on(ProvidersActions.loadProvidersFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return providersReducer(state, action);
}
