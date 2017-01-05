import { Action } from '@ngrx/store';
import { Credentials, User, Error } from './models'
import { makeActionType } from '../shared';


export class ActionTypes {
  static readonly AUTH_CHANGED = makeActionType('[Auth] Auth Changed');
  static readonly LOGIN_WITH_PASSWORD = makeActionType('[Auth] Login With Password');
  static readonly LOGIN_WITH_GOOGLE = makeActionType('[Auth] Login With Google');
  static readonly LOGIN_COMPLETE = makeActionType('[Auth] Login Complete');
  static readonly LOGIN_ERROR = makeActionType('[Auth] Login Error');
  static readonly LOGOUT = makeActionType('[Auth] Logout');
  static readonly REGISTER = makeActionType('[Auth] Register');
  static readonly REGISTER_COMPLETE = makeActionType('[Auth] Register Complete');
  static readonly REGISTER_ERROR = makeActionType('[Auth] Register Error');
};

export class AuthChangedAction implements Action {
  readonly type = ActionTypes.AUTH_CHANGED;

  constructor(public payload: User) { }
}

export class LoginWithPasswordAction implements Action {
  readonly type = ActionTypes.LOGIN_WITH_PASSWORD;

  constructor(public payload: Credentials) { }
}

export class LoginWithGoogleAction implements Action {
  readonly type = ActionTypes.LOGIN_WITH_GOOGLE;
}

export class LoginCompleteAction implements Action {
  readonly type = ActionTypes.LOGIN_COMPLETE;
}

export class LoginErrorAction implements Action {
  readonly type = ActionTypes.LOGIN_ERROR;

  constructor(public payload: Error) { }
}

export class LogoutAction implements Action {
  readonly type = ActionTypes.LOGOUT;
}

export class RegisterAction implements Action {
  readonly type = ActionTypes.REGISTER;

  constructor(public payload: Credentials) { }
}

export class RegisterCompleteAction implements Action {
  readonly type = ActionTypes.REGISTER_COMPLETE;
}

export class RegisterError implements Action {
  readonly type = ActionTypes.REGISTER_ERROR;

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
