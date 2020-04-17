import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'saraphan-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  @Input() public isLoggedIn:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
