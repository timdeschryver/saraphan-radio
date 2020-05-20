import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'saraphan-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  @Input() public user: any; 
  @Output() public registerEvent = new EventEmitter();

  constructor() {}

  register() {
    this.registerEvent.emit();
  }
}
