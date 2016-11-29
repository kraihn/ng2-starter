import { compose } from '@ngrx/core/compose';
import { Observable } from 'rxjs/Observable';
import '@ngrx/core/add/operator/select';

import * as app from '../app-state/state';
import * as session from './state';

function initalized(state$: Observable<session.State>) {
  return state$.select(s => s.initalized);
}

function loading(state$: Observable<session.State>) {
  return state$.select(s => s.isLoading);
}

function hasError(state$: Observable<session.State>) {
  return state$.select(s => s.hasError);
}

function user(state$: Observable<session.State>) {
  return state$.select(s => s.user);
}

function isAuthenticated(state$: Observable<session.State>) {
  return state$.select(s => !!s.user);
}


export function getSessionState(state$: Observable<app.State>) {
  return state$.select(state => state.session);
}

export const getInitalized = compose(initalized, getSessionState);
export const getLoading = compose(loading, getSessionState);
export const getHasError = compose(hasError, getSessionState);
export const getUser = compose(user, getSessionState);
export const getIsAuthenticated = compose(isAuthenticated, getSessionState);
