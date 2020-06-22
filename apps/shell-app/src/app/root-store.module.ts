import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RootEffects } from './+state/root.effects';
import * as fromRoot from './+state/root.reducer';
import { DebugEffects } from './components/debug/debug.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(
      { app: fromRoot.reducer },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([RootEffects, DebugEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    RootEffects
    // these aren't exported 😭
    // {
    //   provide: REDUX_DEVTOOLS_EXTENSION,
    //   useFactory: () => {
    //    const params = new URLSearchParams(location.search);
    //    if (params.get('debug') === 'true') {
    //     return createReduxDevtoolsExtension();
    //    }
    //    return false;
    //   }
    // }
  ]
})
export class RootStoreModule {}
