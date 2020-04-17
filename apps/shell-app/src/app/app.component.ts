import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'saraphan-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  constructor(private auth: AuthService) {
    this.auth.localAuthSetup();
  }
  user = this.auth.userProfile$
  loggedIn = this.auth.loggedIn
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
  register(){
    if(this.loggedIn){
      
    }
  }
}
