import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromProviders from './providers.reducer';
import * as ProvidersActions from './providers.actions';
import { ProviderDataService } from '@saraphan/providers/domain';

@Injectable()
export class ProvidersEffects {

  loadProviders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProvidersActions.loadProviders),
      fetch({
        run: action => {
          return ProvidersActions.loadProvidersSuccess({ providers: [] });

        //   this.providerDataService.load().pipe(
        //     providerList => {

        //     })
        // );
        //   // Your custom service 'load' logic goes here. For now just return a success action...
        },

        onError: (action, error) => {
          console.error('Error', error);
          return ProvidersActions.loadProvidersFailure({ error });
        }
      })
    )
  );

  constructor(private actions$: Actions,private providerDataService: ProviderDataService) {}
}
