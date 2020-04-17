import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'saraphan-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  constructor(private auth: AuthService,private router: Router) {
    this.auth.localAuthSetup();
  }
  user = this.auth.userProfile$
  loggedIn = this.auth.loggedIn
  showShell = true;
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
  register(){
    this.router.navigate([ '/account' ])
    this.showShell = false;
  }
}
