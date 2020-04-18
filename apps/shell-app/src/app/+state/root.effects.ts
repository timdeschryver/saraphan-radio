import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, rootEffectsInit } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as RootActions from './root.actions';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';

@Injectable()
export class RootEffects {

  loadProviders$ = createEffect(() =>
  this.actions$.pipe(
    ofType(RootActions.LoginAction),
    fetch({
      run: () => {
         this.auth.login()
      },
      onError: (action, error) => {
        console.error('Error', error);
        return RootActions.loadUserFailure({ error });
      }
    })
  )
);

  constructor(private actions$: Actions,private auth: AuthService) {
    this.auth.localAuthSetup();
  }
}
