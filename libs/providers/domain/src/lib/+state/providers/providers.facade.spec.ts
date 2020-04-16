import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { ProvidersEntity } from '../../entities/providers.models';
import { ProvidersEffects } from './providers.effects';
import { ProvidersFacade } from './providers.facade';

import * as ProvidersSelectors from './providers.selectors';
import * as ProvidersActions from './providers.actions';
import {
  PROVIDERS_FEATURE_KEY,
  State,
  initialState,
  reducer
} from './providers.reducer';

interface TestSchema {
  providers: State;
}

describe('ProvidersFacade', () => {
  let facade: ProvidersFacade;
  let store: Store<TestSchema>;
  const createProvidersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as ProvidersEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(PROVIDERS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([ProvidersEffects])
        ],
        providers: [ProvidersFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(ProvidersFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allProviders$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(ProvidersActions.loadProviders());

        list = await readFirst(facade.allProviders$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadProvidersSuccess` to manually update list
     */
    it('allProviders$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allProviders$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          ProvidersActions.loadProvidersSuccess({
            providers: [
              createProvidersEntity('AAA'),
              createProvidersEntity('BBB')
            ]
          })
        );

        list = await readFirst(facade.allProviders$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
