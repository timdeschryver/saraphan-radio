import { Component, OnInit} from '@angular/core';
import { SearchFacade } from '@saraphan/providers/domain';

@Component({
  selector: 'providers-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    
    
    providerList$ = this.searchFacade.providerList$;


    constructor(private searchFacade: SearchFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.searchFacade.load();
    }

}

