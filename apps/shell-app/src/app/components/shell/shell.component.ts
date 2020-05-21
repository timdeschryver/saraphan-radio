import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RootState } from '../../+state/root.selectors';
import { changeLink } from '../../+state/root.actions';

@Component({
  selector: 'saraphan-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  @Input() public user: any;
  constructor(private store: Store<RootState>) {}

  navigate(link) {
    this.store.dispatch(changeLink({ link }));
  }
}
