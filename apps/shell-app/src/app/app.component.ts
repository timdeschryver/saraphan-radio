import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from './+state/root.reducer';
import { Store, select } from '@ngrx/store';
import { LoginAction, LogoutAction } from './+state/root.actions';
import { selectUser, RootState } from './+state/root.selectors';

@Component({
  selector: 'saraphan-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  constructor(private store: Store<RootState>, private router: Router) {}
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
}
