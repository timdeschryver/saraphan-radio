import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { RootState, selectUser, isAuthenticated } from '../../../+state/root.selectors';
import { select, Store } from '@ngrx/store';
import { LoginAction } from '../../../+state/root.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<RootState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean | UrlTree> | boolean {
    return this.store.pipe(select(isAuthenticated)).pipe(
      tap(loggedIn => {
        if (!loggedIn) {
          this.store.dispatch(LoginAction({ url: state.url }));
        }
      })
    );
  }
}
