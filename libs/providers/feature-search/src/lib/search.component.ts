import { Component, ChangeDetectionStrategy} from '@angular/core';
import { ProvidersFacade } from '@saraphan/providers/domain';


@Component({
  selector: 'providers-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProvidersSearchComponent   {


    providerList$ = this.app.allProviders$;
    constructor(private app: ProvidersFacade) {
      console.log("dispatch")
      this.app.loadProviders();

    }
}

