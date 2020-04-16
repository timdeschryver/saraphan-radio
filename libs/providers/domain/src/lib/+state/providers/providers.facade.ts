import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromProviders from './providers.reducer';
import * as ProvidersSelectors from './providers.selectors';
import { loadProviders } from './providers.actions';

@Injectable()
export class ProvidersFacade {
  loaded$ = this.store.pipe(select(ProvidersSelectors.getProvidersLoaded));
  allProviders$ = this.store.pipe(select(ProvidersSelectors.getAllProviders));
  selectedProviders$ = this.store.pipe(select(ProvidersSelectors.getSelected));

  constructor(private store: Store<fromProviders.ProvidersPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
  loadProviders(){
    this.store.dispatch(loadProviders());
  }
}
