import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProviders from './+state/providers/providers.reducer';
import { ProvidersEffects } from './+state/providers/providers.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(
      fromProviders.PROVIDERS_FEATURE_KEY,
      fromProviders.reducer
    ),
    EffectsModule.forFeature([ProvidersEffects])
  ],
})
export class ProvidersDomainStateModule {}
