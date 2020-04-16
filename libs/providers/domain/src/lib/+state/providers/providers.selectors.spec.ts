import { ProvidersEntity } from '../../entities/providers.models';
import { State, providersAdapter, initialState } from './providers.reducer';
import * as ProvidersSelectors from './providers.selectors';

describe('Providers Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getProvidersId = it => it['id'];
  const createProvidersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as ProvidersEntity);

  let state;

  beforeEach(() => {
    state = {
      providers: providersAdapter.addAll(
        [
          createProvidersEntity('PRODUCT-AAA'),
          createProvidersEntity('PRODUCT-BBB'),
          createProvidersEntity('PRODUCT-CCC')
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true
        }
      )
    };
  });

  describe('Providers Selectors', () => {
    it('getAllProviders() should return the list of Providers', () => {
      const results = ProvidersSelectors.getAllProviders(state);
      const selId = getProvidersId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ProvidersSelectors.getSelected(state);
      const selId = getProvidersId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getProvidersLoaded() should return the current 'loaded' status", () => {
      const result = ProvidersSelectors.getProvidersLoaded(state);

      expect(result).toBe(true);
    });

    it("getProvidersError() should return the current 'error' state", () => {
      const result = ProvidersSelectors.getProvidersError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
