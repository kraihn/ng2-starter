import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';


import { AngularFire, FirebaseAuthState, AuthProviders, AuthMethods } from 'angularfire2';

import * as session from './actions';

@Injectable()
export class SessionEffects {

  constructor(
    private router: Router,
    private actions$: Actions,
    private af: AngularFire) { }

  @Effect()
  loginWithPassword$: Observable<Action> = this.actions$
    .ofType(session.ActionTypes.LOGIN_WITH_PASSWORD)
    .map((action: session.LoginWithPasswordAction) => action.payload)
    .switchMap(credentials => {
      const afLogin = this.af.auth.login(credentials);

      return fromPromise(afLogin as Promise<FirebaseAuthState>)
        .map(authState => new session.LoginCompleteAction())
        .catch((error) => of(new session.LoginErrorAction(error)));
    });

  @Effect({ dispatch: false })
    loginSuccess$: Observable<Action> = this.actions$
      .ofType(session.ActionTypes.LOGIN_COMPLETE, session.ActionTypes.REGISTER_COMPLETE)
      .do(() => {
        this.router.navigate(['/home']);
      });

  @Effect()
  register$: Observable<Action> = this.actions$
    .ofType(session.ActionTypes.REGISTER)
    .map((action: session.RegisterAction) => action.payload)
    .switchMap(credentials => {
      const afLogin = this.af.auth.createUser(credentials);

      return fromPromise(afLogin as Promise<FirebaseAuthState>)
        .map(authState => new session.RegisterCompleteAction())
        .catch((error) => of(new session.RegisterError(error)));
    });

  @Effect({ dispatch: false })
  loginWithGoogle$: Observable<Action> = this.actions$
    .ofType(session.ActionTypes.LOGIN_WITH_GOOGLE)
    .do(() => {
      this.af.auth.login({
        provider: AuthProviders.Google,
        method: AuthMethods.Redirect,
      });
    });

  @Effect({ dispatch: false })
  logout$: Observable<Action> = this.actions$
    .ofType(session.ActionTypes.LOGOUT)
    .do(() => {
      this.af.auth.logout();
      this.router.navigate(['/login']);
    });
}

