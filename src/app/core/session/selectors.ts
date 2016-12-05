import { compose } from '@ngrx/core/compose';
import { Observable } from 'rxjs/Observable';
import '@ngrx/core/add/operator/select';

import * as app from '../app-state/state';
import * as session from './state';

function _initalized(state$: Observable<session.State>) {
  return state$.select(s => s.initalized);
}

function _loading(state$: Observable<session.State>) {
  return state$.select(s => s.isLoading);
}

function _hasError(state$: Observable<session.State>) {
  return state$.select(s => s.hasError);
}

function _user(state$: Observable<session.State>) {
  return state$.select(s => s.user);
}

function _isAuthenticated(state$: Observable<session.State>) {
  return state$.select(s => !!s.user);
}

function _error(state$: Observable<session.State>) {
  return state$.select(s => s.error);
}


export function getSessionState(state$: Observable<app.State>) {
  return state$.select(state => state.session);
}

export const getInitalized = compose(_initalized, getSessionState);
export const getLoading = compose(_loading, getSessionState);
export const getHasError = compose(_hasError, getSessionState);
export const getError = compose(_error, getSessionState);
export const getUser = compose(_user, getSessionState);
export const getIsAuthenticated = compose(_isAuthenticated, getSessionState);
