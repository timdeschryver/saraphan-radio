import { createAction, props } from '@ngrx/store';
import { UserEntity } from "./user-entity.type";

export const LoginAction = createAction('[Root] Login');
export const LogoutAction = createAction('[Root] Logout');

export const loadUserSuccess = createAction(
  '[Root] User login Success',
  props<{ userData: UserEntity }>()
);

export const loadUserFailure = createAction(
  '[Root] User login Failure',
  props<{ error: any }>()
);
