import { createAction, props } from '@ngrx/store';
import { UserEntity } from "./user-entity.type";

export const LoginAction = createAction(
  '[Root] Login',
  props<{ url: string }>()
);
export const LogoutAction = createAction('[Root] Logout');

export const loadUserSuccess = createAction(
  '[Root] User login Success',
  props<{ userData: UserEntity }>()
);

export const loadUserFailure = createAction(
  '[Root] User login Failure',
  props<{ error: any }>()
);

export const genericFailure = createAction(
  '[Root] Generic Failure',
  props<{ error: any }>()
);

export const changeLink = createAction(
  '[Root] Change link',
  props<{ link: string  }>()
);
