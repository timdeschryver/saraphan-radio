import { createAction, props } from '@ngrx/store';
import { ProvidersEntity } from '../../entities/providers.models';

export const loadProviders = createAction('[Providers] Load Providers');

export const loadProvidersSuccess = createAction(
  '[Providers] Load Providers Success',
  props<{ providers: ProvidersEntity[] }>()
);

export const loadProvidersFailure = createAction(
  '[Providers] Load Providers Failure',
  props<{ error: any }>()
);
