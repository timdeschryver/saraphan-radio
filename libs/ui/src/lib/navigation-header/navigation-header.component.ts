import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public loginEvent = new EventEmitter();
  @Output() public logoutEvent = new EventEmitter();
  @Input() public user:any;
  constructor() { }

  ngOnInit(): void {
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  login(){
    this.loginEvent.emit();
  }
  logout(){
    this.logoutEvent.emit();

  }
}
