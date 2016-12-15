import { Action } from '@ngrx/store';
import { Credentials, User, Error } from './models'
import { type } from '../util';


export const ActionTypes = {
  AUTH_CHANGED:       type('[Auth] Auth Changed'),
  LOGIN_WITH_PASSWORD:     type('[Auth] Login With Password'),
  LOGIN_WITH_GOOGLE:       type('[Auth] Login With Google'),
  LOGIN_COMPLETE:     type('[Auth] Login Complete'),
  LOGIN_ERROR:        type('[Auth] Login Error'),
  LOGOUT:             type('[Auth] Logout'),
  REGISTER:           type('[Auth] Register'),
  REGISTER_COMPLETE:  type('[Auth] Register Complete'),
  REGISTER_ERROR:  type('[Auth] Register Error'),
};

export class AuthChangedAction implements Action {
  type = ActionTypes.AUTH_CHANGED;

  constructor(public payload: User) { }
}

export class LoginWithPasswordAction implements Action {
  type = ActionTypes.LOGIN_WITH_PASSWORD;

  constructor(public payload: Credentials) { }
}

export class LoginWithGoogleAction implements Action {
  type = ActionTypes.LOGIN_WITH_GOOGLE;
}

export class LoginCompleteAction implements Action {
  type = ActionTypes.LOGIN_COMPLETE;
}

export class LoginErrorAction implements Action {
  type = ActionTypes.LOGIN_ERROR;

  constructor(public payload: Error) { }
}

export class LogoutAction implements Action {
  type = ActionTypes.LOGOUT;
}

export class RegisterAction implements Action {
  type = ActionTypes.REGISTER;

  constructor(public payload: Credentials) { }
}

export class RegisterCompleteAction implements Action {
  type = ActionTypes.REGISTER_COMPLETE;
}

export class RegisterError implements Action {
  type = ActionTypes.REGISTER_ERROR;

  constructor(public payload: Error) { }
}


export type SessionAction
  = AuthChangedAction
  | LoginWithPasswordAction
  | LoginWithGoogleAction
  | LoginCompleteAction
  | LoginErrorAction
  | LogoutAction
  | RegisterCompleteAction
  | RegisterAction
  | RegisterError;
