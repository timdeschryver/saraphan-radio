import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'saraphan-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  @Input() public user: any; 
  constructor( private router: Router ) {}

  navigate(link) {
    this.router.navigate(['/'+ link]);
  }
}
