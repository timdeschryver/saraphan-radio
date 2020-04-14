import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersDomainModule } from '@saraphan/providers/domain';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [CommonModule, ProvidersDomainModule],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class ProvidersFeatureSearchModule {}
