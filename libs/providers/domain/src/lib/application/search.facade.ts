import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Provider } from '../entities/provider';
import { ProviderDataService } from '../infrastructure/provider.data.service';


@Injectable({ providedIn: 'root' })
export class SearchFacade {

    private providerListSubject = new BehaviorSubject<Provider[]>([]); 
    providerList$ = this.providerListSubject.asObservable();

    constructor(private providerDataService: ProviderDataService) {
    }

    load(): void {
        this.providerDataService.load().subscribe(
            providerList => {
                this.providerListSubject.next(providerList)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
