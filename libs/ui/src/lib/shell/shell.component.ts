import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'saraphan-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  @Input() public isLoggedIn: boolean;
  @Output() public registerEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  register() {
    this.registerEvent.emit();
  }
}
