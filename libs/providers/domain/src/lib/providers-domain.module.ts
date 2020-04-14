import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersFacade } from './+state/providers/providers.facade';
import { ProvidersDomainStateModule } from './providers-domain-state.module';

@NgModule({
  imports: [
    CommonModule,
    ProvidersDomainStateModule
  ],
  providers: [ProvidersFacade]
})
export class ProvidersDomainModule {}
