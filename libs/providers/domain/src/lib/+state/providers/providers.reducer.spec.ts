import { ProvidersEntity } from '../../entities/providers.models';
import * as ProvidersActions from './providers.actions';
import { State, initialState, reducer } from './providers.reducer';

describe('Providers Reducer', () => {
  const createProvidersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as ProvidersEntity);

  beforeEach(() => {});

  describe('valid Providers actions', () => {
    it('loadProvidersSuccess should return set the list of known Providers', () => {
      const providers = [
        createProvidersEntity('PRODUCT-AAA'),
        createProvidersEntity('PRODUCT-zzz')
      ];
      const action = ProvidersActions.loadProvidersSuccess({ providers });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
