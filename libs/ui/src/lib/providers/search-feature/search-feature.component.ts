import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-feature',
  templateUrl: './search-feature.component.html',
  styleUrls: ['./search-feature.component.scss']
})
export class SearchFeatureComponent implements OnInit {
@Input() providerLists: any;
  constructor() { }

  ngOnInit(): void {
  }

}
