import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromProviders from './root.reducer';
import * as ProvidersSelectors from './root.selectors';

@Injectable()
export class RootFacade {
 
  constructor( ) {}

  dispatch(action: Action) {

  }
}
