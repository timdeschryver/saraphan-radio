import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersDomainModule } from '@saraphan/providers/domain';
import { ProvidersSearchComponent } from './search.component';
import { MaterialModule} from '@saraphan/ui';

@NgModule({
  imports: [CommonModule, ProvidersDomainModule, MaterialModule],
  declarations: [ProvidersSearchComponent],
  exports: [ProvidersSearchComponent]
})
export class ProvidersFeatureSearchModule {}
