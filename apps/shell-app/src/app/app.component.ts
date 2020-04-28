import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from './+state/root.reducer';
import { Store, select } from '@ngrx/store';
import { LoginAction, LogoutAction } from './+state/root.actions';
import { selectUser, RootState } from './+state/root.selectors';
import { ApiService } from './api.service';

@Component({
  selector: 'saraphan-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';
  responseJson: string;

  constructor(private store: Store<RootState>, private router: Router,private api: ApiService) {}
  user$ = this.store.pipe(select(selectUser));

  showShell = true;
  login() {
    this.store.dispatch(LoginAction({url:""}));
  }
  logout() {
    this.store.dispatch(LogoutAction());
  }
  register() {
    this.router.navigate(['/account']);
    this.showShell = false;
  }
  pingApi() {
    this.api.ping$().subscribe(
      res => this.responseJson = res
    );
  }
}
