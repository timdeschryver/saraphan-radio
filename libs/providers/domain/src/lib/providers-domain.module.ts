import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersFacade } from './+state/providers/providers.facade'; 

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [ProvidersFacade]
})
export class ProvidersDomainModule {}
